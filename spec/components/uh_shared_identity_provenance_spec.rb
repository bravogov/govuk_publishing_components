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
  end

  it "uses the approved UH crown in the original footer crown slot and UH arms at the copyright crest asset seam" do
    expect(Digest::SHA256.file(File.join(images, "uh_footer_arms.webp")).hexdigest)
      .to eq("66cd5d449026855d0eb6308e1f62787be6cf90748b22da3194b22d5734de5644")
    expect(File.read(File.join(views, "_layout_footer.html.erb")))
      .to include('image_tag "govuk_publishing_components/uh_header_crown.png"')
    crest = File.read(File.join(root, "app/assets/images/govuk-crest.svg"))
    expect(crest).to include("data:image/webp;base64,")
    expect(File.read(File.join(views, "_machine_readable_metadata.html.erb")))
      .to include('image_url("govuk_publishing_components/uh_footer_arms.webp")')
  end
end
