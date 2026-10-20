#!/usr/bin/env python3
"""Read-only daily parity check against the canonical live GOV.UH identity.

The asset master is served from /var/www/govuh-brand and recorded in
docs/uh-identity/homepage-assets.json. The same byte-for-byte files must
be served by Forms runner and Forms admin, not historical 'UH'-named copies.
"""
import hashlib
import json
import sys
from pathlib import Path

import requests
from bs4 import BeautifulSoup

MANIFEST = Path("/etc/uhde/identity/homepage-assets.json")
HOMEPAGE = "https://www.gov.uhrblx.com"
FORMS = "https://submit.forms.service.gov.uhrblx.com"
ADMIN = "https://admin.forms.service.gov.uhrblx.com"
TIMEOUT = 18


def require(condition, message):
    if not condition:
        raise RuntimeError(message)


def fetch(session, url):
    response = session.get(url, timeout=TIMEOUT)
    require(response.status_code == 200, f"HTTP {response.status_code}: {url}")
    return response


def sources_ok(session, manifest):
    for role, data in manifest["assets"].items():
        name = data["file"]
        expected = data["sha256"]
        host_copy = Path(manifest["host_source_directory"]) / name
        require(host_copy.is_file(), f"Canonical host file absent: {name}")
        require(hashlib.sha256(host_copy.read_bytes()).hexdigest() == expected,
                f"Canonical host file changed: {name}")
        for origin in (HOMEPAGE, FORMS, ADMIN):
            actual = hashlib.sha256(fetch(session, origin + "/uh-brand/" + name).content).hexdigest()
            require(actual == expected, f"Identity mismatch {role} at {origin}: {name}")
    print("ASSET_SHA256_PARITY_PASS", len(manifest["assets"]), "assets x 3 products")


def html_ok(session):
    # Do not submit any form or inspect private data.
    pages = {
        "homepage": BeautifulSoup(fetch(session, HOMEPAGE + "/").text, "html.parser"),
        "forms_runner": BeautifulSoup(fetch(session, FORMS + "/form/17").text, "html.parser"),
        "forms_admin": BeautifulSoup(fetch(session, ADMIN + "/sign-in").text, "html.parser"),
    }
    for name, page in pages.items():
        logo = page.select_one("header svg.govuk-header__logotype image")
        require(logo and logo.get("href") == "/uh-brand/uh-header-crown-20261014.png",
                f"Wrong header crown: {name}")
        require("executed on device" not in str(page), f"Console output in public page: {name}")
    runner_footer = [i.get("src") for i in pages["forms_runner"].select("footer img")]
    admin_footer = [i.get("src") for i in pages["forms_admin"].select("footer img")]
    required_footer = [
        "/uh-brand/uh-crown-black-20261014.png",
        "/uh-brand/uh-government-coat-of-arms-footer-20261016.webp",
    ]
    require(runner_footer == required_footer, "Forms runner footer identity diverged")
    require(admin_footer == required_footer, "Forms admin footer identity diverged")
    homepage_footer = [i.get("src") for i in pages["homepage"].select("footer img")]
    require("/uh-brand/uh-crown-black-20261014.png" in homepage_footer,
            "Homepage black footer crown changed")
    require("uh-government-coat-of-arms-footer-20261016.webp" in
            fetch(session, HOMEPAGE + "/uh-brand/govuh-native-footer-v4.css").text,
            "Homepage copyright CSS no longer uses the recorded coat of arms")
    for name in ("forms_runner", "forms_admin"):
        meta = pages[name].select_one('meta[property="og:image"]')
        require(meta and meta.get("content") == "/uh-brand/uh-crown-opengraph-20261014.png",
                f"Sharing image identity mismatch: {name}")
    print("LIVE_PAGE_MARKUP_PARITY_PASS homepage, Forms runner, Forms admin")


def main():
    manifest = json.loads(MANIFEST.read_text(encoding="utf-8"))
    require(manifest["schema"] == "govuh-shared-identity-assets/v1", "Unknown identity edition")
    with requests.Session() as session:
        sources_ok(session, manifest)
        html_ok(session)
    print("GOVUH_SHARED_IDENTITY_PASS")


if __name__ == "__main__":
    try:
        main()
    except (RuntimeError, OSError, ValueError, requests.RequestException) as exc:
        print("GOVUH_SHARED_IDENTITY_FAIL:", exc, file=sys.stderr)
        sys.exit(1)
