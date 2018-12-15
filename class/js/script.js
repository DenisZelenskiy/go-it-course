'use script'


// Первый элемент в списке
let title = document.querySelector('h2');  //class .class
console.log(title)

// Все элементы с одним названием

let li = [...document.querySelectorAll ('.item')];
console.log(li)

//let arr = array.from(li)

// ========================

// Навигация по DOM
let ul = document.querySelector('.item');

// К дочерним элементам

console.log (ul.children);

// К родительским

console.log (ul.parentElement);

// соседний элемент

console.log (ul.nextElementSibling); //Следующий элемент
console.log (ul.previousElementSibling); // предыдущий элемент

//  Добавление и удаление

// classList

let text = document.querySelector('par');
console.log (text);
// console.log (text.classList.length);  //узнать все классы и количество
// console.log (text.classList.contains('text')); //узнать есть ли такой класс
// text.classList.add('big') // добавить класс
// text.classList.remove('par') // удаление класса
// text.classList.toggle('par'); // проверит и удалит
// text.classList.toggle('big') // проверит и если нет то добавит

// ========================
// атрибуты

// const link = document.querySelector ('link');
// // console.log(lnk);
// // console.log (lnk.hasAttribute('href'));
// // console.log(lnk.getAttribute('href'));
// // console.log(lnk.href);
// // link.setAttribute('title','super link')
// // link.setAttribute('id' , 'in from js')
// // link.removeAttribute('title')


// создание обьектов

let mainTitle = document.createElement('h1');
console.log(mainTitle);
mainTitle.classList.add(.main-title);
console.log()
mainTitle.textContent = 'I am Title creater from js';

// Вставить заголовок

let conteiner = document.querySelector('div');
conteiner.append(mainConteiner);
conteiner.prepend(mainTitle);
conteiner.Before(mainT)

