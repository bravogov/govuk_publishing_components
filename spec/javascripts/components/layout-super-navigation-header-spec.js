/* eslint-env jasmine */
/* global GOVUK */

describe('The super header navigation', function () {
  'use strict'

  let container
  let thisModule

  beforeEach(function () {
    container = document.createElement('div')
    container.className = 'govuk-frontend-supported'
    container.innerHTML = `
      <nav aria-labelledby="super-navigation-menu-heading" class="gem-c-layout-super-navigation-header__content"
        data-module="super-navigation-mega-menu">
        <div class="gem-c-layout-super-navigation-header__header-logo">
          <a class="govuk-header__homepage-link"
            data-ga4-link="{'event_name':'navigation','type':'header menu bar','external':'false','text':'GOV.UH','section':'Logo','index_link':1,'index_section':0,'index_section_count':2,'index_total':1}"
            id="logo" aria-label="Go to the GOV.UH homepage" href="/">
            <span class="govuk-header__logotype" role="img" aria-label="GOV.UH">
              <span aria-hidden="true" style="display: inline-block; width: 33px; height: 30px; background-color: currentColor; -webkit-mask: url('https://www.gov.uhrblx.com/uh-brand/uh-crown-black-20261014.png') center / contain no-repeat; mask: url('https://www.gov.uhrblx.com/uh-brand/uh-crown-black-20261014.png') center / contain no-repeat;"></span>
              <span aria-hidden="true">GOV.UH</span>
            </span>
          </a>
        </div>
        <h2 id="super-navigation-menu-heading" class="govuk-visually-hidden">
          Navigation menu
        </h2>
        <div class="gem-c-layout-super-navigation-header__navigation-item">
          <a class="gem-c-layout-super-navigation-header__navigation-item-link" href="/browse">
            <span class="gem-c-layout-super-navigation-header__navigation-item-link-inner">Menu</span>
          </a>
          <button aria-controls="super-navigation-menu" aria-expanded="false" aria-label="Show navigation menu"
            class="gem-c-layout-super-navigation-header__navigation-top-toggle-button"
            data-text-for-hide="Hide navigation menu" data-text-for-show="Show navigation menu"
            data-toggle-desktop-group="top" data-toggle-mobile-group="top"
            data-ga4-event="{'event_name':'select_content','type':'header menu bar','text':'Menu','index_section':1,'index_section_count':2,'section':'Menu'}"
            hidden="hidden" id="super-navigation-menu-toggle" type="button">
            <span class="gem-c-layout-super-navigation-header__navigation-top-toggle-button-inner">Menu</span>
          </button>
        </div>
        <div id="super-navigation-menu" hidden="hidden"
          class="gem-c-layout-super-navigation-header__navigation-dropdown-menu">
          <div class="govuk-grid-row gem-c-layout-super-navigation-header__navigation-items">
            <div
              class="govuk-grid-column-two-thirds-from-desktop gem-c-layout-super-navigation-header__column--services-and-information">
              <h3 class="govuk-heading-m gem-c-layout-super-navigation-header__column-header">
                Services and information
              </h3>
              <ul
                class="gem-c-layout-super-navigation-header__navigation-second-items gem-c-layout-super-navigation-header__navigation-second-items--services-and-information">
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':1,'index_link':1,'index_section_count':3,'index_total':16,'section':'Services and information'}"
                    href="/browse/benefits">Benefits</a>
                </li>
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':1,'index_link':2,'index_section_count':3,'index_total':16,'section':'Services and information'}"
                    href="/browse/births-deaths-marriages">Births, death, marriages and care</a>
                </li>
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':1,'index_link':3,'index_section_count':3,'index_total':16,'section':'Services and information'}"
                    href="/browse/business">Business and self-employed</a>
                </li>
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':1,'index_link':4,'index_section_count':3,'index_total':16,'section':'Services and information'}"
                    href="/browse/childcare-parenting">Childcare and parenting</a>
                </li>
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':1,'index_link':5,'index_section_count':3,'index_total':16,'section':'Services and information'}"
                    href="/browse/citizenship">Citizenship and living in the UK</a>
                </li>
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':1,'index_link':6,'index_section_count':3,'index_total':16,'section':'Services and information'}"
                    href="/browse/justice">Crime, justice and the law</a>
                </li>
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':1,'index_link':7,'index_section_count':3,'index_total':16,'section':'Services and information'}"
                    href="/browse/disabilities">Disabled people</a>
                </li>
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':1,'index_link':8,'index_section_count':3,'index_total':16,'section':'Services and information'}"
                    href="/browse/driving">Driving and transport</a>
                </li>
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':1,'index_link':9,'index_section_count':3,'index_total':16,'section':'Services and information'}"
                    href="/browse/education">Education and learning</a>
                </li>
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':1,'index_link':10,'index_section_count':3,'index_total':16,'section':'Services and information'}"
                    href="/browse/employing-people">Employing people</a>
                </li>
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':1,'index_link':11,'index_section_count':3,'index_total':16,'section':'Services and information'}"
                    href="/browse/environment-countryside">Environment and countryside</a>
                </li>
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':1,'index_link':12,'index_section_count':3,'index_total':16,'section':'Services and information'}"
                    href="/browse/housing-local-services">Housing and local services</a>
                </li>
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':1,'index_link':13,'index_section_count':3,'index_total':16,'section':'Services and information'}"
                    href="/browse/tax">Money and tax</a>
                </li>
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':1,'index_link':14,'index_section_count':3,'index_total':16,'section':'Services and information'}"
                    href="/browse/abroad">Passports, travel and living abroad</a>
                </li>
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':1,'index_link':15,'index_section_count':3,'index_total':16,'section':'Services and information'}"
                    href="/browse/visas-immigration">Visas and immigration</a>
                </li>
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':1,'index_link':16,'index_section_count':3,'index_total':16,'section':'Services and information'}"
                    href="/browse/working">Working, jobs and pensions</a>
                </li>
              </ul>
            </div>
            <div
              class="govuk-grid-column-one-third-from-desktop gem-c-layout-super-navigation-header__column--government-activity">
              <h3 class="govuk-heading-m gem-c-layout-super-navigation-header__column-header">
                Government activity
              </h3>
              <ul
                class="gem-c-layout-super-navigation-header__navigation-second-items gem-c-layout-super-navigation-header__navigation-second-items--government-activity">
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link gem-c-layout-super-navigation-header__navigation-second-item-link--with-description"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':2,'index_link':1,'index_section_count':3,'index_total':6,'section':'Government activity'}"
                    href="/government/organisations">Departments</a>
                  <p class="gem-c-layout-super-navigation-header__navigation-second-item-description">Departments, agencies
                    and public bodies</p>
                </li>
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link gem-c-layout-super-navigation-header__navigation-second-item-link--with-description"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':2,'index_link':2,'index_section_count':3,'index_total':6,'section':'Government activity'}"
                    href="/search/news-and-communications">News</a>
                  <p class="gem-c-layout-super-navigation-header__navigation-second-item-description">News stories, speeches,
                    letters and notices</p>
                </li>
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link gem-c-layout-super-navigation-header__navigation-second-item-link--with-description"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':2,'index_link':3,'index_section_count':3,'index_total':6,'section':'Government activity'}"
                    href="/search/guidance-and-regulation">Guidance and regulation</a>
                  <p class="gem-c-layout-super-navigation-header__navigation-second-item-description">Detailed guidance,
                    regulations and rules</p>
                </li>
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link gem-c-layout-super-navigation-header__navigation-second-item-link--with-description"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':2,'index_link':4,'index_section_count':3,'index_total':6,'section':'Government activity'}"
                    href="/search/research-and-statistics">Research and statistics</a>
                  <p class="gem-c-layout-super-navigation-header__navigation-second-item-description">Reports, analysis and
                    official statistics</p>
                </li>
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link gem-c-layout-super-navigation-header__navigation-second-item-link--with-description"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':2,'index_link':5,'index_section_count':3,'index_total':6,'section':'Government activity'}"
                    href="/search/policy-papers-and-consultations">Policy papers and consultations</a>
                  <p class="gem-c-layout-super-navigation-header__navigation-second-item-description">Consultations and
                    strategy</p>
                </li>
                <li class="gem-c-layout-super-navigation-header__dropdown-list-item">
                  <a class="govuk-link gem-c-layout-super-navigation-header__navigation-second-item-link gem-c-layout-super-navigation-header__navigation-second-item-link--with-description"
                    data-ga4-link="{'event_name':'navigation','type':'header menu bar','index_section':2,'index_link':6,'index_section_count':3,'index_total':6,'section':'Government activity'}"
                    href="/search/transparency-and-freedom-of-information-releases">Transparency</a>
                  <p class="gem-c-layout-super-navigation-header__navigation-second-item-description">Data, Freedom of
                    Information releases and corporate reports</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="gem-c-layout-super-navigation-header__search-item">
          <button id="super-search-menu-toggle" class="gem-c-layout-super-navigation-header__search-toggle-button"
            aria-controls="super-search-menu" aria-expanded="true" aria-label="Hide search menu"
            data-text-for-hide="Hide search menu" data-text-for-show="Show search menu" data-toggle-mobile-group="top"
            data-toggle-desktop-group="top"
            data-ga4-event="{'event_name':'select_content','type':'header menu bar','text':'Search','index_section':2,'index_section_count':2,'section':'Search'}"
            hidden="hidden" type="button">
            <span class="govuk-visually-hidden">
              Search GOV.UH
            </span>
            <svg class="gem-c-layout-super-navigation-header__search-toggle-button-link-icon" width="27" height="27"
              viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <circle cx="12.0161" cy="11.0161" r="8.51613" stroke="currentColor" stroke-width="3" />
              <line x1="17.8668" y1="17.3587" x2="26.4475" y2="25.9393" stroke="currentColor" stroke-width="3" />
            </svg>
            <span aria-hidden="true" class="gem-c-layout-super-navigation-header__navigation-top-toggle-close-icon"
              focusable="false">
              &times;
            </span>
          </button>
          <a class="gem-c-layout-super-navigation-header__search-item-link" href="/search">
            <span class="govuk-visually-hidden">
              Search GOV.UH
            </span>
            <svg class="gem-c-layout-super-navigation-header__search-item-link-icon" width="27" height="27"
              viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
              <circle cx="12.0161" cy="11.0161" r="8.51613" stroke="currentColor" stroke-width="3" />
              <line x1="17.8668" y1="17.3587" x2="26.4475" y2="25.9393" stroke="currentColor" stroke-width="3" />
            </svg>
          </a>
        </div>
        <div id="super-search-menu" hidden="hidden" class="gem-c-layout-super-navigation-header__navigation-dropdown-menu">
          <div
            class="gem-c-layout-super-navigation-header__search-container gem-c-layout-super-navigation-header__search-items">
            <h3 class="govuk-visually-hidden">
              Search
            </h3>
            <div class="govuk-grid-row">
              <div class="govuk-grid-column-full">
                <form class="gem-c-layout-super-navigation-header__search-form" id="search" data-module="ga4-search-tracker"
                  data-ga4-search-type="header menu bar" data-ga4-search-url="/search/all"
                  data-ga4-search-section="Search GOV.UH" data-ga4-search-index-section="3"
                  data-ga4-search-index-section-count="3" action="/search/all" method="get" role="search"
                  aria-label="Site-wide">
                  <div class="gem-c-search-with-autocomplete gem-c-search-with-autocomplete--large govuk-!-margin-bottom-0"
                    data-module="gem-search-with-autocomplete"
                    data-source-url="https://www.gov.uk/api/search/autocomplete.json" data-source-key="suggestions">
                    <div data-module="gem-toggle-input-class-on-focus"
                      class="gem-c-search govuk-!-display-none-print gem-c-search--large gem-c-search--on-white gem-c-search--separate-label govuk-!-margin-bottom-0">
                      <label for="search-main-3a26e85b"
                        class="govuk-label govuk-label--m gem-c-layout-super-navigation-header__search-label--large-navbar">Search GOV.UH</label>
                      <div class="gem-c-search__item-wrapper">
                        <div class="js-search-input-wrapper">
                          <input enterkeyhint="search" class="gem-c-search__item gem-c-search__input js-class-toggle"
                            id="search-main-3a26e85b" name="keywords" title="Search" type="search" value="" autocorrect="off"
                            autocapitalize="off">
                        </div>
                        <div class="gem-c-search__item gem-c-search__submit-wrapper">
                          <button class="gem-c-search__submit" type="submit" enterkeyhint="search">
                            Search
                            <svg class="gem-c-search__icon" width="27" height="27" viewBox="0 0 27 27" fill="none"
                              xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                              <circle cx="12.0161" cy="11.0161" r="8.51613" stroke="currentColor" stroke-width="3" />
                              <line x1="17.8668" y1="17.3587" x2="26.4475" y2="25.9393" stroke="currentColor"
                                stroke-width="3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </nav>
    `

    document.body.appendChild(container)

    const $element = document.querySelector('[data-module="super-navigation-mega-menu"]')
    thisModule = new GOVUK.Modules.SuperNavigationMegaMenu($element)
  })

  afterEach(function () {
    document.body.removeChild(container)
  })

  describe('on both small and large screens', function () {
    beforeEach(function () {
      thisModule.init()
    })

    it('has the initialised class once the JavaScript has run', function () {
      const $module = document.querySelector('[data-module="super-navigation-mega-menu"]')

      expect($module).toHaveClass('js-module-initialised')
    })
  })

  describe('navigation toggle button', function () {
    let $button

    beforeEach(function () {
      thisModule.init()
      $button = document.querySelector('#super-navigation-menu-toggle')
    })

    it('does not have the `hidden` attribute', function () {
      expect($button.hasAttribute('hidden')).toBe(false)
    })

    describe('has the correct ARIA attributes', function () {
      it('has `aria-controls` set to "super-navigation-menu"', function () {
        expect($button.getAttribute('aria-controls')).toBe('super-navigation-menu')
      })

      it('has `aria-label` set to "Show navigation menu"', function () {
        expect($button.getAttribute('aria-label')).toBe('Show navigation menu')
      })

      it('has `aria-expanded` set to false', function () {
        expect($button.getAttribute('aria-expanded')).toBe('false')
      })
    })

    describe('updates correctly when clicked once', function () {
      let $button
      let $menu

      beforeEach(function () {
        $button = document.querySelector('#super-navigation-menu-toggle')
        $menu = document.querySelector('#super-navigation-menu')

        $button.click()
      })

      it('opens the menu', function () {
        expect($menu.hasAttribute('hidden')).toBe(false)
      })

      it('updates the button’s `aria-expanded` attribute to true', function () {
        expect($button.getAttribute('aria-expanded')).toBe('true')
      })

      it('updates the button’s `aria-label`', function () {
        const hideLabel = $button.getAttribute('data-text-for-hide')
        expect($button.getAttribute('aria-label')).toBe(hideLabel)
      })
    })

    describe('updates correctly when clicked twice', function () {
      let $button
      let $menu

      beforeEach(function () {
        $button = document.querySelector('#super-navigation-menu-toggle')
        $menu = document.querySelector('#super-navigation-menu')

        $button.click()
      })

      it('opens and then closes the menu', function () {
        expect($menu.hasAttribute('hidden')).toBe(false)
        $button.click()
        expect($menu.hasAttribute('hidden')).toBe(true)
      })

      it('sets the button’s `aria-expanded` attribute to true, then false', function () {
        expect($button.getAttribute('aria-expanded')).toBe('true')
        $button.click()
        expect($button.getAttribute('aria-expanded')).toBe('false')
      })

      it('sets the button’s `aria-label` attribute to "Hide navigation menu", then "Show navigation menu"', function () {
        expect($button.getAttribute('aria-label')).toBe('Hide navigation menu')
        $button.click()
        expect($button.getAttribute('aria-label')).toBe('Show navigation menu')
      })
    })

    it('toggles the other menus in its group', function () {
      const $searchButton = document.querySelector('#super-search-menu-toggle')
      const $searchMenu = document.querySelector('#super-search-menu')

      $button.click()

      expect($searchButton.getAttribute('aria-expanded')).toBe('false')
      expect($searchButton.getAttribute('aria-label')).toBe('Show search menu')
      expect($searchMenu.hasAttribute('hidden')).toBe(true)

      $searchButton.click()

      expect($searchButton.getAttribute('aria-expanded')).toBe('true')
      expect($searchButton.getAttribute('aria-label')).toBe('Hide search menu')
      expect($searchMenu.hasAttribute('hidden')).toBe(false)

      $button.click()

      expect($searchButton.getAttribute('aria-expanded')).toBe('false')
      expect($searchButton.getAttribute('aria-label')).toBe('Show search menu')
      expect($searchMenu.hasAttribute('hidden')).toBe(true)
    })
  })

  describe('tab key', function () {
    let $navMenuButton
    let $searchMenuButton
    let $navMenu
    let $navLinks
    let $firstNavLink
    let $lastNavLink
    let $searchMenu
    let $searchMenuTabbable
    let $lastSearchMenuTabbable

    beforeEach(function () {
      thisModule.init()
      $navMenuButton = document.querySelector('#super-navigation-menu-toggle')
      $searchMenuButton = document.querySelector('#super-search-menu-toggle')
      $navMenu = document.querySelector('#super-navigation-menu')
      $navLinks = $navMenu.querySelectorAll('li a')
      $firstNavLink = $navLinks[0]
      $lastNavLink = $navLinks[$navLinks.length - 1]
      $searchMenu = document.querySelector('#super-search-menu')
      $searchMenuTabbable = $searchMenu.querySelectorAll('li a, input, button')
      $lastSearchMenuTabbable = $searchMenuTabbable[$searchMenuTabbable.length - 1]
    })

    it('when the Menu button is focussed, the nav menu is open and the tab key is pressed focus moves to the first nav menu link', function () {
      $navMenu.removeAttribute('hidden')
      $navMenuButton.focus()
      window.GOVUK.triggerEvent($navMenuButton, 'keydown', { key: 'Tab', cancelable: true })

      expect(document.activeElement).toEqual($navLinks[0])
    })

    it('when the last nav menu link is focussed and the tab key is pressed focus moves to the search button and the nav menu is closed', function () {
      $navMenu.removeAttribute('hidden')
      $lastNavLink.focus()
      window.GOVUK.triggerEvent($lastNavLink, 'keydown', { key: 'Tab', cancelable: true })

      expect(document.activeElement).toEqual($searchMenuButton)
      expect($navMenu.hasAttribute('hidden')).toEqual(true)
      expect($navMenuButton.getAttribute('aria-expanded')).toEqual('false')
      expect($navMenuButton.getAttribute('aria-label')).toEqual('Show navigation menu')
      expect($navMenuButton.classList).not.toContain('gem-c-layout-super-navigation-header__open-button')
    })

    it('when the first nav menu link is focussed, the nav menu is open and the shift and tab keys are pressed focus moves to the Menu button', function () {
      $navMenu.removeAttribute('hidden')
      $firstNavLink.focus()
      window.GOVUK.triggerEvent($firstNavLink, 'keydown', { key: 'Tab', shiftKey: true, cancelable: true })

      expect(document.activeElement).toEqual($navMenuButton)
    })

    it('when the search button is focussed, the nav menu is open and the shift and tab keys are pressed focus moves to the last nav menu link', function () {
      $navMenu.removeAttribute('hidden')
      $searchMenuButton.focus()
      window.GOVUK.triggerEvent($searchMenuButton, 'keydown', { key: 'Tab', shiftKey: true, cancelable: true })

      expect(document.activeElement).toEqual($lastNavLink)
    })

    it('when the last tabbable element in the search menu is focussed and the tab key is pressed the search menu is closed', function () {
      $searchMenu.removeAttribute('hidden')
      $lastSearchMenuTabbable.focus()
      window.GOVUK.triggerEvent($lastSearchMenuTabbable, 'keydown', { key: 'Tab', cancelable: true })

      expect($searchMenu.hasAttribute('hidden')).toEqual(true)
      expect($searchMenuButton.getAttribute('aria-expanded')).toEqual('false')
      expect($searchMenuButton.getAttribute('aria-label')).toEqual('Show search menu')
      expect($searchMenuButton.classList).not.toContain('gem-c-layout-super-navigation-header__open-button')
    })
  })

  describe('escape key', function () {
    let $navMenu
    let $navMenuButton
    let $searchMenu
    let $searchMenuButton

    beforeEach(function () {
      thisModule.init()
      $navMenu = document.querySelector('#super-navigation-menu')
      $navMenuButton = document.querySelector('#super-navigation-menu-toggle')
      $searchMenu = document.querySelector('#super-search-menu')
      $searchMenuButton = document.querySelector('#super-search-menu-toggle')
    })

    it('when the user presses the escape key and the nav menu is open the menu is closed and focus moves back to the Menu button', function () {
      $navMenu.removeAttribute('hidden')
      $navMenuButton.setAttribute('aria-expanded', 'true')
      window.GOVUK.triggerEvent($navMenu, 'keydown', { key: 'Escape', cancelable: true })

      expect($navMenu.hasAttribute('hidden')).toEqual(true)
      expect(document.activeElement).toEqual($navMenuButton)
      expect($navMenuButton.getAttribute('aria-expanded')).toEqual('false')
      expect($navMenuButton.getAttribute('aria-label')).toEqual('Show navigation menu')
      expect($navMenuButton.classList).not.toContain('gem-c-layout-super-navigation-header__open-button')
    })

    it('when the user presses the escape key and the search menu is open the menu is closed and focus moves back to the Search button', function () {
      $searchMenu.removeAttribute('hidden')
      $searchMenuButton.setAttribute('aria-expanded', 'true')
      $searchMenuButton.classList.add('gem-c-layout-super-navigation-header__open-button')
      window.GOVUK.triggerEvent($searchMenu, 'keydown', { key: 'Escape', cancelable: true })

      expect($searchMenu.hasAttribute('hidden')).toEqual(true)
      expect(document.activeElement).toEqual($searchMenuButton)
      expect($searchMenuButton.getAttribute('aria-expanded')).toEqual('false')
      expect($searchMenuButton.getAttribute('aria-label')).toEqual('Show search menu')
      expect($searchMenuButton.classList).not.toContain('gem-c-layout-super-navigation-header__open-button')
    })
  })

  describe('search toggle button', function () {
    let $button

    beforeEach(function () {
      thisModule.init()
      $button = document.querySelector('#super-search-menu-toggle')
    })

    it('does not have the `hidden` attribute', function () {
      expect($button.hasAttribute('hidden')).toBe(false)
    })

    describe('has the correct ARIA attributes', function () {
      it('has `aria-controls` set to "super-search-menu"', function () {
        expect($button.getAttribute('aria-controls')).toBe('super-search-menu')
      })

      it('has `aria-label` set to "Show search menu"', function () {
        expect($button.getAttribute('aria-label')).toBe('Show search menu')
      })

      it('has `aria-expanded` set to false', function () {
        expect($button.getAttribute('aria-expanded')).toBe('false')
      })
    })

    describe('updates correctly when clicked once', function () {
      let $button
      let $menu

      beforeEach(function () {
        $button = document.querySelector('#super-search-menu-toggle')
        $menu = document.querySelector('#super-search-menu')

        $button.click()
      })

      it('opens the menu', function () {
        expect($menu.hasAttribute('hidden')).toBe(false)
      })

      it('updates the button’s `aria-expanded` attribute to true', function () {
        expect($button.getAttribute('aria-expanded')).toBe('true')
      })

      it('updates the button’s `aria-label`', function () {
        const hideLabel = $button.getAttribute('data-text-for-hide')
        expect($button.getAttribute('aria-label')).toBe(hideLabel)
      })
    })

    describe('updates correctly when clicked twice', function () {
      let $button
      let $menu

      beforeEach(function () {
        $button = document.querySelector('#super-search-menu-toggle')
        $menu = document.querySelector('#super-search-menu')

        $button.click()
      })

      it('opens and then closes the menu', function () {
        expect($menu.hasAttribute('hidden')).toBe(false)
        $button.click()
        expect($menu.hasAttribute('hidden')).toBe(true)
      })

      it('sets the button’s `aria-expanded` attribute to true, then false', function () {
        expect($button.getAttribute('aria-expanded')).toBe('true')
        $button.click()
        expect($button.getAttribute('aria-expanded')).toBe('false')
      })

      it('sets the button’s `aria-label` attribute to "Hide search menu", then "Show search menu"', function () {
        expect($button.getAttribute('aria-label')).toBe('Hide search menu')
        $button.click()
        expect($button.getAttribute('aria-label')).toBe('Show search menu')
      })
    })

    it('toggles the other menus in its group', function () {
      const $navigationButton = document.querySelector('#super-navigation-menu-toggle')
      const $navigationMenu = document.querySelector('#super-navigation-menu')

      $button.click()

      expect($navigationButton.getAttribute('aria-expanded')).toBe('false')
      expect($navigationButton.getAttribute('aria-label')).toBe('Show navigation menu')
      expect($navigationMenu.hasAttribute('hidden')).toBe(true)

      $navigationButton.click()

      expect($navigationButton.getAttribute('aria-expanded')).toBe('true')
      expect($navigationButton.getAttribute('aria-label')).toBe('Hide navigation menu')
      expect($navigationMenu.hasAttribute('hidden')).toBe(false)

      $button.click()

      expect($navigationButton.getAttribute('aria-expanded')).toBe('false')
      expect($navigationButton.getAttribute('aria-label')).toBe('Show navigation menu')
      expect($navigationMenu.hasAttribute('hidden')).toBe(true)
    })
  })
})
