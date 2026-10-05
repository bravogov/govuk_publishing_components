require "rails_helper"
require "digest"

# Identity belongs to the actual GOV.UK publishing components at their
# original header and footer slots. Do not imitate either with page CSS,
# a static site overlay, or artwork from an unrelated constitutional office.
describe "GOV.UH approved shared identity assets" do
  let(:root) { File.expand_path("../..", __dir__) }
  let(:images) { File.join(root, "app/assets/images/govuk_publishing_components") }
  let(:views) { File.join(root, "app/views/govuk_publishing_components/components") }

  it "uses the approved UH crown in the native GOV.UK header logo components" do
    expect(Digest::SHA256.file(File.join(images, "uh_header_crown.png")).hexdigest)
      .to eq("293218916b282a75c89326fab581942fe1f46652a32d122c17d47c9545398675")
    %w[govuk_logo/_govuk_logo.html.erb govuk_logo/_govuk_logo_crown_only.html.erb].each do |name|
      expect(File.read(File.join(views, name))).to include("govuk_publishing_components/uh_header_crown.png")
    end
    expect(File.read(File.join(views, "_layout_super_navigation_header.html.erb")))
      .to include("govuk_publishing_components/components/govuk_logo/govuk_logo")
    header_css = File.read(File.join(root, "app/assets/stylesheets/govuk_publishing_components/components/_layout-header.scss"))
    expect(header_css).not_to include("gem-c-uh-logotype")
  end

  it "keeps the exact upstream footer component and replaces only the Royal Arms asset" do
    footer = File.read(File.join(views, "_layout_footer.html.erb"))
    upstream_footer_sha256 = "da02ee0d948780d94ab4f47dfb01c93999fb01d5"
    expect(Digest::SHA256.hexdigest(footer)).to eq(upstream_footer_sha256)
    expect(footer).not_to include("uh_footer_arms")
    crest = File.read(File.join(root, "app/assets/images/govuk-crest.svg"))
    expect(crest).to include("data:image/webp;base64,")
    expect(File.read(File.join(views, "_machine_readable_metadata.html.erb")))
      .to include('image_url("govuk_publishing_components/uh_footer_arms.webp")')
  end
end
