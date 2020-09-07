'use strict';

function showFirstMessage(text) {
    alert(text);
    let num = 20;
}
// Имя функции должно быть ГЛАГОЛОМ с припиской того, над чем будет совершаться это действие (showFirstMessage - "показать первое сообщение"). Бывают также ф-ции без имени (анонимные), которые применяются здесь и сейчас. В круглых скобках находятся ПАРАМЕТРЫ (данные, аргументы) - их может быть сколько угодно! В фигурных скобках помещаются действия, которые будет выполнять ф-ция.

// Вызов ф-ции:
showFirstMessage("Hello World!");

console.log(num); // в консоле будет выведено undefined, поскольку переменная, объявленная внутри функции, снаружи не видна!!! Это локальная переменная!

let num = 20;
function showFirstMessage(text) {
    alert(text);
    let num = 10;
    console.log(num);
}
showFirstMessage("Hello World!");
console.log(num);
// Когда внутри ф-ции есть обращение к переменной, она сначала ищет эту переменную внутри себя, а уже потом снаружи. Замыкание - это ф-ция со всеми внешними переменными, которые ей доступны.

// Возвращение действия с помощью return
function calc(a,b) {
    return (a + b)
}

console.log(calc(3,4)); // 3+4=7
console.log(calc(8,4)); // 8+4=12

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);
// Главная цель ф-ций - мы вызываем их с разными параметрами и таким образом избавляемся от дублирования кода.

// function declaration - ф-ция, которая объявлена в потоке кода. Особенность: такие ф-ции, как и переменная var, создаются ДО начала кода, т.е. их можно использовать еще до объявления.
console.log(calc(3,4));
console.log(calc(8,4));
function calc(a,b) {
    return (a + b);
} // Результат в консоли не изменится, хоть мы и выполнили вычисления до объявления самой ф-ции.

// function expression - когда мы ф-цию присваиваем в переменную. Эта ф-ция создается тогда, когда код до нее доходит!
let calc = function(a,b) {
    return (a + b);
}
console.log(calc(3,4));
console.log(calc(8,4)); // В данном случае мы можем использовать ф-цию только после того, как мы ее объявили!

// ES6
let calc = (a,b) => a + b // Такую сокращенную запись ф-ции чаще всего можно встретить в обработчике событий
console.log(calc(3,4));
console.log(calc(8,4));

// Свойства - вспомогательные значения
let str = "test";
console.log(str.length); // Тут мы получили описание (длину=4) переменной str, не изменяя ее.

// Методы - вспомогательные ф-ции, которые могут изменять переменную.
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2";
console.log(Math.round(twelve));

let twelve = "12.2px";
console.log(parseInt(twelve)); // В консоле появится 12
console.log(parseFloat(twelve)); // В консоль выведется 12.2

// Callback-функция - ф-ция, которая д.б. выполнена после того, как другая ф-ция завершила свое выполнение.
function first() {
    // Что-то делаем
    setTimeout( function(){
        console.log(1);
    }, 500 );
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}

learnJS("JavaScript", function() {
    console.log("Я прошел 3-й урок!");
}); // Получим: "Я учу JavaScript. Я прошел 3-й урок!"

// Получим то же самое
function done() {
    console.log("Я прошел 3-й урок!");
}

learnJS("JavaScript", done);
