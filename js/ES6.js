'use strict';

// Интерполяция

let name = "Pavel",
    age = 20,
    mail = 'pashok05_01@mail.ru';

document.write('Пользователю ' + name + ' ' + age + ' лет. Его почтовый адрес:  ' + mail); // неудобно!

// Используем интерполяцию
document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`); // Убрали плюсы и обычные кавычки, в начале и конце строки меняем на косые кавычки

// let & const

function makeArray() {
    var items = []; // коробочка с пустым массивом

    for (let i = 0; i < 10; i++) { // Когда используем в цикле переменную с помощью var, она создается одна на весь цикл, т.е. в каждой итерации она не создается заново. 
        var item = function() {
            console.log(i); // на каждом шаге итерации в консоль будет выводиться i
        };
        items.push(item); // в пустой массив будут добавляться новые значения из цикла 
    }

    return items;
}

var arr = makeArray(); // помещаем в переменную вызов ф-ции

arr[1]();
arr[3]();
arr[7]();

// Стрелочные ф-ции
// Особенности:
// 1) анонимность
// 2) нельзя управлять обработчиком событий
// 3) нельзя запускать ф-цию внутри себя
// 4) не имеет своего контекста вызова, она берет его у родителя
// Чаще всего используются в addEventListener, setTimeout, setInterval, ajax
let fun = () => {
    console.log(this); // имеет контекст вызова window
};
fun();

let obj = {
    number: 5,
    sayNumber: function() {
        let say = () => {
            console.log(this);
        };
        say();
    }
};

obj.sayNumber();

let btn = document.querySelector('button');
btn.addEventListener('click', function() {
    let show = () => {
        console.log(this); // контекстом вызова будет <button></button>
    };
    show();
});

// Параметры по умолчанию
// ES5
function calcOrDouble(number, basis) {
    basis = basis || 2; // если есть значение basis, то оно передается в функцию, если же нет, то подставляется 2
    console.log(number*basis);
}
calcOrDouble(3,5); // 3*5 = 15
calcOrDouble(6); // 6*2 = 12

// ES6
function calcOrDouble(number, basis = 2) {
    console.log(number*basis);
}


// Классы
class Rectangle { // название с Большой буквы!!!
    constructor(height, width) {
        this.height = height;
        this.width = width;
    } // запятые между методами ставить не нужно
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 10);

console.log(square.calcArea()); // 10*10 = 100




// Spread-операторы (операторы разварота) - разворачивают массивы и превращают их просто в какие-то наборы данных
let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a,b,c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c); // 2 + 5 + 7 = 14
}
let numbers = [2, 5, 7];

log(...numbers); // 2 5 7