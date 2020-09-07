'use strict';

// УСЛОВИЯ
if (2*4 == 8) {
    console.log('Верно!');
} else {
    console.log('Неверно!');
}

let num = 50;
if (num < 49) {
    console.log('Неверно!')
} else if (num > 100) { // Вложенное условие
    console.log('Много!')
} else {
    console.log('Верно!') 
}

(num == 50) ? console.log('Верно!') : console.log('Неверно!'); // Тернарный оператор, поскольку 3 аргумента. Он сокращает написанное выше (10-17 строки). Если 2, то бинарный, 1 - унарный.


switch (num) { // Множество условий
    case num < 49:
        console.log('Неверно!');
        break;
    case num > 100:
        console.log('Много!');
        break;
    case num > 80:
        console.log('Много!');
        break;
    case 50:
        console.log('Верно!')
        break;
    default: // По умолчанию
        console.log('Что-то пошло не так!');
        break;
}

// ЦИКЛЫ

// 1) while
let num = 50;
while (num < 55) { 
    console.log(num);
    num++;
} // Пока num < 55 будут выводится числа на единицу больше предыдущего (начиная с 50: 51,52,53,54)

// 2) do ... while
let num = 50;
do {
    console.log(num);
    num++;
}
while (num < 55); // Делай то, пока...

// 3) for
for (let i = 1; i < 8; i++) {
    console.log(i);
} // В консоль выведутся числа от 1 до 8

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        break
    }
    console.log(i);
} // В консоль выведутся числа от 1 до 5

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue
    }
    console.log(i);
} // В консоль выведутся числа от 1 до 8, КРОМЕ 6