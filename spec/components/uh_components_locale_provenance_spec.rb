require "rails_helper"
require "yaml"

# Shared navigation and footer copy must be supplied by the original component
# engine's locale loader, not injected into a replacement homepage or CSS.
describe "GOV.UH shared component translations" do
  let(:root) { File.expand_path("../..", __dir__) }
  let(:source) { YAML.safe_load(File.read(File.join(root, "config/locales/zz_uh_components.yml")))["en"]["components"] }

  it "uses the real super-navigation locale with only applicable UH services" do
    menu = source.fetch("layout_super_navigation_header")
    expect(menu.fetch("logo_link_title")).to eq("Go to the GOV.UH homepage")
    expect(menu.fetch("search_text")).to eq("Search GOV.UH")
    services = menu.fetch("navigation_links_columns").first.fetch("menu_contents").map { |item| item.fetch("label") }
    expect(services).to include("Citizenship and living in Havenstead")
    expect(services).not_to include("Driving and transport", "Working, jobs and pensions", "Benefits")
  end

  it "retains original footer translation slots for UH copyright and licence" do
    footer = source.fetch("layout_footer")
    expect(footer.fetch("copyright_html")).to include("nationalarchives.gov.uhrblx.com")
    expect(footer.fetch("licence_html")).to include("Open Government Licence v3.0")
  end
end
