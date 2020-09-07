'use strict';

// Для того, чтобы следить за элементами HTML, их нужно сначала объявить

let btn = document.querySelectorAll('button'); // Получили псевдомассив из кнопок
btn[0].onclick = function() { // Для первой кнопки назначаем что будет происходить при событии "клик"
    alert('Вы нажали первую кнопку');
};

// В модальном окне будет выведено только это сообщение, первое будет забыто!
btn[0].onclick = function() { // Для первой кнопки назначаем что будет происходить при событии "клик"
    alert('Вы опять нажали первую кнопку');
};

btn[0].addEventListener('click', function() {
    alert('Вы нажали первую кнопку');
    alert('Вы опять нажали первую кнопку');
});
// Более новая ф-ция не перекрыла старую. Оба сообщения будут выведены

btn[0].addEventListener('mouseenter', function() { // mouseenter - наведение мышью на элемент страницы
    alert('Вы навели на первую кнопку');
});

btn[0].addEventListener('click', function(event) {
    console.log('Произошло событие: ' + event.type + ' на элементе' + event.target);
});

btn[0].addEventListener('click', function(event) {
    let target = event.target;
    target.style.display = 'none'; // При клике по первой кнопке она исчезнет со страницы
});

let wrap = document.querySelector('.wrapper'); // Обертка для первой кнопки
wrap.addEventListener('click', function() {
    console.log('Произошло событие: ' + event.type + ' на элементе' + event.target);
});

// Всплытие событий - это когда обработчик событий срабатывает сначала на самом вложенном объекте, затем на родителе (если есть), затем выше и выше

// Отмена стандартного поведения браузера

let link = document.querySelector('a');
link.addEventListener('click', function() {
    event.preventDefault(); // теперь при клике по ссылке мы никуда переходить не будем
});

btn.forEach(function(item) { // item - каждая кнопка
    item.addEventListener('mouseleave', function() {
        console.log('Вы вышли!');
    });
});

