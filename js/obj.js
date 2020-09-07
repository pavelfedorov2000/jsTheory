// Объекты
let options = {
    width: 1024,
    height: 1024,
    name: "test"
    //bool: false
};
console.log(options.name); // Вывод в консоль свойства name объекта options
options.bool = false; // то же самое, если мы в объекте добавим св-во bool: false

// В объекте могут находится св-ва-объекты в свою очередь уже со своими свойствами
options.colors = {
    border: "black",
    bg: "red"
}
delete(options.bool); // Удаление св-ва bool у объекта options
console.log(options);


let options = {
    width: 1024,
    height: 1024,
    name: "test"
    //bool: false
};
for (let key in options) { // Перебор св-в объекта options
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options).length); // Кол-во св-в у объекта options

// В объект можно записывать и ф-ции, тогда эти ф-ции становятся МЕТОДАМИ объекта!


// Динамическая типизация - это возможность одного типа данных превращаться в другой.

// Превращение в строку (to string)
// 1 способ
console.log(typeof(String(4)));
// 2 способ
// Если что-то сложить со строкой, то получится все равно строка (конкатенация)
console.log("ww" + 5); // Получим строку ww5
console.log(typeof("ww" + 5)); // Убеждаемся, что в рез-те сложения строки и числа получаем тип данных строка - string.
console.log('hhtps://vk.com/catalog/' + 5);

// Преобразование в число (to number)
// 1 способ
console.log(typeof(Number('5'))); //получаем тип данных number
// 2 способ (унарный плюс)
console.log(typeof(+'5'));
console.log(typeof(5 + +'5')); // первый плюс - знак сложения, а второй - для преобразования строки в число
// 3 способ
console.log(typeof(parseInt('15px', 10)));

let ans = +prompt("Hello?", '');

// FALSE
// 0, '', null, undefined, NaN
// Все остальное это TRUE
// Строка с пробелом (' ') - это уже не пустая строка!!! TRUE

let switcher = null;
// Условие ниже не выполнится, т.к. переменная содержит ложь!
if (switcher) {
    console.log("Working..")
}

switcher = 1; // Теперь уже значение переменной переопределено на правду
// Сейчас условие выполнится, т.к. переменная содержит правду
if (switcher) {
    console.log("Working..")
}

// Преобразование в логический тип данных (to boolean)
// 1 способ
console.log(typeof(Boolean('5')));
// 2 способ
console.log(typeof(!!'5'));