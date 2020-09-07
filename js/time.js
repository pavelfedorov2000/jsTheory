'use strict';

setTimeout(func, delay);

function sayHello() {
    alert('Hello World');
}

setTimeout(sayHello, 3000); // через 3с (3000 мс) на сайте появится модальное окно с надписью Hello World

let timerId = setTimeout(sayHello, 3000);
clearTimeout(timerId); // остановка действия таймера, alert не появится через 3с

let timerId = setInterval(sayHello, 3000); // повтор ф-ции через каждые 3с
clearTimeout(timerId);

function sayHello() {
    console.log('Hello World');
}

// Минус - ф-ция выполняется дольше, чем интервал / задержка, которую мы ставим! Для решения проблемы существует рекурсивная ф-ция (вызывает сама себя)

let timerId = setTimeout(function log() {
    console.log("Hello");
    setTimeout(log, 2000);
});

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

function myAnimation() {
    let pos = 0; // начальная позиция

    let id = setInterval(frame, 10);
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

// Делегирование - работа с родителем путем назначения ф-ции для его потомков

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    if (event.target && event.target.tagName == 'BUTTON') {
        console.log("Hello!");
    }
    // 1) event.target - мы проверяем, действительно ли есть то, куда мы кликнули. Здесь может возникнуть ошибка, если мы в ф-ции не передали аргумент event, тогда это условие просто не выполнится.
    // 2) действительно ли то куда мы кликнули имеет тег button
});

btnBlock.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('first')) {
        console.log("Hello!");
    }
});

btnBlock.addEventListener('click', function(event) {
    if (event.target && event.target.matches('button.first')) { // ищем определенную кнопку с определенным классом
        console.log("Hello!");
    }
});