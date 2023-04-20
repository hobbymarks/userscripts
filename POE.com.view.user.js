// ==UserScript==
// @name         POE.com.View
// @namespace    https://github.com/hobbymarks
// @version      1.0
// @description  Tampermonkey script for Chrome to view POE.com
// @author       hobbymarks
// @match        https://poe.com
// @match        https://poe.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=poe.com
// @grant        GM_addStyle
// ==/UserScript==

// Hide Scroll Bar
GM_addStyle(".no-scrollbar::-webkit-scrollbar { display: none; }");

function hideScrollBar() {
  const elementsToHideScrollbar = document.querySelectorAll(
    '[class*="ChatPageSidebar_sidebarContainer__"]'
  );
  for (let i = 0; i < elementsToHideScrollbar.length; i++) {
    console.log("[HideScrollBar]", elementsToHideScrollbar[i]);
    elementsToHideScrollbar[i].classList.add("no-scrollbar");
  }
}

function actions() {
  hideScrollBar();
}

(function () {
  "use strict";
  // line Height
  actions();

  // Retrive all links in left side menu
  const sideLinks = document.querySelectorAll(
    '[class*="PageWithSidebarNavItem_navItem__"]'
  );

  // Add monitor to click
  for (let i = 0; i < sideLinks.length; i++) {
    sideLinks[i].addEventListener("click", function (event) {
      // console.log("click link ...");
      actions();
    });
  }

  window.addEventListener("resize", function () {
    // console.log("window resize ...");
    actions();
  });
})();
