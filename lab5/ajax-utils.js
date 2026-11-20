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
  ajaxUtils.sendGetRequest = function (requestUrl, responseHandler, isJsonResponse, errorHandler) {
    let request = getRequestObject();
    if (!request) {
      return;
    }
    // Відстеження зміни стану запиту
    request.onreadystatechange = function () {

      handleResponse(
        request,
        responseHandler,
        isJsonResponse,
        errorHandler
      );
    };

    // Налаштування GET-запиту
    request.open("GET", requestUrl, true);

    // Надсилання запиту
    request.send(null);
  };

  // Функція обробки відповіді сервера
  function handleResponse( request, responseHandler, isJsonResponse, errorHandler) {
    // Перевіряємо, чи завершено запит
    if (request.readyState === 4) {
      // Перевіряємо успішність запиту
      if (request.status === 200) {
        if (isJsonResponse === undefined) {
          isJsonResponse = true;
        }
        try {
          let response = request.responseText;
          // Перетворюємо JSON-текст на об'єкт
          if (isJsonResponse) {
            response = JSON.parse(response);
          }
          // Передаємо результат обробнику
          responseHandler(response);
        } catch (error) {
          if (errorHandler) {
            errorHandler(error);
          }
        }
      } else {
        // Обробка помилки сервера
        if (errorHandler) {
          errorHandler(
            new Error(
              "Помилка сервера: " + request.status
            )
          );
        }
      }
    }
  }
  // Робимо ajaxUtils доступним в інших файлах
  global.ajaxUtils = ajaxUtils;
  
})(window);
