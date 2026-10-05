require "rails_helper"
require "digest"

# Keep the public site's inherited GOV.UK document head and metadata architecture.
# Only substitute the approved UH identity in the source-owned asset slots.
RSpec.describe "GOV.UH original public layout identity slots" do
  let(:root) { File.expand_path("../..", __dir__) }
  let(:layout) { File.read(File.join(root, "app/views/govuk_publishing_components/components/_layout_for_public.html.erb")) }
  let(:images) { File.join(root, "app/assets/images/govuk_publishing_components") }
  let(:assets) do
    {
      "uh_favicon.ico" => "3d440c2d1bccee7a76724a12723a68408da383f4e01ac76bbda2652f20f6170a",
      "uh_favicon.svg" => "f7c4c977d5b096620bcdc51abd92b91d530662c5880bae18ca62b9a6e7643205",
      "uh_icon_mask.svg" => "465e5498403d68ea6e053582388f9b395a73f3084170eab5cc0a3c1e8a8fc959",
      "uh_icon_180.png" => "e5cff11f195bcf45bf2bd4ca347f7470636eec44ccffc8e86c9e3d0f37db330f",
      "uh_opengraph_image.png" => "fd6281a9d6622d82938664438a86c557c1286e112712775589108963f628a95b",
    }
  end

  it "owns each approved file inside the existing components asset namespace" do
    assets.each do |file, checksum|
      expect(Digest::SHA256.file(File.join(images, file)).hexdigest).to eq(checksum)
    end
  end

  it "uses the original layout asset_path and asset_url slots" do
    %w[uh_favicon.ico uh_favicon.svg uh_icon_mask.svg uh_icon_180.png].each do |file|
      expect(layout).to include(%(asset_path "govuk_publishing_components/#{file}"))
    end
    expect(layout).to include('asset_url("govuk_publishing_components/uh_opengraph_image.png", host: Plek.website_root)')
    expect(layout).not_to include('asset_url("govuk-opengraph-image.png"')
    expect(layout).not_to include('asset_path "favicon.ico"')
    expect(layout).to include("yield :head")
  end
end
