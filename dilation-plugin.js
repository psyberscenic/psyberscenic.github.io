/*---to do list:---
-strip all elements and collections down
  - put them in arrays
*/


/*Saved for later
may be userful for user interaction improvements:
  window.pageXOffset  --  https://www.w3schools.com/jsref/prop_win_pagexoffset.asp;
  window.pageYOffset  --  https://www.w3schools.com/jsref/prop_win_pagexoffset.asp;
not sure what this is or does:
  document.implementation;  --  https://www.w3schools.com/jsref/prop_document_implementation.asp;
*/
/*---IMPORTANT
geolocation               --  privacy issues;
userPlatform              --  how to integrate well;
product                   --  how to integrate well;
userAgent                 --  how to integrate well;
windowParent              --  useful for interacting with dilation or other windows that the artist site might be in;
screenColorDepth          --  useful for maybe figuring out how "advanced" user technology is: https://www.w3schools.com/jsref/prop_screen_colordepth.asp;
screenPixelDepth          --  useful again for maybe figuring out how advanced user technology is: https://www.w3schools.com/jsref/prop_screen_pixeldepth.asp;
anchorCollection          --  useful for going through all links in the document https://www.w3schools.com/jsref/coll_doc_anchors.asp;
appletCollection          --  not supported in HTML5 (useful for updating old sites) https://www.w3schools.com/jsref/coll_doc_applets.asp;
baseURI                   --  what does this do? https://www.w3schools.com/jsref/prop_doc_baseuri.asp;
getCookies                --  delve into cookies a bit more: https://www.w3schools.com/js/js_cookies.asp;
ieVersion                 --  good for how technologically advanced users are (for what version: https://www.w3schools.com/jsref/prop_doc_documentmode.asp);
documentLinksCollection   --  that have an href;
documentReferrer          --  know where people are coming from when they access you're website (also useful if that number is huge for dilation but not for other sources--dilation states proves viability!);
documentScriptsCollection -- security risk;
---*/
/*-----TOC
code: iframes         --  gets all iframes in page;
code: lengthOfHistory --  gets how many urls are in history;
code: pageWidth       --  returns width of page;
code: pageHeight      --  returns height of page;
code: location        --  returns location objects of page;
code: windowName      --  returns name of window;
code: navigator       --  returns information about browser;
documentElementObject --  returns <html> object if html;
-----*/
/*---Global Variables---*/
//---windowStream() variables;---//
var frameOuter;
//get all iframes on page
var framesTotalObj;
//page innerWidth
var pageWidth;
//page innerHeight
var pageHeight;
//page outerWidth
var pageOuterWidth;
//page outerHeight
var pageOuterHeight;
//how many iframe elements are on the page
var iframeTotal;
//widnowName
//code: windowName
var windowName;
//windowParent---IMPORTANT
var windowParent;
//screenLeft
var windowScreenLeft;
//screenRight
var windowScreenRight;
//screenX--MOZILLA
var windowScreenX;
//screenY--MOZILLA
var windowScreenY;
//---navigatorStream() variables;---//
//appCodeName
var applicationCodeName;
//appName
var applicationName;
//appVersion
//useful for checking to see how out of date people's browsers are...the more out of data, perhaps the less involved in their computing they are.
var applicationVersion;
//cookieEnabled
var cookiesEnabled;
//geolocation--IMPORTANT--has to be approved by user...can be a privacy issue
var geolocationCoordinates;
//language
var languageBrowser;
//onLine--not very useful to my understanding (if the script is outsourced...)
var browserOnline;
//platform--IMPORTANT--how to integrate well...?
var userPlatform;
//product--IMPORTANT--how to integrate well...?
var browserEngine;
//userAgent--IMPORTANT--how to integrate well...?
var userAgent;
//javaEnabled
var javaEnabled;
//---screenStream() variables;---//
//screenAvailHeight
var screenAvailHeight;
//screenAvailWidth
var screenAvailWidth;
//colorDepth---IMPORTANT
var screenColorDepth;
//screenHeight
var screenHeight;
//screenWidth
var screenWidth;
//pixelDepth---IMPORTANT
var screenPixelDepth;
//---historyStream() variables;---//
//get length of history
var historyLength;
//---locationStream() variables;---//
var locationHash;
//host
var locationHost;
//hostname
var locationHostName;
//href--entire url
var locationHref;
//origin
var locationOrigin;
//pathname
var locationPathname;
//port
var locationPort;
//search
var locationSearch;
//---documentStream() variabels---//
//anchorCollection---IMPORTANT
var anchorCollection;
//appletCollection---IMPORTANT
var appletCollection;
//baseURI---IMPORTANT
var baseURI;
//documentBodyObject
var documentBodyObject;
//getCookies---IMPORTANT
var documentCookies;
//documentCharSet
var documentCharSet;
//documentTypeName
var documentTypeName;
//documentElementObject
var documentElementObject;
//ieVersion---IMPORTANT
var ieVersion;
//documentURI
var documentURI;
//documentDomain
var documentDomain;
//documentEmbedsCollection
var documentEmbedsCollection;
//documentFormsCollection
var documentFormsCollection;
//documentHeadElement
var documentHeadElement;
//documentImagesCollection
var documentImagesCollection;
//documentInputEncoding
var documentInputEncoding;
//documentLastModified
var documentLastModified;
//documentLinksCollection---IMPORTANT
var documentLinksCollection;
//documentReadyState
var documentReadyState;
//documentReferrer---IMPORTANT
var documentReferrer;
//documentScriptsCollection---IMPORTANT
var documentScriptsCollection;
//documentTitle
var documentTitle;
//documentURL
var documentURL;
//---helper variables;---/
var geolocationCoordinatesLatitude = "";
var geolocationCoordinatesLongitude = "";
//---mainOutput---//
var mainString = "";
/*------*/
function main(){

  $(document).ready(dataStream());
  alert(screenPixelDepth);
};
//mainData
function dataStream(){
  $(document).ready(windowStream());
  $(document).ready(navigatorStream());
  $(document).ready(screenStream());
  $(document).ready(historyStream());
  $(document).ready(locationStream());
  $(document).ready(documentStream());
};
//core functions
function windowStream(){
  //get the iframe element page is displayed in
  frameOuter = window.frameElement;
  //get all iframes on page
  framesTotalObj = window.frames;
  //page innerWidth
  pageWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  mainString = mainString + "pageWidth: " + pageWidth + " | ";
  //page innerHeight
  pageHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  mainString = mainString + "pageHeight: " + pageHeight + " | ";
  //page outerWidth
  pageOuterWidth = window.outerWidth;
  //page outerHeight
  pageOuterHeight = window.outerHeight;
  //how many iframe elements are on the page
  iframeTotal = window.length;
  //widnowName
  windowName = window.name;
  //windowParent---IMPORTANT
  windowParent = window.parent;
  //screenLeft
  windowScreenLeft = window.screenLeft;
  //screenRight
  windowScreenRight = window.screenRight;
  //screenX--MOZILLA
  windowScreenX = window.screenX;
  //screenY--MOZILLA
  windowScreenY = window.screenY;
};
function navigatorStream(){
  //appCodeName
  applicationCodeName = navigator.appCodeName;
  //appName
  applicationName = navigator.appName;
  //appVersion
  //useful for checking to see how out of date people's browsers are...the more out of data, perhaps the less involved in their computing they are.
  applicationVersion = navigator.appVersion;
  //cookieEnabled
  cookiesEnabled = navigator.cookieEnabled;
  //geolocation--IMPORTANT--has to be approved by user...can be a privacy issue
  geolocationCoordinates = $(document).ready(getLocation);
  //language
  languageBrowser = navigator.language;
  //onLine--not very useful to my understanding (if the script is outsourced...)
  browserOnline = navigator.online;
  //platform--IMPORTANT--how to integrate well...?
  userPlatform = navigator.platform;
  //product--IMPORTANT--how to integrate well...?
  browserEngine = navigator.product;
  //userAgent--IMPORTANT--how to integrate well...?
  userAgent = navigator.userAgent;
  //javaEnabled
  javaEnabled = navigator.javaEnabled();
};
function screenStream(){
  //screenAvailHeight
  screenAvailHeight = screen.availHeight;
  //screenAvailWidth
  screenAvailWidth = screen.availWidth;
  //colorDepth---IMPORTANT
  screenColorDepth = screen.colorDepth;
  //screenHeight
  screenHeight = screen.height;
  //screenWidth
  screenWidth = screen.width;
  //pixelDepth---IMPORTANT
  screenPixelDepth = screen.pixelDepth;
};
function historyStream(){
  //get length of history
  var historyLength = window.history;
};
function locationStream(){
  //hash
  locationHash = location.hash;
  //host
  locationHost = location.host;
  //hostname
  locationHostName = location.hostname;
  //href--entire url
  locationHref = location.href;
  //origin
  locationOrigin = location.origin;
  //pathname
  locationPathname = location.pathname;
  //port
  locationPort = location.port;
  //search
  locationSearch = location.search;
};
function documentStream(){
  //anchorCollection---IMPORTANT
  var anchorCollection = document.anchors;
  //appletCollection---IMPORTANT
  var appletCollection = document.applets;
  //baseURI---IMPORTANT
  var baseURI = document.baseURI;
  //documentBodyObject
  var documentBodyObject = document.body;
  //getCookies---IMPORTANT
  var documentCookies = document.cookie;
  //documentCharSet
  var documentCharSet = document.characterSet;
  //documentTypeName
  var documentTypeName = document.doctype.name;
  //documentElementObject
  var documentElementObject = document.documentElement.nodeName;
  //ieVersion---IMPORTANT
  var ieVersion = document.documentMode;
  //documentURI
  var documentURI = document.documentURI;
  //documentDomain
  var documentDomain = document.domain;
  //documentEmbedsCollection
  var documentEmbedsCollection = document.embeds;
  //documentFormsCollection
  var documentFormsCollection = document.forms;
  //documentHeadElement
  var documentHeadElement = document.head;
  //documentImagesCollection
  var documentImagesCollection = document.images;
  //documentInputEncoding
  var documentInputEncoding = document.inputEncoding;
  //documentLastModified
  var documentLastModified = document.lastModified;
  //documentLinksCollection---IMPORTANT
  var documentLinksCollection = document.links;
  //documentReadyState
  var documentReadyState = document.readyState;
  //documentReferrer---IMPORTANT
  var documentReferrer = document.referrer;
  //documentScriptsCollection---IMPORTANT
  var documentScriptsCollection = document.sripts;
  //documentTitle
  var documentTitle = document.title;
  //documentURL
  var documentURL = document.url;

};
//helper functions BEGIN
function getLocation(){

  if(navigator.geolocation){

      navigator.geolocation.getCurrentPosition(setPosition);

  };

};
function setPosition(position){

    geolocationCoordinatesLatitude = position.coords.latitude;
    geolocationCoordinatesLongitude = position.coords.longitude;

};
//helper functions END

$(document).ready(main);
