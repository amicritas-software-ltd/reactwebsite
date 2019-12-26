/*-----------------------------------------------------------------------------------*/
/* 		Mian Js Start 
/*-----------------------------------------------------------------------------------*/
$(document).ready(function($) {
  "use strict";

  var $navbar = $("#mNavbar");

  AdjustHeader(); // Incase the user loads the page from halfway down (or something);
  $(window).scroll(function() {
    AdjustHeader();
  });

  function AdjustHeader() {
    if ($(window).scrollTop() > 60) {
      if (!$navbar.hasClass("navbar-fixed-top")) {
        $navbar.addClass("navbar-fixed-top");
      }
    } else {
      $navbar.removeClass("navbar-fixed-top");
    }
  }
  /*-----------------------------------------------------------------------------------*/
  /* 	LOADER
/*-----------------------------------------------------------------------------------*/
  $("#loader")
    .delay(500)
    .fadeOut("slow");
  /*-----------------------------------------------------------------------------------*/
  /*		STICKY NAVIGATION
/*-----------------------------------------------------------------------------------*/
  /*-----------------------------------------------------------------------------------*/
  /*	SERVICE LIST
/*-----------------------------------------------------------------------------------*/
  $(".best-services .list").colio({
    id: "demo_1",
    theme: "black",
    placement: "inside"
  });
  /*-----------------------------------------------------------------------------------*/
  /* 		HOMA MAIN SLIDER
/*-----------------------------------------------------------------------------------*/
  $(".home-slide").flexslider({
    animation: "fade"
  });
  /*-----------------------------------------------------------------------------------*/
  /* 		Parallax
/*-----------------------------------------------------------------------------------*/
  /*-----------------------------------------------------------------------------------*/
  /* 		WORK FILTER
/*-----------------------------------------------------------------------------------*/
  var $container = $(".team-wrap .items");
  $container.imagesLoaded(function() {
    $container.isotope({
      itemSelector: ".item",
      layoutMode: "fitRows"
    });
  });
  $(".filter li a").on("click", function() {
    $(".filter li a").removeClass("active");
    $(this).addClass("active");
    var selector = $(this).attr("data-filter");
    $container.isotope({
      filter: selector
    });
    return false;
  });
  /*-----------------------------------------------------------------------------------*/
  /*	COUNTER
/*-----------------------------------------------------------------------------------*/
  $(".counter .timer").countTo();

  /*-----------------------------------------------------------------------------------*/
  /*	CUBE PORTFOLIO
/*-----------------------------------------------------------------------------------*/
  $(".ajax-work").cubeportfolio({
    filters: "#ajax-work-filter",
    loadMore: "#ajax-loadMore",
    loadMoreAction: "click",
    layoutMode: "grid",
    defaultFilter: "*",
    animationType: "quicksand",
    gapHorizontal: 0,
    gapVertical: 0,
    gridAdjustment: "",
    caption: "zoom",
    displayType: "lazyLoading",
    displayTypeSpeed: 400,
    // singlePage popup
    singlePageDelegate: ".cbp-singlePage",
    singlePageDeeplinking: true,
    singlePageStickyNavigation: true,
    singlePageCounter:
      '<div class="cbp-popup-singlePage-counter">{{current}} of {{total}}</div>',
    singlePageCallback: function(url, element) {
      // to update singlePage content use the following method: this.updateSinglePage(yourContent)
      var t = this;
      $.ajax({
        url: url,
        type: "GET",
        dataType: "html",
        timeout: 10000
      })
        .done(function(result) {
          t.updateSinglePage(result);
        })
        .fail(function() {
          t.updateSinglePage("AJAX Error! Please refresh the page!");
        });
    }
  });
  /*-----------------------------------------------------------------------------------*/
  /* 	TESTIMONIAL SLIDER
/*-----------------------------------------------------------------------------------*/
  $(".single-slide").owlCarousel({
    items: 1,
    autoplay: true,
    loop: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    singleItem: true,
    navigation: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    pagination: true,
    animateOut: "fadeOut"
  });
  $(".testi-two").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1000: {
        items: 2
      }
    }
  });
  $(".blog-slide").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  });
});
/*-----------------------------------------------------------------------------------*/
/*    CONTACT FORM
/*-----------------------------------------------------------------------------------*/
