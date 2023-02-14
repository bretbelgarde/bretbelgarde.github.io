'use strict';

const urlParams = new URLSearchParams(window.location.search);

function appInit() {
    return {
        panels: {
            about_panel: true,
            skills_panel: false,
            employ_panel: false,
            portfolio_panel: false
        },
        portfolio_data: [
            {
                name: "ADS Phoenix",
                img: "/img/ads.png",
                link: "https://adsphoenix.com",
                tech: "WordPress"
            },
            {
                name: "F & S Web Store",
                img: "/img/fns.png",
                link: "https://store.drivefs.com/",
                tech: "WordPress/WooCommerce"
            },
            {
                name: "RTG Employee Store",
                img: "/img/rtg.png",
                link: "https://shop.realtytrustgroup.com/",
                tech: "WordPress/WooCommerce"
            },
            {
                name: "Clayton Homes Factory Direct",
                img: "/img/chfd.png",
                link: "https://www.claytonhomesfactorydirect.com/",
                tech: "WordPress"
            },
            {
                name: "KDP Employee Store",
                img: "/img/kdp.png",
                link: "http://kdp.adsphx.com/",
                tech: "WordPress/WooCommerce"
            },
            {
                name: "Summit Homes Apparel",
                img: "/img/sh.png",
                link: "https://apparel.summithomesshop.com/",
                tech: "WordPress/WooCommerce"
            },
            {
                name: "Acts Outreach Ministries",
                img: "/img/aom.png",
                link: "https://actsoutreachministries.org/",
                tech: "WordPress"
            },
            {
                name: "The Franklin",
                img: "/img/frank.png",
                link: "https://claytonbuiltfranklin.com/",
                tech: "PHP/HTML/JavaScript"
            },
            {
                name: "Clayton Waco I",
                img: "/img/cwi.png",
                link: "https://claytonwaco1.com/",
                tech: "PHP/HTML/JavaScript"
            },
            {
                name: "Clayton Rutledge",
                img: "/img/cr.png",
                link: "https://claytonrutledge.com/",
                tech: "PHP/HTML/JavaScript"
            }
        ],
        togglePanel(e) {
            let $clickTarget = e.target.getAttribute('click-target');
            if (this.panels[$clickTarget]) return;

            this.processPanel($clickTarget);
        },
        linkToPanel(panelSelected) {
            if (panelSelected == null) return;

            this.processPanel(panelSelected);

        },
        processPanel(selectedPanel) {
            console.log(selectedPanel);
            if (this.panels.hasOwnProperty(selectedPanel)) {
                for (const panel in this.panels) {
                    if (this.panels[panel]) {
                        this.panels[panel] = false;
                    }
                }

                this.panels[selectedPanel] = true;
            }
        }

    }
}