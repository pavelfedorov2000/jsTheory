let options = {
    width: 1366,
    height: 768,
    background: 'red',
    font: {
        size: '16px',
        color: '#fff'
    }
};

console.log(JSON.parse(JSON.stringify(options)));

// Главное отличие JSON-формата: все свойства записываются в ДВОЙНЫХ кавычках
// JSON.stringify() - отправка на сервер
// JSON.parse() - обратная операция