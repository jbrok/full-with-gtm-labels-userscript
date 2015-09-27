// ==UserScript==
// @name         GTM Full-with labels
// @version      0.1
// @description  Use this script to get full-with labels for your Google Tag Manager triggers and make them readable again. No need to change your naming conventions.
// @author       Joost Brok
// @include      https://tagmanager.google.com/*
// @grant    GM_addStyle
// ==/UserScript==
GM_addStyle('.chip-list.large .chip.large { width:auto; !important; }');
