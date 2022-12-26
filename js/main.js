(function ($) {
  "use strict";
  $(document).on("ready", function () {
    //sliders
    $(".header_slider").slick({
      dots: true,
      arrows: false,
      infinite: false,
      autoplay: false,
      vertical: false,
      verticalSwiping: false,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
    $(".js-preloader").preloadinator({
      minTime: 500,
    });
  });
})(jQuery);
