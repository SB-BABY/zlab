$(document).ready(function () {


  $(".sertificate__list").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 150000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // Модальное окно для сертификатов
  const modal = $("#certificateModal");
  const modalImg = $(".modal__img");

  // Открытие модального окна
  $(".sertificate__item").on("click", function () {
    const imgSrc = $(this).find("img").attr("src");
    const imgAlt = $(this).find("img").attr("alt");

    modalImg.attr("src", imgSrc);
    modalImg.attr("alt", imgAlt);
    modal.addClass("active");
    $("body").css("overflow", "hidden");
  });

  // Закрытие модального окна
  $(".modal__overlay, .modal__close").on("click", function () {
    modal.removeClass("active");
    $("body").css("overflow", "auto");
  });

  // Закрытие по ESC
  $(document).on("keydown", function (e) {
    if (e.key === "Escape" && modal.hasClass("active")) {
      modal.removeClass("active");
      $("body").css("overflow", "auto");
    }
  });
});
