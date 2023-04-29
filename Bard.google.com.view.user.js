// ==UserScript==
// @name         Bard.google.com.View
// @run-at       document-idle
// @namespace    https://github.com/hobbymarks
// @version      1.0.0.1
// @description  Tampermonkey script for Chrome to view Bard.google.com
// @author       hobbymarks
// @match        https://bard.google.com/
// @match        https://bard.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        GM_addStyle
// ==/UserScript==

// get the layoutSideBar element
const layoutSideBar = document.querySelector('[class*="Layout-sidebar"]');

//
function setlayoutSideBarWidth(element) {
    //console.log(element);
    if (window.innerWidth <= 960) {
        element.style.minWidth = "auto";
        element.style.width = "108px";
    } else if (window.innerWidth >= 1024) {
        element.style.minWidth = "auto";
        element.style.width = localStorage.getItem(
            "GitHub_Layout_SideBar_Width"
        );
    }
}

function actions() {
    setlayoutSideBarWidth(layoutSideBar);
}

(function () {
    "use strict";

    // save current width value
    const w = window.getComputedStyle(layoutSideBar).getPropertyValue("width");
    localStorage.setItem("GitHub_Layout_SideBar_Width", w);

    // run actions
    actions();

    // Add monitor for window resize action
    window.addEventListener("resize", function () {
        // console.log(new Date(),"window resize ...");
        actions();
    });
})();
