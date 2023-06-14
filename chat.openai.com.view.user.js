// ==UserScript==
// @name         chat.openai.com.View
// @run-at       document-idle
// @namespace    https://github.com/hobbymarks
// @version      1.0.0
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

// (function () {
//     "use strict";
//     actions();

//     // Add monitor to click for all links in left side menu
//     document
//         .querySelectorAll('[class*="PageWithSidebarNavItem_navItem__"]')
//         .forEach((element) => {
//             element.addEventListener("click", function (event) {
//                 // console.log(new Date(), "click leftsidemenu link ...");
//                 actions();
//             });
//         });
//     document
//         .querySelectorAll('[class*="PageWithSidebarNavItem_newNavItem__"]')
//         .forEach((element) => {
//             element.addEventListener("click", function (event) {
//                 // console.log(new Date(), "click leftsidemenu link ...");
//                 actions();
//             });
//         });

//     // Add monitor to logo click
//     document
//         .querySelectorAll('[class*="ChatPageSidebar_logo__"]')
//         .forEach((element) => {
//             element.addEventListener("click", function (event) {
//                 // console.log(new Date(), "click logo ...");
//                 actions();
//             });
//         });

//     // Add monitor for window resize action
//     window.addEventListener("resize", function () {
//         // console.log(new Date(),"window resize ...");
//         actions();
//     });
// })();
