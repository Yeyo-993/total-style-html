/*! elementor-pro - v3.7.7 - 20-09-2022 */
"use strict";
(self.webpackChunkelementor_pro = self.webpackChunkelementor_pro || []).push([[42], {
    7480: (e, t) => {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.
    default = void 0;
        var n = elementorModules.frontend.handlers.Base.extend({
            stretchElement:
            null,
            getDefaultSettings: () => ({
                selectors: {
                    menu: ".elementor-nav-menu",
                    anchorLink: ".elementor-nav-menu--main .elementor-item-anchor",
                    dropdownMenu: ".elementor-nav-menu__container.elementor-nav-menu--dropdown",
                    menuToggle: ".elementor-menu-toggle"
                }
            }),
            getDefaultElements() {
                var e = this.getSettings("selectors"),
                t = {};
                return t.$menu = this.$element.find(e.menu),
                t.$anchorLink = this.$element.find(e.anchorLink),
                t.$dropdownMenu = this.$element.find(e.dropdownMenu),
                t.$dropdownMenuFinalItems = t.$dropdownMenu.find(".menu-item:not(.menu-item-has-children) > a"),
                t.$menuToggle = this.$element.find(e.menuToggle),
                t.$links = t.$dropdownMenu.find("a.elementor-item"),
                t
            },
            bindEvents() {
                this.elements.$menu.length && (this.elements.$menuToggle.on("click", this.toggleMenu.bind(this)), this.getElementSettings("full_width") && this.elements.$dropdownMenuFinalItems.on("click", this.toggleMenu.bind(this, !1)), elementorFrontend.addListenerOnce(this.$element.data("model-cid"), "resize", this.stretchMenu))
            },
            initStretchElement() {
                this.stretchElement = new elementorModules.frontend.tools.StretchElement({
                    element: this.elements.$dropdownMenu
                })
            },
            toggleNavLinksTabIndex() {
                let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this.elements.$links.attr("tabindex", e ? 0 : -1)
            },
            toggleMenu(e) {
                var t = this.elements.$menuToggle.hasClass("elementor-active");
                "boolean" != typeof e && (e = !t),
                this.elements.$menuToggle.attr("aria-expanded", e),
                this.elements.$dropdownMenu.attr("aria-hidden", !e),
                this.elements.$menuToggle.toggleClass("elementor-active", e),
                this.toggleNavLinksTabIndex(e),
                e && this.getElementSettings("full_width") && this.stretchElement.stretch() 
            },
            followMenuAnchors() {
                var e = this;
                e.elements.$anchorLink.each((function() {
                    location.pathname === this.pathname && "" !== this.hash && e.followMenuAnchor(jQuery(this))
                }))
            },
            followMenuAnchor(e) {
                const t = e[0].hash;
                let n,
                s = -300;
                try {
                    n = jQuery(decodeURIComponent(t))
                } catch(e) {
                    return
                }
                if (n.length) {
                    if (!n.hasClass("elementor-menu-anchor")) {
                        var o = jQuery(window).height() / 2;
                        s = -n.outerHeight() + o
                    }
                    elementorFrontend.waypoint(n, (function(t) {
                        "down" === t ? e.addClass("elementor-item-active") : e.removeClass("elementor-item-active")
                    }), {
                        offset: "50%",
                        triggerOnce: !1
                    }),
                    elementorFrontend.waypoint(n, (function(t) {
                        "down" === t ? e.removeClass("elementor-item-active") : e.addClass("elementor-item-active")
                    }), {
                        offset: s,
                        triggerOnce: !1
                    })
                }
            },
            stretchMenu() {
                this.getElementSettings("full_width") ? (this.stretchElement.stretch(), this.elements.$dropdownMenu.css("top", this.elements.$menuToggle.outerHeight())) : this.stretchElement.reset()
            },
            onInit() {
                if (elementorModules.frontend.handlers.Base.prototype.onInit.apply(this, arguments), !this.elements.$menu.length) return;
                const e = this.getElementSettings().submenu_icon.value;
                let t = "";
                e && (t = e.indexOf("<") > -1 ? e : ` < i class = "${e}" > </i>`),this.elements.$menu.smartmenus({subIndicators:""!==t,subIndicatorsText:t,subIndicatorsPos:"append",subMenusMaxWidth:"1000px"}),this.initStretchElement(),this.stretchMenu(),elementorFrontend.isEditMode()||this.followMenuAnchors()},onElementChange(e){"full_width"===e&&this.stretchMenu()}});t.default=n}}]);