/* // Функция-конструктор - с помощью них можно создавать новые однотипные объекты (пользователи, товары и тд) и их копии
function User(name, id) { // имя ф-ции-конструктора должно начинаться с большой буквы!
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log('Hello!' + this.name);
    }
}

User.prototype.exit = function(name) {
    console.log('Пользователь ' + this.name + ' ушел');
}

let ivan = new User('Ivan', 25),
    alex = new User('Alex', 20);

console.log(ivan);
console.log(alex);

// ES6

'use strict';

class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.human = true;
    }
    hello() {
        console.log(`Hello! ${this.name}`)
    }
    exit() {
        console.log(`Пользователь ${this.name} ушел` )
    }
}
let ivan = new User('Ivan', 25),
    alex = new User('Pavel', 20);

console.log(ivan);
console.log(alex);

ivan.hello;
alex.hello; */

// Ф-ция может вызываться 4-мя способами

// 1) Просто вызов ф-ции - window / undefined
function showThis() {
    console.log(this); // В случае простого вызова ф-ции this - это глобальный объект. Он определяется средой исполнения. В браузере это объект window.
}
showThis(); // эта ф-ция ни к чему не привязана

function showThis(a, b) {
    console.log(this); // получаем window
    function sum() {
        console.log(this); // получаем window
        return this.a + this.b; // получаем NaN
    }
    console.log(sum); // sum не находит переменные  a и b, поэтому и не может выполниться
}
showThis(4, 5); // NaN
showThis(5, 5); // NaN

// Вывод: ф-ция внутри ф-ции все равно своим контекстом считае window

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b; // Когда запускается ф-ция sum, она пытается найти параметры a и и внутри себя, не находит и поднимается на уровень выше, берет параметры из ф-ции showThis, обрабатывает и подставляет в return
    }
    console.log(sum());
}
showThis(4, 5);
showThis(5, 5);

'use strict'; // ES6
function showThis(a, b) {
    console.log(this); // undefined
    function sum() {
        console.log(this); // undefined
        return a + b; // Когда запускается ф-ция sum, она пытается найти параметры a и и внутри себя, не находит и поднимается на уровень выше, берет параметры из ф-ции showThis, обрабатывает и подставляет в return
    }
    console.log(sum());
}
showThis(4, 5);
showThis(5, 5);

// 2) Метод объекта - this = объект

let obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
};
obj.sum();

let obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
        function shout() {
            console.log(this);
        }
        shout(); // эта ф-ция потеряла контекст (она вызвана не как метод объекта, а просто как ф-ция в ф-ции), в консоле будет window
    }
};
obj.sum();

// 3) Конструктор (new) - this = новый созданный объект
// 4) Ручное присваивание this любой ф-ции: указание конкретного контекста - call, apply, bind
let user = {
    name: "John"
};

function sayName(surname) {
    console.log(this);
    console.log(this.name) + surname;
}

// Насильно связываем ф-wb. с данными
console.log(sayName.call(user, 'Smith')); // Для передачи одного аргумента (строка)
console.log(sayName.apply(user, ['Snow'])); // Для передачи нескольких аргументов (массив)

function count(number) {
    return this * number;
}

let double = count.bind(2); // Кажды раз когда будем вызывать ф-wb. double контекстом вызова будет становиться 2
console.log(double(3));
console.log(double(10));

// 1) Просто вызов ф-ции - window / undefined
// 2) Метод объекта - this = объект
// 3) Конструктор (new) - this = новый созданный объект
// 4) Ручное присваивание this любой ф-ции: указание конкретного контекста - call, apply, bind

let btn = document.querySelector('button');
btn.addEventListener('click', function() {
    console.log(this); // контекст вызова - элемент, на котором применяется событие, т.е. <button></button>
    this.style.backgroundColor = 'red';
    function showThis() {
        console.log(this);
    }
    showThis(); // window
})