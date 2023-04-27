// ==UserScript==
// @name         GitHub.com.View
// @run-at       document-idle
// @namespace    https://github.com/hobbymarks
// @version      1.0.0
// @description  Tampermonkey script for Chrome to view GitHub.com
// @author       hobbymarks
// @match        https://github.com/
// @match        https://github.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        GM_addStyle
// ==/UserScript==

function setlayoutSideBarWidth() {
    const layoutSideBar = document.querySelector(
        '[class*="Layout-sidebar"]'
    );
    //console.log(layoutSideBar);
    if (window.innerWidth <= 800) {
        layoutSideBar.style.minWidth = "0px";
    } else if (window.innerWidth <= 892) {
        layoutSideBar.style.minWidth = "92px";
    } else if (window.innerWidth >= 1010) {
        layoutSideBar.style.minWidth = "210px";
    }
}

function actions() {
    setlayoutSideBarWidth();
}

(function () {
    "use strict";
    actions();

    // Add monitor for window resize action
    window.addEventListener("resize", function () {
        // console.log(new Date(),"window resize ...");
        actions();
    });
})();
