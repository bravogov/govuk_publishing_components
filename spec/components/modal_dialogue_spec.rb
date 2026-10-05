require "rails_helper"

describe "Modal dialogue", type: :view do
  def component_name
    "modal_dialogue"
  end

  it "places the content correctly" do
    render_component(id: "my-modal") do
      "Content"
    end

    assert_select ".gem-c-modal-dialogue__content", text: "Content"
  end

  it "uses the approved UH crown in the compact logo" do
    render_component(id: "my-modal") { "Content" }

    assert_select "svg.govuk-header__logotype image[href*='uh_header_crown']", minimum: 1
  end

  it "applies modifier class to the wide modal" do
    render_component(id: "my-modal", wide: true) do
      "Content"
    end

    assert_select ".gem-c-modal-dialogue__box.gem-c-modal-dialogue__box--wide", count: 1
  end

  it "applies aria-label to the dialog element" do
    render_component(id: "my-modal", aria_label: "My modal") do
      "Content"
    end

    assert_select '.gem-c-modal-dialogue__box[aria-label="My modal"]'
  end
end
