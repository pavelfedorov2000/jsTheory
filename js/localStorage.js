localStorage.setItem('number', 1); // в скобках 2 аргумента (ключ - значение)

// Вытянуть значение из ключа
console.log(localStorage.getItem('number'));

// Удалить ключ
localStorage.removeItem('number');

// Полность очистить хранилище
//localStorage.clear();

// Пример с инпутами и чекбоксом
window.addEventListener('DOMContentLoaded', function() {
    let checkbox = document.getElementById('rememberMe'),
        change = document.getElementById('change'),
        form = document.getElementsByTagName('form')[0];

    if(localStorage.getItem('isChecked') === 'true') {
        checkbox.checked = true;
    };

    checkbox.addEventListener('click', function() {
        localStorage.setItem('isChecked', true);
    });

    if(localStorage.getItem('bg') === 'changed') {
        form.style.backgroundColor = "#FF4766";
    };

    change.addEventListener('click', function() {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = "#FF4766";
    });

    let persone = {
        name: "Alex",
        age: 25,
        tech: ["mobile", "notebook"]
    };

    let serializedPersone = JSON.stringify(persone); // преобразование в JSON-формат
    localStorage.setItem("Alex", serializedPersone);

    console.log(JSON.parse(localStorage.getItem("Alex"))); // преобразование в обычный формат
});