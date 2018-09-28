"use strict";

let userInput;
const numbers = [];
let total = 0;
const noNumber = "Введено не число!";
const isTrue = numbers.length > 0 ? true : false;

// do {
//     userInput = prompt ('Введите число');
//     const isValidInput = !isNaN(userInput) && (userInput !== "") && (userInput !== " ");
//     switch (true) {
//         case userInput === null:
//         const isTrue = numbers.length > 0 ? true : false;
//         if (isTrue){
//             for (let item of numbers) {
//                 total += item
//             }alert (`Сумма чисел равна: ${total}`)
//         }
//         case isValidInput:
//         numbers.push(Number(userInput));
//         break
//         default:
//         alert ('Введене не число')
//     }
// }while (userInput !== null);

do {
  userInput = prompt("Введите число");
  const isValidInput =
    !isNaN(userInput) && userInput !== "" && userInput !== " ";
  if (isValidInput) {
    numbers.push(Number(userInput));
  } else if (isTrue) {
    for (let item of numbers) {
      total += item;
    }
    alert(`Сумма чисел равна: ${total}`);
  } 
} while (userInput !== null);
 console.log (total)