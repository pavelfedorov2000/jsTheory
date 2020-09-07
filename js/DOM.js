// DOM - Documeте Object Model (объектная структура документа)

let box = document.getElementById('box'); // Метод - получение элемента по его индивидуальному идентификатору
console.log(box); // в консоль выведется div с id = "box"

let btn = document.getElementsByTagName('button'); // Elements (множ число) - значит мы получим псевдомассив (кнопок)
console.log(btn);
console.log(btn[0]); // Получаем первый элемент (кнопку)

let circle = document.getElementsByClassName('circle'); // Класс пишем без точки (тк в самом названии метода есть указание что ищем класс)!
console.log(circle[2]); // Получаем третий элемент

let heart = document.querySelectorAll('.heart'); // Получение всех элементов, имеющих определенный класс
console.log(heart);

// Преимущество 4-го метода - вложенность
let heart = document.querySelectorAll('.wrapper .heart');

let oneHeart = document.querySelector('.heart');
console.log(oneHeart); // Получение первого элемента на странице по селектору

let wrapper = document.querySelector('.wrapper');

// Действия с элементами на странице
box.style.backgroundColor = 'blue'; // Изменение фонового цвета

btn[1].style.borderRadius = '100%'; // Превратили вторую кнопку в овальную

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = 'blue';
}
// другой способ (предпочтительнее)
heart.forEach(function(item, i, hearts) { // вторые 2 аргумента ф-ции необязательны!
    item.style.backgroundColor = 'blue';
});

// Создание нового элемента
let div = document.createElement('div');
console.log(div);

div.classList.add('black'); // Добавление стиля уже созданному элементу

document.body.appendChild(div); // Вставление элемента в конец родительского (в данном случае в конец body)

wrapper.appendChild(div);

document.body.insertBefore(div, circle[0]); // Для этого метода обязательно нужно указывать 2 параметра: что вставляем и перед чем вставляем. Если не указать 2-ой аргумент, то будет аналогично команде appendChild!

document.body.removeChild(circle[1]); // Удалили 2-ой элемент (желтый круг)

wrapper.removeChild(heart[1]); // Удалили 2-е сердечко

document.body.replaceChild(btn[1], circle[1]); // 1-й аргумент - то чем заменяем, а 2-й - что заменяем

let text = document.createTextNode('Тут был я');
console.log(text);

div.innerHTML = 'Hello World!'; // Добавление текста в элемент
div.innerHTML = '<h1>Hello World!</h1>'; // Добавление тега 
div.textContent = 'Hello World!'; // добавление текста аналогично innerHTML, но с безопасностью для страницы!

