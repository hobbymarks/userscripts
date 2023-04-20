// ==UserScript==
// @name         POE.com.View_Debug
// @run-at       document-idle
// @namespace    https://github.com/hobbymarks
// @version      1.0.3
// @description  Tampermonkey script for Chrome to view POE.com
// @author       hobbymarks
// @match        https://poe.com/
// @match        https://poe.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=poe.com
// @grant        GM_addStyle
// ==/UserScript==

function hideScrollBar() {
  // Hide Scroll Bar
  GM_addStyle(".no-scrollbar::-webkit-scrollbar { display: none; }");

  const elementsToHideScrollbar = document.querySelectorAll(
    '[class*="ChatPageSidebar_sidebarContainer__"]'
  );
  for (let i = 0; i < elementsToHideScrollbar.length; i++) {
    console.log(new Date(), "[HideScrollBar]", elementsToHideScrollbar[i]);
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
    actions();
  });
})();
