require "rails_helper"
require "digest"

# Pin the actual GOV.UK implementation, not the look of a replacement menu.
# UK source: alphagov/govuk_publishing_components@0bea56ea01a5f4ae5cd0fd80fc6da5d73f3e631d.
# The only permitted changes to the native template are GOV.UH identity and URL.
describe "GOV.UH native super navigation upstream provenance" do
  let(:root) { File.expand_path("../..", __dir__) }

  it "uses the exact UK super navigation template apart from UH identity" do
    source = File.read(File.join(root, "app/views/govuk_publishing_components/components/_layout_super_navigation_header.html.erb"))
    expect(source).to include("gem-c-layout-super-navigation-header")
    expect(source).to include('govuk_publishing_components/components/govuk_logo/govuk_logo')
    expected_upstream = source.gsub("https://www.gov.uhrblx.com/", "https://www.gov.uk/").gsub("GOV.UH", "GOV.UK")
    expect(Digest::SHA256.hexdigest(expected_upstream)).to eq("065fd3e94f8caba4cecbf4849868c8bd388b85e1f33230f499e0a6d89f4c372e")
    expect(source).not_to include("govuh-menu-button")
  end

  it "uses the exact official UK super navigation JavaScript" do
    js = File.join(root, "app/assets/javascripts/govuk_publishing_components/components/layout-super-navigation-header.js")
    expect(Digest::SHA256.file(js).hexdigest).to eq("8fb681cbae490b79fff3a69156e7fc5c0661cdf0f858f450511e3f32ac2fce15")
  end

  it "uses the exact official UK super navigation stylesheet" do
    css = File.join(root, "app/assets/stylesheets/govuk_publishing_components/components/_layout-super-navigation-header.scss")
    expect(Digest::SHA256.file(css).hexdigest).to eq("68f0c817969571789e76042f307e32e7162574d6dea3d2e795dd55f26437ea4e")
  end
end
