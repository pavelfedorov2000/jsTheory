window.addEventListener('load'); // Говорим js, что сейчас страница будет загружаться

// Но намного лучше использовать конструкцию ниже
window.addEventListener('DOMContentLoaded', function() { // Событие срабатывает тогда, когда полностью загрузилась DOM-структура документа
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');
    // Фунция, скрывающая содержимое табов
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1); // скрываем все элементы кроме первого (0)!
    
    // Противоположная ф-ция, показывающая содержимое табов
    function showTabContent(b) {
        if (tabContent[b]).classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        } // Если один из 4-х содержимых табов имеет класс hide (т.е. спрятан), то мы убираем этот класс hide и добавляем  класс show для отображения на странице
    }

    info.addEventListener('click', function(event)) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) { // перебор табов
                if (target == tab[i]) { // если то место, где мы нажали, строго совпадает с определенным табом (из перебираемых), то выполнятся следующие действия:
                    hideTabContent(0); // скрываем все табы
                    showTabContent(i); // показываем то содержимое, которое совпадает с нажатым табом
                    break;
                }
            }
        }
    }
}); 