/*
   INIT WOW
*/

new WOW().init();

/*
   INIT COUNTUP
*/

// Numbers
$(".counter").countUp({
   time: 1000,
});

/*
   INIT SWIPERJS
*/

// Feedback Slider
var imgSlider = new Swiper(".feedback__client", {
   slidesPerView: 3,
   spaceBetween: 10,
   centeredSlides: true,
   loop: true,
   speed: 3000,
   autoplay: true,
   freeMode: true,
});

var commentSlider = new Swiper(".feedback__text", {
   spaceBetween: 10,
   loop: true,
   speed: 3000,
   autoplay: {
      delay: 3000,
   },
   thumbs: {
      swiper: imgSlider,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});

/*
   INIT SWIPERJS 
*/

// Blog Slider
var blogSlider = new Swiper(".blog__content", {
   slidesPerView: 3,
   spaceBetween: 30,
   loop: true,
});

/*
   SCROLL TO TOP
*/
$(window).scroll(function () {
   if ($(this).scrollTop() > 50) {
      $(".scrollToTop").fadeIn();
   } else {
      $(".scrollToTop").fadeOut();
   }
});

$(".scrollToTop").click(function () {
   $("html, body").animate({ scrollTop: 0 }, 1000);
   return false;
});

/*
   PORTFOLIO GALLERY
*/
lightGallery(document.getElementById("animated-thumbnails"), {
   selector: ".portfolio-img",
   plugins: [lgZoom, lgThumbnail, lgAutoplay, lgFullscreen, lgShare],
   alignThumbnails: "left",
   loop: true,
   allowMediaOverlap: true,
   toggleThumb: true,
   showZoomInOutIcons: true,
   actualSize: false,
   exThumbImage: "data-exthumbimage",
});
