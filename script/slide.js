$(document).ready(function () {
  $(".jobs__list").slick({
    dots: true,
    arrows: false, // убираем стрелки
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  });
});
