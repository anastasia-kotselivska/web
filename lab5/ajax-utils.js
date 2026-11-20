(function (global) {

  // Створюємо об'єкт ajaxUtils
  const ajaxUtils = {};

  // Функція створення XMLHttpRequest
  function getRequestObject() {
    if (global.XMLHttpRequest) {
      return new XMLHttpRequest();
    } else {
      global.alert("Ajax is not supported!");
      return null;
    }
  }

  // Функція надсилання AJAX GET-запиту
  ajaxUtils.sendGetRequest = function (requestUrl, responseHandler, isJsonResponse) {

    let request = getRequestObject();

    if (!request) {
      return;
    }

    // Відстеження зміни стану запиту
    request.onreadystatechange = function () {
      handleResponse(
        request,
        responseHandler,
        isJsonResponse
      );
    };

    // Налаштування GET-запиту
    request.open("GET", requestUrl, true);

    // Надсилання запиту
    request.send(null);
  };

  // Функція обробки відповіді сервера
  function handleResponse(request, responseHandler, isJsonResponse) {

    // Перевіряємо, чи завершено запит
    if (request.readyState === 4) {

      // Перевіряємо успішність запиту
      if (request.status === 200) {

        if (isJsonResponse === undefined) {
          isJsonResponse = true;
        }

        let response = request.responseText;

        // Перетворюємо JSON-текст на об'єкт
        if (isJsonResponse) {
          response = JSON.parse(response);
        }

        // Передаємо результат обробнику
        responseHandler(response);
      }
    }
  }

  // Робимо ajaxUtils доступним в інших файлах
  global.ajaxUtils = ajaxUtils;

})(window);
