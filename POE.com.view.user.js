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

function viewMax(elements){
    // Do view max with the selected elements
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.style.width = "100%";
        element.style.maxWidth = "100%";

    }
}


// Hide Scroll Bar
GM_addStyle('.no-scrollbar::-webkit-scrollbar { display: none; }');
const elementsToHideScrollbar=document.querySelectorAll('[class*="ChatPageSidebar_sidebarContainer__"]');
for(let i=0;i<elementsToHideScrollbar.length;i++){
    console.log("[HideScrollBar]",elementsToHideScrollbar[i]);
    elementsToHideScrollbar[i].classList.add('no-scrollbar');
}


(function() {
    'use strict';
    // Set Line Height
    const lineHeightElements=document.querySelectorAll('div');
    for (var i = 0; i < lineHeightElements.length; i++) {
        lineHeightElements[i].style.lineHeight = '1.0';
    }

    // Select all elements with a class name that contains "example"
    const elements = document.querySelectorAll('[class*="PageWithSidebarLayout_mainSection__"]');
    // View max the elements
    viewMax(elements);

    // Retrive all links
    const sideLinks=document.querySelectorAll('[class*="PageWithSidebarNavItem_navItem__"]');
    // Add monitor to click
    for (let i=0;i<sideLinks.length;i++){
        sideLinks[i].addEventListener('click', function(event) {
            console.log('Clicked link:', event.target.href);
            const elements = document.querySelectorAll('[class*="PageWithSidebarLayout_mainSection__"]');
            viewMax(elements);
        });
    };
})();
