'use strict';

// document - сама верстка
// window = document + весь интерфейс браузера
// screen - весь видимый монитор (исп-ся редко)

let box = document.querySelector('box');
    btn = document.querySelector('button');

let width = box.clientWidth,
    // ширина контента без учета вертикальной полосы прокрутки и границы
    height = box.clientHeight;
    // высота контента без учета горизонтальной полосы прокрутки и границы

console.log(width);
console.log(height;

let width = box.offsetWidth,
    // ширина эл-та включая верт полосу прокрутки и границу
    height = box.offsetHeight;
    // высота контента с учетом горизонтальной полосы прокрутки и границы

let width = box.scrolltWidth,
    height = box.scrollHeight;
    // высота всего контента с прокруткой.
    // однако ширина самой полосы прокрутки не учитывается!

btn.addEventListener('click', function() {
    // при клике на кнопку появится весь контент на всю его высоту
    box.style.height = box.scrollHeight + 'px';
    console.log(box.scrollTop);
     // получение высоты уже прокрученной части
    box.scrollTop = 0; // перемещаемся в самый верх
    box.scrollHeight = 1500; // ничего не изменится
}); 
// Из всех параметров эл-та изменить мы можем только 2:
// srcollTop и scrollLeft

// в js:
// left - от левой границы браузера до левой границы элемента
// right - от левой границы браузера до правой границы элемента
// top - от верхней границы браузера до верхней границы элемента
// bottom - от верхней границы браузера до нижней границы элемента

// Получение координат элемента
box.getBoundingClientRect(); // метод возвращает 8 параметров:
// top
// right
// bottom
// left
// width
// height
// x
// y
box.getBoundingClientRect().left; // получение свойства метода

document.documentElement.clientWidth; // ширина документа
document.documentElement.scrollTop;

// перемещение по координатам относительно текущего положения
scrollBy(x, y);

// перемещение на 200px вниз
scrollBy(0, 200);

// перемещение в определенное место (согласно координатам) на странице
scrollTo(x, y);
scrollTo(0, 200); // 200px сверху нашей страницы
