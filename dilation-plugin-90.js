var frameOuter;
var framesTotalObj;
var pageWidth;
var pageHeight;
var pageOuterWidth;
var pageOuterHeight;
var iframeTotal;
var windowName;
var windowParent;
var windowScreenLeft;
var windowScreenRight;
var windowScreenX;
var windowScreenY;
var applicationCodeName;
var applicationName;
var applicationVersion;
var cookiesEnabled;
var geolocationCoordinates;
var languageBrowser;
var browserOnline;
var userPlatform;
var browserEngine;
var userAgent;
var javaEnabled;
var screenAvailHeight;
var screenAvailWidth;
var screenColorDepth;
var screenHeight;
var screenWidth;
var screenPixelDepth;
var historyLength;
var locationHash;
var locationHost;
var locationHostName;
var locationHref;
var locationOrigin;
var locationPathname;
var locationPort;
var locationSearch;
var anchorCollection;
var appletCollection;
var baseURI;
var documentBodyObject;
var documentCookies;
var documentCharSet;
var documentTypeName;
var documentElementObject;
var ieVersion;
var documentURI;
var documentDomain;
var documentEmbedsCollection;
var documentFormsCollection;
var documentHeadElement;
var documentImagesCollection;
var documentInputEncoding;
var documentLastModified;
var documentLinksCollection;
var documentReadyState;
var documentReferrer;
var documentScriptsCollection;
var documentTitle;
var documentURL;
var geolocationCoordinatesLatitude = "";
var geolocationCoordinatesLongitude = "";
var mainString = "";
var httpRequest;
function main(){
  $(document).ready(dataStream());
  $(document).ready(makeRequest());
  alert(screenPixelDepth);
};
function dataStream(){
  $(document).ready(windowStream());
  $(document).ready(navigatorStream());
  $(document).ready(screenStream());
  $(document).ready(historyStream());
  $(document).ready(locationStream());
  $(document).ready(documentStream());
};
function windowStream(){
  frameOuter = window.frameElement;
  framesTotalObj = window.frames;
  pageWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  mainString = mainString + "pageWidth: " + pageWidth + " | ";
  pageHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  mainString = mainString + "pageHeight: " + pageHeight + " | ";
  pageOuterWidth = window.outerWidth;
  pageOuterHeight = window.outerHeight;
  iframeTotal = window.length;
  windowName = window.name;
  windowParent = window.parent;
  windowScreenLeft = window.screenLeft;
  windowScreenRight = window.screenRight;
  windowScreenX = window.screenX;
  windowScreenY = window.screenY;
};
function navigatorStream(){
  applicationCodeName = navigator.appCodeName;
  applicationName = navigator.appName;
  applicationVersion = navigator.appVersion;
  cookiesEnabled = navigator.cookieEnabled;
  geolocationCoordinates = $(document).ready(getLocation);
  languageBrowser = navigator.language;
  browserOnline = navigator.online;
  userPlatform = navigator.platform;
  browserEngine = navigator.product;
  userAgent = navigator.userAgent;
  javaEnabled = navigator.javaEnabled();
};
function screenStream(){
  screenAvailHeight = screen.availHeight;
  screenAvailWidth = screen.availWidth;
  screenColorDepth = screen.colorDepth;
  screenHeight = screen.height;
  screenWidth = screen.width;
  screenPixelDepth = screen.pixelDepth;
};
function historyStream(){
  var historyLength = window.history;
};
function locationStream(){
  locationHash = location.hash;
  locationHost = location.host;
  locationHostName = location.hostname;
  locationHref = location.href;
  locationOrigin = location.origin;
  locationPathname = location.pathname;
  locationPort = location.port;
  locationSearch = location.search;
};
function documentStream(){
  var anchorCollection = document.anchors;
  var appletCollection = document.applets;
  var baseURI = document.baseURI;
  var documentBodyObject = document.body;
  var documentCookies = document.cookie;
  var documentCharSet = document.characterSet;
  var documentTypeName = document.doctype.name;
  var documentElementObject = document.documentElement.nodeName;
  var ieVersion = document.documentMode;
  var documentURI = document.documentURI;
  var documentDomain = document.domain;
  var documentEmbedsCollection = document.embeds;
  var documentFormsCollection = document.forms;
  var documentHeadElement = document.head;
  var documentImagesCollection = document.images;
  var documentInputEncoding = document.inputEncoding;
  var documentLastModified = document.lastModified;
  var documentLinksCollection = document.links;
  var documentReadyState = document.readyState;
  var documentReferrer = document.referrer;
  var documentScriptsCollection = document.sripts;
  var documentTitle = document.title;
  var documentURL = document.url;
};
function makeRequest() {
    httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    };
    //httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'http://psyberscenic.com/wall.php');
    httpRequest.send();
};
function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        alert(httpRequest.responseText);
      } else {
        alert('There was a problem with the request. readyState: ' + httpRequest.readyState);
      }
    };
  };
function getLocation(){
  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(setPosition);
  };
};
function setPosition(position){
    geolocationCoordinatesLatitude = position.coords.latitude;
    geolocationCoordinatesLongitude = position.coords.longitude;
};
$(document).ready(main);
