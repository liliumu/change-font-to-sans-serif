// ==UserScript==
// @name        Change Font to Sans Serif
// @namespace   http://example.com
// @description Changes the font of a specific domain to sans-serif, red, and italic.
// @include     http://example.com/*
// @include     https://example.com/*
// @version     1
// @grant       none
// ==/UserScript==

(function() {
    var newStyle = document.createElement('style');
    newStyle.type = 'text/css';
    newStyle.innerHTML = `
        body { 
            font-family: sans-serif !important; 
            color: purple !important; 
            font-style: italic !important; 
        }
    `;
    document.getElementsByTagName('head')[0].appendChild(newStyle);
})();
