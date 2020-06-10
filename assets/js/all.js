"use strict";

$(document).ready(function () {
  $(window).scroll(function () {
    var scrollVal = $(this).scrollTop();

    if (scrollVal == 0) {
      $(".logo a").removeClass("text-white").addClass("text-md-dark");
      $(".menu").css("background-color", "transparent");
    } else if (scrollVal > 0) {
      $(".logo a").removeClass("text-md-dark").addClass("text-white");
      $(".menu").css("background", "#0000009A");
    }
  }); //選單

  $('.js-menu').on('click', function () {
    $('.js-nav').toggleClass('active');
  });
  $('.js-nav-removed').on('click', function () {
    $('.js-nav').toggleClass('active');
    $('.collapse').removeClass('show');
  }); //收合

  $('.js-nav-item-product').click(function (e) {
    e.preventDefault();
    $('.js-arrow').toggleClass('active');
  }); // Initialize Swiper 

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    on: {
      resize: function resize() {
        swiper.changeDirection(getDirection());
      }
    }
  });

  function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 200 ? 'vertical' : 'horizontal';
    return direction;
  } // checkout 頁面收合選單


  $(window).resize(function () {
    if ($(window).width() >= 755) {
      $('#multiCollapseCheckout').collapse('show');
    } else {
      $('#multiCollapseCheckout').collapse('hide');
    }
  }); //結帳商品資訊選單

  $('.js-collapse').on('click', function () {
    $('.js-pay').toggleClass('active');
    $('.js-arrow').toggleClass('active');
  }); //結帳頁面聯絡資訊確認

  $('.js-collapse-contact').on('click', function () {
    $('.js-expanded-contact').toggleClass('active');
    $('.js-contact-detail').toggleClass('active');
  });
  $('.js-collapse-ship').on('click', function () {
    $('.js-expanded-ship').toggleClass('active');
    $('.js-ship-detail').toggleClass('active');
  });
});
//# sourceMappingURL=all.js.map
