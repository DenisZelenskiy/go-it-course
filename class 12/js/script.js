"use strict";

// const calcGrades = (function() {
//   // Переменные и методы внутри будут приватными

//   const grades = [80, 45, 75, 64, 53, 82];

//   const calcAverage = () => {
//     const total = grades.reduce((acc, grade) => acc + grade, 0);

//     return `Average grade is ${Math.round(total / grades.length)}.`;
//   };

//   const failingGrades = () => {
//     const failingGrades = grades.filter(item => item < 70);

//     return "You failed " + failingGrades.length + " times.";
//   };

//   // явно укажем что мы хотим открыть и под какими именами

//   return {
//     average: calcAverage
//   };
// })();

// console.log(calcGrades);

//==============================задание 1


// const calcGrades = (function() {
//     const grades = [80, 45, 75, 64, 53, 82];

//     const calcAverage = () => {
//         const total = grades.reduce((acc, el) => acc + el, 0);
//         return `сумма ${total}`;
//     };

//     return {
//         average: calcAverage
//     }
// })

// console.log(calcGrades.average());

//================================================ ЗАдание 2 

// const globalVar = {};

// (function(gv) {
//   // Приватная функция, доступная только внутри замыкания

//   const privateFn = () => console.log("Shhhh, this is private!");

//   const movieFetch = () => {
//     return fetch(url)
//       .then(response => response.json())

//       .then(data => data.sort());
//   };

//   // Откроем методы через интерфейс globalVariable,

//   // закрыв имплементацию внутри замыкания

//   gv.books = () => {
//     privateFn();

//     console.log("Hello, I am a global variable");
//   };

//   (gv.music = ["sdfsd", "sfsdfsdf0", "sfsdfsdf"]),
//     (gv.movies = () => {
//       movieFetch();
//     });
// })(globalVar);

// console.log("global", globalVar);

// console.log(globalVar.music);

const globalVar = {};

(function(gv) {
    const sm = () => {
        
    }
})