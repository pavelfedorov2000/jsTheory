'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате	YYYY-MM-DD', '');
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let money, time;

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + ' - ' + appData[key]);
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');
        
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done")
            appData.expenses[a] = b; //Пара ключ - значение
        } else {
            i = i - 1;
        }
    };
}
chooseExpenses();

//Ф-ция для определения необязательных расходов
function chooseOptExpenses() {
    for (let i = 0; i <= 3; i++) {
        let c = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = c;
        console.log(appData.optionalExpenses);
    }
},

/* let i = 0;
while (i < 2) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done")
        appData.expenses[a] = b; //Пара ключ - значение
    } else {
        console.log('bad result');
        i--;
    }
    i++;
}

let i = 0;
do {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');
    
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50) {
        console.log("done")
        appData.expenses[a] = b; //Пара ключ - значение
    } else {
        console.log('bad result');
        i--;
    }
    i++;
}
while (i < 2); */

//Расчет дневного бюджета
function detectDayBudget() {
    appData.moneyPerDay  = (appData.budget / 30).toFixed();//Округляем дневной бюджет до целого значения
    alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}
detectDayBudget();

//Расчет уровня достатка
function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Cредний уровень достатка");
    } else if(appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

chooseIncome: function() {
    let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую", '');
    if (typeof(items) != "string" || items == '' || typeof(items) == null) {
        console.log("Вы ввели некорректные данные или не ввели их вовсе");
    } else {
        appData.income = items.split(', ');
        appData.income = items.push(prompt("Может что-то еще?"));
        appData.income = items.sort();
    }

    appData.income.forEach(function(itemmassive,i) {
        alert("Способы доп. заработка: " + (i+1) + ' - ' + itemmassive);
    });
}
