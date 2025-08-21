// Валидация формы
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const phoneInput = document.getElementById("phone");
  const messageTextarea = document.getElementById("message");
  const messageCounter = document.getElementById("message-counter");

  // Маска для телефона
  phoneInput.addEventListener("input", function (e) {
    // Удаляем все нецифры
    let value = e.target.value.replace(/\D/g, "");

    // Добавляем +7 в начало
    if (!value.startsWith("7") && !value.startsWith("+7")) {
      value = "7" + value;
    }

    // Форматируем номер
    if (value.length > 0) {
      let formattedValue = "+7 (";

      if (value.length > 1) {
        formattedValue += value.substring(1, 4);
      }
      if (value.length >= 4) {
        formattedValue += ") " + value.substring(4, 7);
      }
      if (value.length >= 7) {
        formattedValue += "-" + value.substring(7, 9);
      }
      if (value.length >= 9) {
        formattedValue += "-" + value.substring(9, 11);
      }

      e.target.value = formattedValue;
    }
  });

  // Счетчик символов для сообщения
  messageTextarea.addEventListener("input", function () {
    const length = this.value.length;
    messageCounter.textContent = length;

    if (length > 500) {
      this.value = this.value.substring(0, 500);
      messageCounter.textContent = 500;
    }
  });

  // Валидация формы
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let isValid = true;

    // Валидация имени
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("name-error");
    if (!nameInput.value.trim()) {
      nameInput.classList.add("error");
      nameError.textContent = "Пожалуйста, введите ваше имя";
      isValid = false;
    } else {
      nameInput.classList.remove("error");
      nameError.textContent = "";
    }

    // Валидация телефона
    const phoneError = document.getElementById("phone-error");
    const phoneValue = phoneInput.value.replace(/\D/g, "");
    if (phoneValue.length !== 11) {
      phoneInput.classList.add("error");
      phoneError.textContent = "Пожалуйста, введите корректный номер телефона";
      isValid = false;
    } else {
      phoneInput.classList.remove("error");
      phoneError.textContent = "";
    }

    // Валидация услуги
    const serviceSelect = document.getElementById("service");
    const serviceError = document.getElementById("service-error");
    if (!serviceSelect.value) {
      serviceSelect.classList.add("error");
      serviceError.textContent = "Пожалуйста, выберите услугу";
      isValid = false;
    } else {
      serviceSelect.classList.remove("error");
      serviceError.textContent = "";
    }

    if (isValid) {
      // Отправка формы
      alert("Форма успешно отправлена!");
      form.reset();
      messageCounter.textContent = "0";
    }
  });

  // Сброс ошибок при изменении полей
  form.addEventListener("input", function (e) {
    if (
      e.target.matches(
        ".online__form-input, .online__form-select, .online__form-textarea"
      )
    ) {
      e.target.classList.remove("error");
      const errorElement = document.getElementById(e.target.id + "-error");
      if (errorElement) {
        errorElement.textContent = "";
      }
    }
  });
});
