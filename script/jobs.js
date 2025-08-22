document.addEventListener("DOMContentLoaded", function () {
  // Элементы
  const jobsItems = document.querySelectorAll(".jobs__item");
  const moreBtn = document.querySelector(".jobs__more-btn");
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.querySelector(".modal__close");

  let currentImageIndex = 0;
  const images = Array.from(jobsItems).map((item) => ({
    src: item.querySelector("img").src,
    alt: item.querySelector("img").alt,
  }));

  // Показать еще
  moreBtn.addEventListener("click", function () {
    const hiddenItems = document.querySelectorAll(".jobs__item--hidden");

    if (hiddenItems.length > 0) {
      // Показываем следующие 6 элементов или все оставшиеся
      const itemsToShow = Math.min(6, hiddenItems.length);

      for (let i = 0; i < itemsToShow; i++) {
        hiddenItems[i].classList.remove("jobs__item--hidden");
      }

      // Скрываем кнопку если больше нет элементов
      if (hiddenItems.length <= 6) {
        moreBtn.style.display = "none";
      }
    }
  });

  // Открытие модального окна
  jobsItems.forEach((item, index) => {
    item.addEventListener("click", function () {
      currentImageIndex = index;
      openModal();
    });
  });

  function openModal() {
    modal.style.display = "block";
    modalImage.src = images[currentImageIndex].src;
    modalImage.alt = images[currentImageIndex].alt;
    document.body.style.overflow = "hidden";
  }

  function closeModalFunc() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }

  // Закрытие по клику вне изображения
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModalFunc();
    }
  });

  // Закрытие по ESC
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeModalFunc();
    }
  });

  // Навешиваем обработчики
  closeModal.addEventListener("click", closeModalFunc);
});
