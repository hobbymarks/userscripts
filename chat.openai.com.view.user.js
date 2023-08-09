// ==UserScript==
// @name         chat.openai.com.View
// @run-at       document-idle
// @namespace    https://github.com/hobbymarks
// @version      0.0.1
// @description  Tampermonkey script for Chrome to view chat.openai.com
// @author       hobbymarks
// @match        https://chat.openai.com/
// @match        https://chat.openai.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chat.openai.com
// @grant        GM_addStyle
// ==/UserScript==

// function setLeftSideMenuWidth() {
//     const leftSideMenu = document.querySelector(
//         '[class*="PageWithSidebarLayout_leftSidebar__"]'
//     );
//     //console.log(leftSideMenu);
//     if (window.innerWidth <= 800) {
//         leftSideMenu.style.minWidth = "0px";
//     } else if (window.innerWidth <= 892) {
//         leftSideMenu.style.minWidth = "92px";
//     } else if (window.innerWidth >= 1010) {
//         leftSideMenu.style.minWidth = "210px";
//     }
// }

// function hideScrollBar() {
//     const elementsToHideScrollbar = document.querySelectorAll(
//         '[class*="ChatPageSidebar_sidebarContainer__"]'
//     );

//     elementsToHideScrollbar.forEach((element) =>
//         GM_addStyle(
//             `.${element.classList.item(0)}::-webkit-scrollbar {display: none;}`
//         )
//     );
// }

// function unsetWidthMaxWidth(element) {
//     // Remove the 'width' and 'max-width' properties
//     element.style.removeProperty("width");
//     element.style.removeProperty("max-width");
//     // Set the 'width' and 'max-width' properties to 'unset'
//     element.style.setProperty("width", "unset");
//     element.style.setProperty("max-width", "unset");
// }

// function unsetMainWidth() {
//     document
//         .querySelectorAll('[class*="PageWithSidebarLayout_mainSection__"]')
//         .forEach((element) => {
//             unsetWidthMaxWidth(element);
//         });

//     document
//         .querySelectorAll('[class*="NewPageWithSidebarLayout_mainSection__"]')
//         .forEach((element) => {
//             unsetWidthMaxWidth(element);
//         });

//     document
//         .querySelectorAll('[class*="Message_botMessageBubble__CPGMI"]')
//         .forEach((element) => {
//             unsetWidthMaxWidth(element);
//         });
// }

// function actions() {
//     hideScrollBar();
//     unsetMainWidth();
//     setLeftSideMenuWidth();
// }

(function () {
    "use strict";
    // Get the stylesheets collection
    var styleSheets = document.styleSheets;

    // Loop through the style sheets to find the desired rule
    for (var i = 0; i < styleSheets.length; i++) {
        var styleSheet = styleSheets[i];

        // Check if the styleSheet is accessible (to handle cross-origin restrictions)
        if (!styleSheet.cssRules) continue;

        // Loop through the rules of the current stylesheet
        for (var j = 0; j < styleSheet.cssRules.length; j++) {
            var rule = styleSheet.cssRules[j];

            // Check if the rule is for the desired selector
            if (rule.selectorText === '.xl\:max-w-3xl') {
                // Manipulate the CSS properties of the rule
                // rule.style.color = ''; // Unset the 'color' attribute
                // rule.style.fontSize = ''; // Unset the 'font-size' attribute
                console.log(rule.cssText);
            }
            if (rule.selectorText === '.lg\:max-w-\[38rem\]') {
                console.log(rule.cssText);
            }
            if (rule.selectorText === '.md\:max-w-2xl') {
                console.log(rule.cssText);
            }
        }
    }
    // actions();

    // // Add monitor to click for all links in left side menu
    // document
    //     .querySelectorAll('[class*="PageWithSidebarNavItem_navItem__"]')
    //     .forEach((element) => {
    //         element.addEventListener("click", function (event) {
    //             // console.log(new Date(), "click leftsidemenu link ...");
    //             actions();
    //         });
    //     });
    // document
    //     .querySelectorAll('[class*="PageWithSidebarNavItem_newNavItem__"]')
    //     .forEach((element) => {
    //         element.addEventListener("click", function (event) {
    //             // console.log(new Date(), "click leftsidemenu link ...");
    //             actions();
    //         });
    //     });

    // // Add monitor to logo click
    // document
    //     .querySelectorAll('[class*="ChatPageSidebar_logo__"]')
    //     .forEach((element) => {
    //         element.addEventListener("click", function (event) {
    //             // console.log(new Date(), "click logo ...");
    //             actions();
    //         });
    //     });

    // // Add monitor for window resize action
    // window.addEventListener("resize", function () {
    //     // console.log(new Date(),"window resize ...");
    //     actions();
    // });
})();
