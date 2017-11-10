//--Comments--//
//To update store images --> var tshirtImages[], var posterImages[], etc...
//To update checkout images --> var tshirtImagesTheScryingOrb[], var tshirtImagesSpaceCowboy[], etc...
//To add another page to the store --> add another case in the switch for each tile used in the tile functions down below
//--Raw input values
var showsLocation = ['', '', '', '', ''];
var showsDate = ['', '', '', '', ''];
var showsTickets = ['','','','',''];
var subMenuBar = ['TSHIRTS', 'POSTERS', 'VINYL', 'PHYSICAL', 'DIGITAL', 'JEWELRY'];
var subMenuBarBlank = [''];
var subMenuBarItemOne = [''];
var subMenuBarItemTwo = [''];
var checkoutMenuBar = ['TShirt', 'Poster', 'Vinyl', 'Physical CD', 'Digital Download'];
var storeArrayCounter = 0;
var storePageOne = 7;
var tShirtImages = ['', '', '', '', '', '', '', '',
                    '', '', '', '', '', '', '', ''];
var tShirtImagesCheckout = ['TheScryingOrb.jpg', 'TheScryingOrb.jpg', 'TheScryingOrb.jpg', 'TheScryingOrb.jpg', 'TheScryingOrb.jpg',
                          'AThousandTimes.jpg', 'AThousandTimes.jpg', 'AThousandTimes.jpg', 'AThousandTimes.jpg', 'AThousandTimes.jpg',
                          'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg',
                          'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg',
                          'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg',
                          'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg',
                          'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg',
                          'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg',
                          'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg'];
var tShirtText = ['Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon',
                  'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon'];
var tShirtHref = ['tShirtTheScryingOrb', 'tShirtAThousandTimes', 'tShirtHypnotica', 'tShirtIndigo', 'tShirtDesiderium', 'tShirtRootAccess', 'tShirtSynergy', 'tShirtAnhedonia',
                  'tShirtSpaceCowboy', 'tShirtComingSoon', 'tShirtComingSoon', 'tShirtComingSoon', 'tShirtComingSoon', 'tShirtComingSoon', 'tShirtComingSoon', 'tShirtComin Soon'];
var posterImages = ['', '', '', '', '', '', '', '',
                    '', '', '', '', '', '', '', ''];
var posterImagesCheckout = ['TheScryingOrb.jpg', 'TheScryingOrb.jpg', 'TheScryingOrb.jpg', 'TheScryingOrb.jpg', 'TheScryingOrb.jpg',
                            'AThousandTimes.jpg', 'AThousandTimes.jpg', 'AThousandTimes.jpg', 'AThousandTimes.jpg', 'AThousandTimes.jpg',
                            'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg',
                            'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg',
                            'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg',
                            'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg',
                            'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg',
                            'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg',
                            'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg'];
var posterText = ['Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon',
                  'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon'];
var posterHref = ['posterTheScryingOrb', 'posterAThousandTimes', 'posterHypnotica', 'posterIndigo', 'posterDesiderium', 'posterRootAccess', 'posterSynergy', 'posterAnhedonia',
                  'posterSpaceCowboy', 'posterComingSoon', 'posterComingSoon', 'posterComingSoon', 'posterComingSoon', 'posterComingSoon', 'posterComingSoon', 'posterComingSoon'];
var vinylImages = ['', '', '', '', '', '', '', '',
                    '', '', '', '', '', '', '', ''];
var vinylImagesCheckout = ['Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg',
                          'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg',
                          'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg',
                          'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg',
                          'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg',
                          'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg',
                          'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg', 'Faith.jpg'];
var vinylText = ['Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon',
                  'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon'];
var vinylHref = ['vinylHypnotica', 'vinylIndigo', 'vinylDesiderium', 'vinylRootAccess', 'vinylSynergy', 'vinylAnhedonia', 'vinylSpaceCowboy', 'vinylComingSoon'];
var cdImagesPhysical = ['', '', '', '',
                          '', '', '', ''];
var cdImagesDigital = ['cdImages_TheScryingOrb.png', '', '', '',
                        '', '', '', ''];
var cdImagesPhysicalCheckout = ['cdImages_TheScryingOrb.png', '', '', '', ''];
var cdImagesDigitalCheckout = ['cdImages_TheScryingOrb.png', 'cdImages_TheScryingOrb.png', 'cdImages_TheScryingOrb.png', 'cdImages_TheScryingOrb.png', 'cdImages_TheScryingOrb.png'];
var cdPhysicalHref = ['cdPhysicalTheScryingOrb', '', '', '',
                      '', '', '', ''];
var cdDigitalHref = ['cdDigitalTheScryingOrb', '', '', '',
                      '', '', '', ''];
var cdPhysicalText = ['Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon',
                      'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon'];
var cdDigitalText = ['The Scrying Orb', 'Coming Soon', 'Coming Soon', 'Coming Soon',
                      'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon'];
var jewelryImages = ['', '', '', '', '', '', '', '',
                    '', '', '', '', '', '', '', ''];
var jewelryText = ['Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon',
                  'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon', 'Coming Soon'];
var jewelryHref = ['', '', '', '',
                    '', '', '', ''];
//Store global booleans
var psywearOn = false;
var wallcandyOn = false;
var groovesOn = false;
var reflectorsOn = false;
var charmedOn = false;
var checkoutOn = false;
var tshirtsOn = false;
var postersOn = false;
var cdsPhysicalOn = false;
var cdsDigitalOn = false;
var jewelryOn = false;
function main(){
  //-----Init page-----//
  //Init show locations
  $(document).ready(initShowLocations());
  //Init show dates
  $(document).ready(initShowDates());
  //Init tickets
  $(document).ready(initTickets());
  //Init store
  $(document).ready(initStore());
  //-----Init page-----//
  var menuVar = 0;
  var item0Var = 0;
  var item1Var = 0;
  var item2Var = 0;
  var item3Var = 0;
  var item4Var = 0;
  var item5Var = 0;
  //-----Functionality
  //Mobile menu
  //WhatItIs
  $("#menu-0").on('click', function(){
    if(item0Var==0){
      $("#menu-0-content").slideDown('slow', function(){
      });
      item0Var = 1;
    }else{
      $("#menu-0-content").slideUp('slow', function(){
      });
      item0Var = 0;
    };
  });
  $("#menu-1").on('click', function(){
    if(item1Var==0){
      $("#menu-1-content").slideDown('slow', function(){
      });
      item1Var = 1;
    }else{
      $("#menu-1-content").slideUp('slow', function(){
      });
      item1Var = 0;
    };
  });
  $("#menu-2").on('click', function(){
    if(item2Var==0){
      $("#menu-2-content").slideDown('slow', function(){
      });
      item2Var = 1;
    }else{
      $("#menu-2-content").slideUp('slow', function(){
      });
      item2Var = 0;
    };
  });
  $("#menu-3").on('click', function(){
    if(item3Var==0){
      $("#menu-3-content").slideDown('slow', function(){
      });
      item3Var = 1;
    }else{
      $("#menu-3-content").slideUp('slow', function(){
      });
      item3Var = 0;
    };
  });
  $("#menu-4").on('click', function(){
    if(item4Var==0){
      $("#menu-4-content").slideDown('slow', function(){
      });
      item4Var = 1;
    }else{
      $("#menu-4-content").slideUp('slow', function(){
      });
      item4Var = 0;
    };
  });
  $("#menu-5").on('click', function(){
    if(item5Var==0){
      $("#menu-5-content").slideDown('slow', function(){
      });
      item5Var = 1;
    }else{
      $("#menu-5-content").slideUp('slow', function(){
      });
      item5Var = 0;
    };
  });
  $("#banner-main-menu-links-content-menu-link").on('click', function(){
    if(menuVar==0){
      $("#banner-main-menu-links-content-downloads").slideDown('slow', function(){
      });
      $("#banner-main-menu-links-content-facebook").slideDown('slow', function(){
      });
      $("#banner-main-menu-links-content-twitter").slideDown('slow', function(){
      });
      $("#banner-main-menu-links-content-instagram").slideDown('slow', function(){
      });
      $("#banner-main-menu-links-content-youtube").slideDown('slow', function(){
      });
      $("#banner-main-menu-links-content-soundcloud").slideDown('slow', function(){
      });
      $("#banner-main-menu-links-content-alms").slideDown('slow', function(){
      });
      $("#banner-main-menu-links-content-contact").slideDown('slow', function(){
      });
      menuVar = 1;
    }else{
      $("#banner-main-menu-links-content-downloads").slideUp('slow', function(){
      });
      $("#banner-main-menu-links-content-facebook").slideUp('slow', function(){
      });
      $("#banner-main-menu-links-content-twitter").slideUp('slow', function(){
      });
      $("#banner-main-menu-links-content-instagram").slideUp('slow', function(){
      });
      $("#banner-main-menu-links-content-youtube").slideUp('slow', function(){
      });
      $("#banner-main-menu-links-content-soundcloud").slideUp('slow', function(){
      });
      $("#banner-main-menu-links-content-alms").slideUp('slow', function(){
      });
      $("#banner-main-menu-links-content-contact").slideUp('slow', function(){
      });
      menuVar = 0;
    };
  });
  //-----Init store main menu-----//
  //Clothing
  $("#banner-shop-menu-clothing-button").on('click', function(){
    $(document).ready(initPsyWear());
  });
  //Posters
  $("#banner-shop-menu-posters-button").on('click', function(){
    $(document).ready(initWallCandy());
  });
  //Vinyl
  $("#banner-shop-menu-vinyl-button").on('click', function(){
    $(document).ready(initGrooves());
  });
  //Cds
  $("#banner-shop-menu-cds-button").on('click', function(){
    $(document).ready(initReflectors());
  });
  //Jewelry
  $("#banner-shop-menu-jewelry-button").on('click', function(){
    $(document).ready(initCharmed());
  });
  //-----Init store main menu-----//
  //----------//
  //-----Sub-menu bar-----//
  $("#shop-main-space-items-menu-bar-content0").on('click', function(){
    $(document).ready(subMenuBarItemOneClick());
  });
  //Menu bar content1
  $("#shop-main-space-items-menu-bar-content1").on('click', function(){
    $(document).ready(subMenuBarItemTwoClick());
  });
  //Left arrow bar
  $("#shop-main-space-left-arrow-bar-image").on('click', function(){
    $(document).ready(leftArrowClick());
  });
  //Right arrow bar
  $("#shop-main-space-right-arrow-bar-image").on('click', function(){
    $(document).ready(rightArrowClick());
  });
  //-----Checkout page-----//
  //Item 1
  $("#shop-main-space-items-row1-item1-image-content").on('click', function(){
    checkoutOn = true;
    //Main display function
    var displayInit = $("#shop-main-space-items-row1-item1-image-href").attr('name');
    switch(displayInit){
      case tShirtHref[0]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(tShirtText[0]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[0]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', tShirtImagesCheckout[0]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', tShirtImagesCheckout[1]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', tShirtImagesCheckout[2]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', tShirtImagesCheckout[3]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', tShirtImagesCheckout[4]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[0]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[0]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[1]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[2]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[3]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[4]);
        });
        break;
      case tShirtHref[8]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(tShirtText[8]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[0]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', tShirtImagesCheckout[40]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', tShirtImagesCheckout[41]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', tShirtImagesCheckout[42]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', tShirtImagesCheckout[43]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', tShirtImagesCheckout[44]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[40]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[40]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[41]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[42]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[43]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[44]);
        });
        break;
      case posterHref[0]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(posterText[0]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[1]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', posterImagesCheckout[0]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', posterImagesCheckout[1]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', posterImagesCheckout[2]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', posterImagesCheckout[3]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', posterImagesCheckout[4]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[0]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[0]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[1]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[2]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[3]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[4]);
        });
        break;
      case posterHref[8]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(posterText[8]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[1]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', posterImagesCheckout[40]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', posterImagesCheckout[41]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', posterImagesCheckout[42]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', posterImagesCheckout[43]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', posterImagesCheckout[44]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[40]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[40]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[41]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[42]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[43]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[44]);
        });
        break;
      case vinylHref[0]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(vinylText[0]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[2]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', vinylImagesCheckout[0]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', vinylImagesCheckout[1]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', vinylImagesCheckout[2]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', vinylImagesCheckout[3]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', vinylImagesCheckout[4]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[0]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[0]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[1]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[2]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[3]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[4]);
        });
        break;
      case cdPhysicalHref[0]:
          //Hide Arrows
          $("#shop-main-space-left-arrow-bar-image").show();
          $("#shop-main-space-right-arrow-bar-image").hide();
          //Show checkout page
          $("#shop-main-space-checkout").toggle('slow');
          //Init checkout title
          $("#shop-main-space-checkout-left-top-banner0").text(cdPhysicalText[0]);
          $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[3]);
          //Init checkout hover images
          $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', cdImagesPhysicalCheckout[0]);
          $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', cdImagesPhysicalCheckout[1]);
          $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', cdImagesPhysicalCheckout[2]);
          $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', cdImagesPhysicalCheckout[3]);
          $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', cdImagesPhysicalCheckout[4]);
          //Init main image
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', cdImagesPhysicalCheckout[0]);
          //Image hover
          $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
            $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', cdImagesPhysicalCheckout[0]);
          });
          $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
            $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', cdImagesPhysicalCheckout[1]);
          });
          $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
            $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', cdImagesPhysicalCheckout[2]);
          });
          $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
            $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', cdImagesPhysicalCheckout[3]);
          });
          $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
            $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', cdImagesPhysicalCheckout[4]);
          });
          break;
      case cdDigitalHref[0]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(cdDigitalText[0]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[4]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', cdImagesDigitalCheckout[0]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', cdImagesDigitalCheckout[1]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', cdImagesDigitalCheckout[2]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', cdImagesDigitalCheckout[3]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', cdImagesDigitalCheckout[4]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', cdImagesDigitalCheckout[0]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', cdImagesDigitalCheckout[0]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', cdImagesDigitalCheckout[1]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', cdImagesDigitalCheckout[2]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', cdImagesDigitalCheckout[3]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', cdImagesDigitalCheckout[4]);
        });
        $("#shipping-conditions-content").text('');
        $("#checkout-download-button").show();
        break;
      default:
        break;
    };
  });
  //Item 2
  $("#shop-main-space-items-row1-item2-image-content").on('click', function(){
    checkoutOn = true;
    //Main display function
    var displayInit = $("#shop-main-space-items-row1-item2-image-href").attr('name');
    switch(displayInit){
      case tShirtHref[1]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(tShirtText[1]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[0]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', tShirtImagesCheckout[5]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', tShirtImagesCheckout[6]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', tShirtImagesCheckout[7]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', tShirtImagesCheckout[8]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', tShirtImagesCheckout[9]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[5]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[5]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[6]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[7]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[8]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[9]);
        });
        break;
      case posterHref[1]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(posterText[1]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[1]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', posterImagesCheckout[5]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', posterImagesCheckout[6]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', posterImagesCheckout[7]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', posterImagesCheckout[8]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', posterImagesCheckout[9]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[5]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[5]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[6]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[7]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[8]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[9]);
        });
        break;
      case vinylHref[1]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(vinylText[1]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[2]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', vinylImagesCheckout[5]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', vinylImagesCheckout[6]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', vinylImagesCheckout[7]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', vinylImagesCheckout[8]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', vinylImagesCheckout[9]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[5]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[5]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[6]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[7]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[8]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[9]);
        });
        break;
      default:
        break;
    };
  });
  //Item 3
  $("#shop-main-space-items-row1-item3-image-content").on('click', function(){
    checkoutOn = true;
    //Main display function
    var displayInit = $("#shop-main-space-items-row1-item3-image-href").attr('name');
    switch(displayInit){
      case tShirtHref[2]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(tShirtText[2]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[0]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', tShirtImagesCheckout[10]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', tShirtImagesCheckout[11]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', tShirtImagesCheckout[12]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', tShirtImagesCheckout[13]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', tShirtImagesCheckout[14]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[10]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[10]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[11]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[12]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[13]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[14]);
        });
        break;
      case posterHref[2]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(posterText[2]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[1]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', posterImagesCheckout[10]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', posterImagesCheckout[11]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', posterImagesCheckout[12]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', posterImagesCheckout[13]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', posterImagesCheckout[14]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[10]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[10]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[11]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[12]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[13]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[14]);
        });
        break;
      case vinylHref[2]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(vinylText[2]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[2]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', vinylImagesCheckout[10]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', vinylImagesCheckout[11]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', vinylImagesCheckout[12]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', vinylImagesCheckout[13]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', vinylImagesCheckout[14]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[10]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[10]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[11]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[12]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[13]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[14]);
        });
        break;
      default:
        break;
    };
  });
  //Item 4
  $("#shop-main-space-items-row1-item4-image-content").on('click', function(){
    checkoutOn = true;
    //Main display function
    var displayInit = $("#shop-main-space-items-row1-item4-image-href").attr('name');
    switch(displayInit){
      case tShirtHref[3]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(tShirtText[3]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[0]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', tShirtImagesCheckout[15]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', tShirtImagesCheckout[16]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', tShirtImagesCheckout[17]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', tShirtImagesCheckout[18]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', tShirtImagesCheckout[19]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[15]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[15]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[16]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[17]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[18]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[19]);
        });
        break;
      case posterHref[3]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(posterText[3]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[1]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', posterImagesCheckout[15]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', posterImagesCheckout[16]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', posterImagesCheckout[17]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', posterImagesCheckout[18]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', posterImagesCheckout[19]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[15]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[15]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[16]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[17]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[18]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[19]);
        });
        break;
      case vinylHref[3]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(vinylText[3]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[2]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', vinylImagesCheckout[15]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', vinylImagesCheckout[16]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', vinylImagesCheckout[17]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', vinylImagesCheckout[18]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', vinylImagesCheckout[19]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[15]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[15]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[16]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[17]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[18]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[19]);
        });
        break;
      default:
        break;
    };
  });
  //Item 5
  $("#shop-main-space-items-row2-item1-image-content").on('click', function(){
    checkoutOn = true;
    //Main display function
    var displayInit = $("#shop-main-space-items-row2-item1-image-href").attr('name');
    switch(displayInit){
      case tShirtHref[4]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(tShirtText[4]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[0]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', tShirtImagesCheckout[20]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', tShirtImagesCheckout[21]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', tShirtImagesCheckout[22]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', tShirtImagesCheckout[23]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', tShirtImagesCheckout[24]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[20]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[20]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[21]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[22]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[23]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[24]);
        });
        break;
      case posterHref[4]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(posterText[4]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[1]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', posterImagesCheckout[20]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', posterImagesCheckout[21]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', posterImagesCheckout[22]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', posterImagesCheckout[23]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', posterImagesCheckout[24]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[20]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[20]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[21]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[22]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[23]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[24]);
        });
        break;
      case vinylHref[4]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(vinylText[4]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[2]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', vinylImagesCheckout[20]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', vinylImagesCheckout[21]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', vinylImagesCheckout[22]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', vinylImagesCheckout[23]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', vinylImagesCheckout[24]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[20]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[20]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[21]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[22]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[23]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[24]);
        });
        break;
      default:
        break;
    };
  });
  //Item 6
  $("#shop-main-space-items-row2-item2-image-content").on('click', function(){
    checkoutOn = true;
    //Main display function
    var displayInit = $("#shop-main-space-items-row2-item2-image-href").attr('name');
    switch(displayInit){
      case tShirtHref[5]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(tShirtText[5]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[0]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', tShirtImagesCheckout[25]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', tShirtImagesCheckout[26]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', tShirtImagesCheckout[27]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', tShirtImagesCheckout[28]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', tShirtImagesCheckout[29]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[25]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[25]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[26]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[27]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[28]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[29]);
        });
        break;
      case posterHref[5]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(posterText[5]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[1]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', posterImagesCheckout[25]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', posterImagesCheckout[26]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', posterImagesCheckout[27]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', posterImagesCheckout[28]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', posterImagesCheckout[29]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[25]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[25]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[26]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[27]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[28]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[29]);
        });
        break;
      case vinylHref[5]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(vinylText[5]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[2]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', vinylImagesCheckout[25]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', vinylImagesCheckout[26]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', vinylImagesCheckout[27]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', vinylImagesCheckout[28]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', vinylImagesCheckout[29]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[25]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[25]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[26]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[27]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[28]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[29]);
        });
        break;
      default:
        break;
    };
  });
  //Item 7
  $("#shop-main-space-items-row2-item3-image-content").on('click', function(){
    checkoutOn = true;
    //Main display function
    var displayInit = $("#shop-main-space-items-row2-item3-image-href").attr('name');
    switch(displayInit){
      case tShirtHref[6]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(tShirtText[6]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[0]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', tShirtImagesCheckout[30]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', tShirtImagesCheckout[31]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', tShirtImagesCheckout[32]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', tShirtImagesCheckout[33]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', tShirtImagesCheckout[34]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[30]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[30]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[31]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[32]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[33]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[34]);
        });
        break;
      case posterHref[6]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(posterText[6]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[1]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', posterImagesCheckout[30]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', posterImagesCheckout[31]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', posterImagesCheckout[32]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', posterImagesCheckout[33]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', posterImagesCheckout[34]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[30]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[30]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[31]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[32]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[33]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[34]);
        });
        break;
      case vinylHref[6]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(vinylText[6]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[2]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', vinylImagesCheckout[30]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', vinylImagesCheckout[31]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', vinylImagesCheckout[32]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', vinylImagesCheckout[33]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', vinylImagesCheckout[34]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[30]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[30]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[31]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[32]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[33]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', vinylImagesCheckout[34]);
        });
        break;
      default:
        break;
    };
  });
  //Item 8
  $("#shop-main-space-items-row2-item4-image-content").on('click', function(){
    checkoutOn = true;
    //Main display function
    var displayInit = $("#shop-main-space-items-row2-item4-image-href").attr('name');
    switch(displayInit){
      case tShirtHref[7]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(tShirtText[7]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[0]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', tShirtImagesCheckout[35]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', tShirtImagesCheckout[36]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', tShirtImagesCheckout[37]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', tShirtImagesCheckout[38]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', tShirtImagesCheckout[39]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[35]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[35]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[36]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[37]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[38]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', tShirtImagesCheckout[39]);
        });
        break;
      case posterHref[7]:
        //Hide Arrows
        $("#shop-main-space-left-arrow-bar-image").show();
        $("#shop-main-space-right-arrow-bar-image").hide();
        //Show checkout page
        $("#shop-main-space-checkout").toggle('slow');
        //Init checkout title
        $("#shop-main-space-checkout-left-top-banner0").text(posterText[7]);
        $("#shop-main-space-checkout-left-top-banner1").text(checkoutMenuBar[1]);
        //Init checkout hover images
        $("#shop-main-space-checkout-left-middle-main-image0-content").attr('src', posterImagesCheckout[35]);
        $("#shop-main-space-checkout-left-middle-main-image1-content").attr('src', posterImagesCheckout[36]);
        $("#shop-main-space-checkout-left-middle-main-image2-content").attr('src', posterImagesCheckout[37]);
        $("#shop-main-space-checkout-left-middle-main-image3-content").attr('src', posterImagesCheckout[38]);
        $("#shop-main-space-checkout-left-middle-main-image4-content").attr('src', posterImagesCheckout[39]);
        //Init main image
        $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[35]);
        //Image hover
        $("#shop-main-space-checkout-left-middle-main-image0-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[35]);
        });
        $("#shop-main-space-checkout-left-middle-main-image1-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[36]);
        });
        $("#shop-main-space-checkout-left-middle-main-image2-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[37]);
        });
        $("#shop-main-space-checkout-left-middle-main-image3-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[38]);
        });
        $("#shop-main-space-checkout-left-middle-main-image4-content").hover(function(){
          $("#shop-main-space-checkout-left-middle-image-middle-main-content").attr('src', posterImagesCheckout[39]);
        });
        break;
      default:
        break;
    };
  });
  //-----Checkout page-----//
};
$(document).ready(main);
//-----Init page-----//
//Init show locations
function initShowLocations(jQuery){
  $("#content-main-shows-show1-location-content").text(showsLocation[0]);
  $("#content-main-shows-show2-location-content").text(showsLocation[1]);
  $("#content-main-shows-show3-location-content").text(showsLocation[2]);
  $("#content-main-shows-show4-location-content").text(showsLocation[3]);
  $("#content-main-shows-show5-location-content").text(showsLocation[4]);
};
//Init show dates
function initShowDates(jQuery){
  $("#content-main-shows-show1-date-content").text(showsDate[0]);
  $("#content-main-shows-show2-date-content").text(showsDate[1]);
  $("#content-main-shows-show3-date-content").text(showsDate[2]);
  $("#content-main-shows-show4-date-content").text(showsDate[3]);
  $("#content-main-shows-show5-date-content").text(showsDate[4]);
};
//Init tickets
function initTickets(JQuery){
  $("#content-main-shows-show1-tickets-content").text(showsTickets[0]);
  $("#content-main-shows-show2-tickets-content").text(showsTickets[1]);
  $("#content-main-shows-show3-tickets-content").text(showsTickets[2]);
  $("#content-main-shows-show4-tickets-content").text(showsTickets[3]);
  $("#content-main-shows-show5-tickets-content").text(showsTickets[4]);
};
//Init  store
function initStore(jQuery){
  $(document).ready(initCdsDigitalStore(0));
};
//-----Init page-----//
//----------//
//-----Init store main menu-----//
//Init psywear
function initPsyWear(){
  storeArrayCounter = 0;
  $(document).ready(initTShirtStore(storeArrayCounter));
};
//Init wallcandy
function initWallCandy(){
  storeArrayCounter = 0;
  $(document).ready(initPosterStore(storeArrayCounter));
};
//Init grooves
function initGrooves(){
  storeArrayCounter = 0;
  $(document).ready(initVinylStore(storeArrayCounter));
};
//Init reflectors
function initReflectors(){
  storeArrayCounter = 0;
  $(document).ready(initCdsPhysicalStore(storeArrayCounter));
};
//Init charmed
function initCharmed(){
  storeArrayCounter = 0;
  $(document).ready(initJewelryStore(storeArrayCounter));
};
//-----Init store main menu-----//
//----------//
//Init store sub-menus-----//
//Init tshirts
function initTShirtStore(counter){
  //Disable checkout
  if(checkoutOn === true){
    $("#shop-main-space-checkout").toggle('slow');
  };
  //Init store booleans
  psywearOn = true;
  wallcandyOn = false;
  groovesOn = false;
  reflectorsOn = false;
  charmedOn = false;
  checkoutOn = false;
  tshirtsOn = true;
  postersOn = false;
  vinylOn = false;
  cdsPhysicalOn = false;
  cdsDigitalOn = false;
  jewelryOn = false;
  //Init arrows
  if(counter < storePageOne){
    $("#shop-main-space-left-arrow-bar-image").hide();
    $("#shop-main-space-right-arrow-bar-image").show();
  }else{
    $("#shop-main-space-left-arrow-bar-image").show();
    $("#shop-main-space-right-arrow-bar-image").hide();
  };
  //Init store checkout menu
  $("#shop-main-space-items-menu-bar-content0").text(subMenuBar[0]);
  $("#shop-main-space-items-menu-bar-content1").text(subMenuBarBlank[0]);
  //Redefine submenu variables
  subMenuBarItemOne[0] = subMenuBar[0];
  subMenuBarItemTwo[0] = subMenuBar[0];
  //Init array counter
  var arrayCounter = counter;
  //Init image values
  $('#shop-main-space-items-row1-item1-image-content').attr('src', tShirtImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row1-item2-image-content').attr('src', tShirtImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row1-item3-image-content').attr('src', tShirtImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row1-item4-image-content').attr('src', tShirtImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item1-image-content').attr('src', tShirtImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item2-image-content').attr('src', tShirtImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item3-image-content').attr('src', tShirtImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item4-image-content').attr('src', tShirtImages[arrayCounter]);
  arrayCounter = arrayCounter - 7;
  //Init href values
  $("#shop-main-space-items-row1-item1-image-href").attr('name', tShirtHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item2-image-href").attr('name', tShirtHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item3-image-href").attr('name', tShirtHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item4-image-href").attr('name', tShirtHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item1-image-href").attr('name', tShirtHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item2-image-href").attr('name', tShirtHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item3-image-href").attr('name', tShirtHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item4-image-href").attr('name', tShirtHref[arrayCounter]);
  arrayCounter = arrayCounter - 7;
  //Init store text values
  $("#shop-main-space-items-row1-item1-caption-content").text(tShirtText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item2-caption-content").text(tShirtText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item3-caption-content").text(tShirtText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item4-caption-content").text(tShirtText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item1-caption-content").text(tShirtText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item2-caption-content").text(tShirtText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item3-caption-content").text(tShirtText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item4-caption-content").text(tShirtText[arrayCounter]);
};
//Init posters
function initPosterStore(counter){
  //Disable checkout
  if(checkoutOn === true){
    $("#shop-main-space-checkout").toggle('slow');
  };
  //Init store booleans
  psywearOn = false;
  wallcandyOn = true;
  groovesOn = false;
  reflectorsOn = false;
  charmedOn = false;
  checkoutOn = false;
  tshirtsOn = false;
  postersOn = true;
  vinylOn = false;
  cdsPhysicalOn = false;
  cdsDigitalOn = false;
  jewelryOn = false;
  //Init store menu text
  $("#shop-main-space-items-menu-bar-content0").text(subMenuBar[1]);
  $("#shop-main-space-items-menu-bar-content1").text(subMenuBarBlank[0]);
  //Redefine submenu variables
  subMenuBarItemOne[0] = subMenuBar[1];
  subMenuBarItemTwo[0] = subMenuBar[0];
  //Init arrayCounter
  var arrayCounter = counter;
  //Init rows
  $("#shop-main-space-items-row1").show();
  $("#shop-main-space-items-row2").show();
  //Init arrows
  if(counter < storePageOne){
    $("#shop-main-space-left-arrow-bar-image").hide();
    $("#shop-main-space-right-arrow-bar-image").show();
  }else{
    $("#shop-main-space-left-arrow-bar-image").show();
    $("#shop-main-space-right-arrow-bar-image").hide();
  };
  //Init poster image values
  $('#shop-main-space-items-row1-item1-image-content').attr('src', posterImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row1-item2-image-content').attr('src', posterImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row1-item3-image-content').attr('src', posterImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row1-item4-image-content').attr('src', posterImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item1-image-content').attr('src', posterImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item2-image-content').attr('src', posterImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item3-image-content').attr('src', posterImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item4-image-content').attr('src', posterImages[arrayCounter]);
  arrayCounter = arrayCounter - 7;
  //Init href values
  $("#shop-main-space-items-row1-item1-image-href").attr('name', posterHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item2-image-href").attr('name', posterHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item3-image-href").attr('name', posterHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item4-image-href").attr('name', posterHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item1-image-href").attr('name', posterHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item2-image-href").attr('name', posterHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item3-image-href").attr('name', posterHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item4-image-href").attr('name', posterHref[arrayCounter]);
  arrayCounter = arrayCounter - 7;
  //Init store text values
  $("#shop-main-space-items-row1-item1-caption-content").text(posterText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item2-caption-content").text(posterText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item3-caption-content").text(posterText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item4-caption-content").text(posterText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item1-caption-content").text(posterText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item2-caption-content").text(posterText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item3-caption-content").text(posterText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item4-caption-content").text(posterText[arrayCounter]);
};
//Init vinyl
function initVinylStore(counter){
  //Disable checkout
  if(checkoutOn === true){
    $("#shop-main-space-checkout").toggle('slow');
  };
  //Init store booleans
  psywearOn = false;
  wallcandyOn = false;
  groovesOn = true;
  reflectorsOn = false;
  charmedOn = false;
  checkoutOn = false;
  tshirtsOn = false;
  postersOn = false;
  vinylOn = true;
  cdsPhysicalOn = false;
  cdsDigitalOn = false;
  jewelryOn = false;
  //Init store menu text
  $("#shop-main-space-items-menu-bar-content0").text(subMenuBar[2]);
  $("#shop-main-space-items-menu-bar-content1").text(subMenuBarBlank[0]);
  //Redefine submenu variables
  subMenuBarItemOne[0] = subMenuBar[2];
  subMenuBarItemTwo[0] = subMenuBar[0];
  //Init arrayCounter
  var arrayCounter = counter;
  //Init rows
  $("#shop-main-space-items-row1").show();
  $("#shop-main-space-items-row2").show();
  //Init arrows
  if(counter < storePageOne){
    $("#shop-main-space-left-arrow-bar-image").hide();
    $("#shop-main-space-right-arrow-bar-image").hide();
  }else{
    $("#shop-main-space-left-arrow-bar-image").hide();
    $("#shop-main-space-right-arrow-bar-image").hide();
  };
  //Init vinyl image values
  $('#shop-main-space-items-row1-item1-image-content').attr('src', vinylImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row1-item2-image-content').attr('src', vinylImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row1-item3-image-content').attr('src', vinylImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row1-item4-image-content').attr('src', vinylImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item1-image-content').attr('src', vinylImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item2-image-content').attr('src', vinylImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item3-image-content').attr('src', vinylImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item4-image-content').attr('src', vinylImages[arrayCounter]);
  arrayCounter = arrayCounter - 7;
  //Init href values
  $("#shop-main-space-items-row1-item1-image-href").attr('name', vinylHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item2-image-href").attr('name', vinylHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item3-image-href").attr('name', vinylHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item4-image-href").attr('name', vinylHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item1-image-href").attr('name', vinylHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item2-image-href").attr('name', vinylHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item3-image-href").attr('name', vinylHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item4-image-href").attr('name', vinylHref[arrayCounter]);
  arrayCounter = arrayCounter - 7;
  //Init store text values
  $("#shop-main-space-items-row1-item1-caption-content").text(vinylText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item2-caption-content").text(vinylText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item3-caption-content").text(vinylText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item4-caption-content").text(vinylText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item1-caption-content").text(vinylText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item2-caption-content").text(vinylText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item3-caption-content").text(vinylText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item4-caption-content").text(vinylText[arrayCounter]);
};
//Init cdsPhysical
function initCdsPhysicalStore(counter){
  //Disable checkout
  if(checkoutOn === true){
    $("#shop-main-space-checkout").toggle('slow');
  };
  //Init store booleans
  psywearOn = false;
  wallcandyOn = false;
  groovesOn = false;
  reflectorsOn = true;
  charmedOn = false;
  checkoutOn = false;
  tshirtsOn = false;
  postersOn = false;
  vinylOn = false;
  cdsPhysicalOn = true;
  cdsDigitalOn = false;
  jewelryOn = false;
  //Init store menu text
  $("#shop-main-space-items-menu-bar-content0").text(subMenuBar[3]);
  $("#shop-main-space-items-menu-bar-content1").text(subMenuBar[4]);
  //Redefine submenu variables
  subMenuBarItemOne[0] = subMenuBar[3];
  subMenuBarItemTwo[0] = subMenuBar[4];
  //Init arrayCounter
  var arrayCounter = counter;
  //Init rows
  $("#shop-main-space-items-row1").show();
  $("#shop-main-space-items-row2").show();
  //Init arrows
  if(counter < storePageOne){
    $("#shop-main-space-left-arrow-bar-image").hide();
    $("#shop-main-space-right-arrow-bar-image").hide();
  }else{
    $("#shop-main-space-left-arrow-bar-image").hide();
    $("#shop-main-space-right-arrow-bar-image").hide();
  };
  //Init cd image values
  $('#shop-main-space-items-row1-item1-image-content').attr('src', cdImagesPhysical[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row1-item2-image-content').attr('src', cdImagesPhysical[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row1-item3-image-content').attr('src', cdImagesPhysical[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row1-item4-image-content').attr('src', cdImagesPhysical[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item1-image-content').attr('src', cdImagesPhysical[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item2-image-content').attr('src', cdImagesPhysical[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item3-image-content').attr('src', cdImagesPhysical[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item4-image-content').attr('src', cdImagesPhysical[arrayCounter]);
  arrayCounter = arrayCounter - 7;
  //Init href values
  $("#shop-main-space-items-row1-item1-image-href").attr('name', cdPhysicalHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item2-image-href").attr('name', cdPhysicalHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item3-image-href").attr('name', cdPhysicalHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item4-image-href").attr('name', cdPhysicalHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item1-image-href").attr('name', cdPhysicalHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item2-image-href").attr('name', cdPhysicalHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item3-image-href").attr('name', cdPhysicalHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item4-image-href").attr('name', cdPhysicalHref[arrayCounter]);
  arrayCounter = arrayCounter - 7;
  //Init store text values
  $("#shop-main-space-items-row1-item1-caption-content").text(cdPhysicalText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item2-caption-content").text(cdPhysicalText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item3-caption-content").text(cdPhysicalText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item4-caption-content").text(cdPhysicalText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item1-caption-content").text(cdPhysicalText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item2-caption-content").text(cdPhysicalText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item3-caption-content").text(cdPhysicalText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item4-caption-content").text(cdPhysicalText[arrayCounter]);
};
//Init cdsDigital
function initCdsDigitalStore(counter){
  //Disable checkout
  if(checkoutOn === true){
    $("#shop-main-space-checkout").toggle('slow');
  };
  //Init store booleans
  psywearOn = false;
  wallcandyOn = false;
  groovesOn = false;
  reflectorsOn = true;
  charmedOn = false;
  checkoutOn = false;
  tshirtsOn = false;
  postersOn = false;
  vinylOn = false;
  cdsPhysicalOn = false;
  cdsDigitalOn = true;
  jewelryOn = false;
  //Init store menu text
  $("#shop-main-space-items-menu-bar-content0").text(subMenuBar[3]);
  $("#shop-main-space-items-menu-bar-content1").text(subMenuBar[4]);
  //Redefine submenu variables
  subMenuBarItemOne[0] = subMenuBar[3];
  subMenuBarItemTwo[0] = subMenuBar[4];
  //Init arrayCounter
  var arrayCounter = counter;
  //Init rows
  $("#shop-main-space-items-row1").show();
  $("#shop-main-space-items-row2").show();
  //Init arrows
  if(counter < storePageOne){
    $("#shop-main-space-left-arrow-bar-image").hide();
    $("#shop-main-space-right-arrow-bar-image").hide();
  }else{
    $("#shop-main-space-left-arrow-bar-image").hide();
    $("#shop-main-space-right-arrow-bar-image").hide();
  };
  //Init cd image values
  $('#shop-main-space-items-row1-item1-image-content').attr('src', cdImagesDigital[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row1-item2-image-content').attr('src', cdImagesDigital[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row1-item3-image-content').attr('src', cdImagesDigital[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row1-item4-image-content').attr('src', cdImagesDigital[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item1-image-content').attr('src', cdImagesDigital[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item2-image-content').attr('src', cdImagesDigital[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item3-image-content').attr('src', cdImagesDigital[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item4-image-content').attr('src', cdImagesDigital[arrayCounter]);
  arrayCounter = arrayCounter - 7;
  //Init href values
  $("#shop-main-space-items-row1-item1-image-href").attr('name', cdDigitalHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item2-image-href").attr('name', cdDigitalHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item3-image-href").attr('name', cdDigitalHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item4-image-href").attr('name', cdDigitalHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item1-image-href").attr('name', cdDigitalHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item2-image-href").attr('name', cdDigitalHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item3-image-href").attr('name', cdDigitalHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item4-image-href").attr('name', cdDigitalHref[arrayCounter]);
  arrayCounter = arrayCounter - 7;
  //Init store text values
  $("#shop-main-space-items-row1-item1-caption-content").text(cdDigitalText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item2-caption-content").text(cdDigitalText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item3-caption-content").text(cdDigitalText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item4-caption-content").text(cdDigitalText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item1-caption-content").text(cdDigitalText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item2-caption-content").text(cdDigitalText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item3-caption-content").text(cdDigitalText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item4-caption-content").text(cdDigitalText[arrayCounter]);
};
//Init jewelry
function initJewelryStore(counter){
  //Disable checkout
  if(checkoutOn === true){
    $("#shop-main-space-checkout").toggle('slow');
  };
  //Init store booleans
  psywearOn = false;
  wallcandyOn = false;
  groovesOn = false;
  reflectorsOn = false;
  charmedOn = true;
  checkoutOn = false;
  tshirtsOn = false;
  postersOn = false;
  vinylOn = false;
  cdsPhysicalOn = false;
  cdsDigitalOn = false;
  jewelryOn = true;
  //Init store menu text
  $("#shop-main-space-items-menu-bar-content0").text(subMenuBar[5]);
  $("#shop-main-space-items-menu-bar-content1").text(subMenuBarBlank[0]);
  //Redefine submenu variables
  subMenuBarItemOne[0] = subMenuBar[5];
  subMenuBarItemTwo[0] = subMenuBar[0];
  //Init arrayCounter
  var arrayCounter = counter;
  //Init rows
  $("#shop-main-space-items-row1").show();
  $("#shop-main-space-items-row2").show();
  //Init arrows
  if(counter < storePageOne){
    $("#shop-main-space-left-arrow-bar-image").hide();
    $("#shop-main-space-right-arrow-bar-image").hide();
  }else{
    $("#shop-main-space-left-arrow-bar-image").hide();
    $("#shop-main-space-right-arrow-bar-image").hide();
  };
  //Init jewelry image values
  $('#shop-main-space-items-row1-item1-image-content').attr('src', jewelryImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row1-item2-image-content').attr('src', jewelryImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row1-item3-image-content').attr('src', jewelryImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row1-item4-image-content').attr('src', jewelryImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item1-image-content').attr('src', jewelryImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item2-image-content').attr('src', jewelryImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item3-image-content').attr('src', jewelryImages[arrayCounter]);
  arrayCounter++;
  $('#shop-main-space-items-row2-item4-image-content').attr('src', jewelryImages[arrayCounter]);
  arrayCounter = arrayCounter - 7;
  //Init href values
  $("#shop-main-space-items-row1-item1-image-href").attr('name', jewelryHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item2-image-href").attr('name', jewelryHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item3-image-href").attr('name', jewelryHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item4-image-href").attr('name', jewelryHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item1-image-href").attr('name', jewelryHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item2-image-href").attr('name', jewelryHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item3-image-href").attr('name', jewelryHref[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item4-image-href").attr('name', jewelryHref[arrayCounter]);
  arrayCounter = arrayCounter - 7;
  //Init store text values
  $("#shop-main-space-items-row1-item1-caption-content").text(jewelryText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item2-caption-content").text(jewelryText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item3-caption-content").text(jewelryText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row1-item4-caption-content").text(jewelryText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item1-caption-content").text(jewelryText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item2-caption-content").text(jewelryText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item3-caption-content").text(jewelryText[arrayCounter]);
  arrayCounter++;
  $("#shop-main-space-items-row2-item4-caption-content").text(jewelryText[arrayCounter]);
};
//-----Init store sub-menus-----//
//----------//
//-----Sub-menu bar-----//
//Sub menu bar item one
function subMenuBarItemOneClick(){
  var subMenuBarItem = subMenuBarItemOne[0];
  storeArrayCounter = 0;
  switch(subMenuBarItem){
    case subMenuBar[0]:
        $(document).ready(initTShirtStore(storeArrayCounter));
      break;
    case subMenuBar[1]:
        $(document).ready(initPosterStore(storeArrayCounter));
      break;
    case subMenuBar[2]:
        $(document).ready(initVinylStore(storeArrayCounter));
      break;
    case subMenuBar[3]:
        $(document).ready(initCdsPhysicalStore(storeArrayCounter));
      break;
    case subMenuBar[4]:
        $(document).ready(initCdsDigitalStore(storeArrayCounter));
      break;
    case subMenuBar[5]:
        $(document).ready(initJewelryStore(storeArrayCounter));
      break;
    default:
      break;
  }
};
//Sub menu bar item two
function subMenuBarItemTwoClick(){
  var subMenuBarItem = subMenuBarItemTwo[0];
  storeArrayCounter = 0;
  switch(subMenuBarItem){
    case subMenuBar[0]:
        $(document).ready(initTShirtStore(storeArrayCounter));
      break;
    case subMenuBar[1]:
        $(document).ready(initPosterStore(storeArrayCounter));
      break;
    case subMenuBar[2]:
        $(document).ready(initVinylStore(storeArrayCounter));
      break;
    case subMenuBar[3]:
        $(document).ready(initCdsPhysicalStore(storeArrayCounter));
      break;
    case subMenuBar[4]:
        $(document).ready(initCdsDigitalStore(storeArrayCounter));
      break;
    case subMenuBar[5]:
        $(document).ready(initJewelryStore(storeArrayCounter));
      break;
    default:
      break;
  }
};
//-----Sub-menu bar-----//
//----------//
//-----Arrow bars-----//
//Left arrow
function leftArrowClick(){
  //Go back a page
  if(tshirtsOn && checkoutOn === false){
    //Update storeArrayCounter
    storeArrayCounter = storeArrayCounter - 8;
    if(storeArrayCounter < 0){
      storeArrayCounter = 0;
    };
    $(document).ready(initTShirtStore(storeArrayCounter));
  }else if(postersOn && checkoutOn === false){
    //Update storeArrayCounter
    storeArrayCounter = storeArrayCounter - 8;
    if(storeArrayCounter < 0){
      storeArrayCounter = 0;
    };
    $(document).ready(initPosterStore(storeArrayCounter));
  }else if(vinylOn && checkoutOn === false){
    //Update storeArrayCounter
    storeArrayCounter = storeArrayCounter - 8;
    if(storeArrayCounter < 0){
      storeArrayCounter = 0;
    };
    $(document).ready(initVinylStore(storeArrayCounter));
  }else if(cdsPhysicalOn && checkoutOn === false){
    //Update storeArrayCounter
    storeArrayCounter = storeArrayCounter - 8;
    if(storeArrayCounter < 0){
      storeArrayCounter = 0;
    };
    $(document).ready(initCdsPhysicalStore(storeArrayCounter));
  }else if(cdsDigitalOn && checkoutOn === false){
    //Update storeArrayCounter
    storeArrayCounter = storeArrayCounter - 8;
    if(storeArrayCounter < 0){
      storeArrayCounter = 0;
    };
    $(document).ready(initCdsDigitalStore(storeArrayCounter));
  }else if(jewelryOn && checkoutOn === false){
    //Update storeArrayCounter
    storeArrayCounter = storeArrayCounter - 8;
    if(storeArrayCounter < 0){
      storeArrayCounter = 0;
    };
    $(document).ready(initJewelryStore(storeArrayCounter));
  }else{
    if(tshirtsOn){
      checkoutOn = false;
      $(document).ready(initTShirtStore(storeArrayCounter));
      $("#shop-main-space-checkout").toggle('slow');
    }else if(postersOn){
      checkoutOn = false;
      $(document).ready(initPosterStore(storeArrayCounter));
      $("#shop-main-space-checkout").toggle('slow');
    }else if(vinylOn){
      checkoutOn = false;
      $(document).ready(initVinylStore(storeArrayCounter));
      $("#shop-main-space-checkout").toggle('slow');
    }else if(cdsPhysicalOn){
      checkoutOn = false;
      $(document).ready(initCdsPhysicalStore(storeArrayCounter));
      $("#shop-main-space-checkout").toggle('slow');
    }else if(cdsDigitalOn){
      checkoutOn = false;
      $(document).ready(initCdsDigitalStore(storeArrayCounter));
      $("#shop-main-space-checkout").toggle('slow');
    }else{
      checkoutOn = false;
      $(document).ready(initJewelryStore(storeArrayCounter));
      $("#shop-main-space-checkout").toggle('slow');
    };
  };
  $("#checkout-download-button").hide();
  $("#checkout-button-buy").hide();
};
//Right arrow
function rightArrowClick(){
  //Update storeArrayCounter
  storeArrayCounter = storeArrayCounter + 8;
  //If checkout is on
  //Go back a page
  if(tshirtsOn){
    $(document).ready(initTShirtStore(storeArrayCounter));
  }else if(postersOn){
    $(document).ready(initPosterStore(storeArrayCounter));
  }else if(vinylOn){
    $(document).ready(initVinylStore(storeArrayCounter));
  }else if(cdsPhysicalOn){
    $(document).ready(initCdsPhysicalStore(storeArrayCounter));
  }else if(cdsDigitalOn){
    $(document).ready(initCdsDigitalStore(storeArrayCounter));
  }else{
    $(document).ready(initJewelryStore(storeArrayCounter));
  };
};
//-----Arrow bars-----//
