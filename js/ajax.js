let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    //request.open(method, url, async, login, pass);

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'applicationjson', 'charset=utf-8');
    request.send(); // запускает запрос, который идет за ответом к серверу

    // Cв-ва
    // status - содержит http-код ответа сервера (200, 404, 505)
    // statusText - текстовое описание овтета от сервера (okey, not found)
    // responseText / response - текст ответа с сервера
    // readyState - текущее состояние запроса

    request.addEventListener('readystatechange', function() {
        if (request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        } else {
            inputUsd.value = "Что-то пошло не так!";
        }
    })
});

// method: GET (получение данных с сервера) / POST (отпрвка данных на сервер)
// url - путь к серверу
// async - отвечает за асинхронность запроса (по умолчанию true, но если указать false, то пока сервер не ответит мы не сможем взаимодействовать со страницей)