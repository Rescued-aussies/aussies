(function($) {
  'use strict';

  /*-------------------------------------------------------------------------------
  Preloader
	-------------------------------------------------------------------------------*/
  $(window).on('load', function() {
    $('.ghive_preloader').addClass('hidden');
  });

  /*-------------------------------------------------------------------------------
  Aside Menu
	-------------------------------------------------------------------------------*/
  $(".aside-trigger-right").on('click', function() {
    var $el = $(".ghive_aside-right")
    $el.toggleClass('open');
    if ($el.hasClass('open')) {
      setTimeout(function(){
        $el.find('.sidebar').fadeIn();
      }, 300);
    }else{
      $el.find('.sidebar').fadeOut();
    }
  });

  $(".aside-trigger-left").on('click', function() {
    $(".ghive_aside-left").toggleClass('open');
  });

  $(".ghive_aside .menu-item-has-children > a").on('click', function(e) {
    var submenu = $(this).next(".sub-menu");
    e.preventDefault();

    submenu.slideToggle(200);
  });

  /*-------------------------------------------------------------------------------
  Custom scroll bars
  -------------------------------------------------------------------------------*/
  $('.ghive_dropdown-scroll').slimScroll({
    height: 300,
    position: "right",
    size: "5px",
    color: "#dcdcdc",
    opacity: 1,
    wheelStep: 5,
    touchScrollStep: 50,
  });

  /*-------------------------------------------------------------------------------
  Sticky Header
	-------------------------------------------------------------------------------*/
  var header = $(".can-sticky");
  var headerHeight = header.innerHeight();

  function doSticky() {
    if (window.pageYOffset > headerHeight) {
      header.addClass("sticky");
    } else {
      header.removeClass("sticky");
    }
  }
  doSticky();

  /*-------------------------------------------------------------------------------
  Tooltips
  -------------------------------------------------------------------------------*/
  $('[data-toggle="tooltip"]').tooltip();

  $('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });

  /*-------------------------------------------------------------------------------
  Magnific Popup
  -------------------------------------------------------------------------------*/
  $('.popup-youtube').magnificPopup({
    type: 'iframe'
  });
  $('.popup-vimeo').magnificPopup({
    type: 'iframe'
  });
  $('.popup-video').magnificPopup({
    type: 'iframe'
  });
  $('.gallery-thumb').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true
    },
  });

  /*-------------------------------------------------------------------------------
  ion Range Sliders (Price filter)
  -------------------------------------------------------------------------------*/
  $(".js-range-slider").ionRangeSlider({
    skin: "round"
  });

  $('.ghive_product-single-thumb')
    .wrap('<span style="display:inline-block" class="ghive_product-single-zoom"></span>')
    .css('display', 'block')
    .parent()
    .zoom();

  /*-------------------------------------------------------------------------------
  Countdown
  -------------------------------------------------------------------------------*/
  $(".ghive_countdown-timer").each(function(){
    var $this = $(this);
    $this.countdown($this.data('countdown'), function(event) {
      $(this).text(
        event.strftime('%D days %H:%M:%S')
      );
    });
  });

  /*-------------------------------------------------------------------------------
  Clients Slider
  -------------------------------------------------------------------------------*/
  $(".ghive_clients-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Related Pet Care  Slider
  -------------------------------------------------------------------------------*/
  $(".ghive_related-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Team members slider
  -------------------------------------------------------------------------------*/
  $(".ghive_members-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Employers slider
  -------------------------------------------------------------------------------*/
  $(".ghive_employers-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Testimonials Slider
  -------------------------------------------------------------------------------*/

  $(".ghive_testimonials-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    autoplay: true,
  });

  /*-------------------------------------------------------------------------------
  Testimonials Slider (Home v2)
  -------------------------------------------------------------------------------*/
  $(".ghive_testimonials-slider-02").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $(".ghive_testimonials-slider-2").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  /*-------------------------------------------------------------------------------
  Masonry
  -------------------------------------------------------------------------------*/
  $('.masonry').imagesLoaded(function() {
    var isotopeContainer = $('.masonry');
    isotopeContainer.isotope({
      itemSelector: '.masonry-item',
    });
  });

  /*-------------------------------------------------------------------------------
  Add / Subtract Quantity
  -------------------------------------------------------------------------------*/
  $(".qty span").on('click', function(){
    var qty = $(this).closest('.qty').find('input');
    var qtyVal = parseInt(qty.val());
    if($(this).hasClass('qty-add')){
      qty.val(qtyVal + 1);
    }else{
      return qtyVal > 1 ? qty.val(qtyVal - 1) : 0;
    }
  })

  /*-----------------------------------
    Back to Top
    -----------------------------------*/
  $('.ghive_back-to-top').on('click', function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
    return false;
  })

  //On scroll events
  $(window).on('scroll', function() {

    doSticky();

  });

  //On resize events
  $(window).on('resize', function() {


  });

})(jQuery);
