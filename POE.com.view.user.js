// ==UserScript==
// @name         POE.com.View
// @run-at       document-idle
// @namespace    https://github.com/hobbymarks
// @version      1.0.6
// @description  Tampermonkey script for Chrome to view POE.com
// @author       hobbymarks
// @match        https://poe.com/
// @match        https://poe.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=poe.com
// @grant        GM_addStyle
// ==/UserScript==

function setLeftSideMenuWidth() {
    const leftSideMenu = document.querySelector(
        '[class*="PageWithSidebarLayout_leftSidebar__"]'
    );
    //console.log(leftSideMenu);
    if (window.innerWidth <= 800) {
        leftSideMenu.style.minWidth = "0px";
    } else if (window.innerWidth <= 892) {
        leftSideMenu.style.minWidth = "92px";
    } else if (window.innerWidth >= 1010) {
        leftSideMenu.style.minWidth = "210px";
    }
}

function hideScrollBar() {
    const elementsToHideScrollbar = document.querySelectorAll(
        '[class*="ChatPageSidebar_sidebarContainer__"]'
    );

    elementsToHideScrollbar.forEach((element) =>
        GM_addStyle(
            `.${element.classList.item(0)}::-webkit-scrollbar {display: none;}`
        )
    );
}

function unsetMainWidth() {
    const elementsUnsetWidth = document.querySelectorAll(
        '[class*="PageWithSidebarLayout_mainSection__"]'
    );

    elementsUnsetWidth.forEach((element) => {
        // Remove the 'width' and 'max-width' properties
        element.style.removeProperty("width");
        element.style.removeProperty("max-width");
        // Set the 'width' and 'max-width' properties to 'unset'
        element.style.setProperty("width", "unset");
        element.style.setProperty("max-width", "unset");
    });
}

function actions() {
    hideScrollBar();
    unsetMainWidth();
}

(function () {
    "use strict";
    actions();

    // Retrive all links in left side menu
    const sideLinks = document.querySelectorAll(
        '[class*="PageWithSidebarNavItem_navItem__"]'
    );

    // Add monitor to click
    for (let i = 0; i < sideLinks.length; i++) {
        sideLinks[i].addEventListener("click", function (event) {
            // console.log(new Date(), "click leftsidemenu link ...");
            actions();
        });
    }

    // Add monitor to logo click
    const logo = document.querySelectorAll('[class*="ChatPageSidebar_logo__"]');
    logo[0].addEventListener("click", function (event) {
        // console.log(new Date(), "click logo ...");
        actions();
    });

    // Add monitor for window resize action
    window.addEventListener("resize", function () {
        // console.log(new Date(),"window resize ...");
        setLeftSideMenuWidth();
        actions();
    });
})();
