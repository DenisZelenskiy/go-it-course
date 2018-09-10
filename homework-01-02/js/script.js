"use strict";

let userInput;
const numbers = [];
let total = 0;

do {
    userInput = prompt ('Введите число');
    const isValidInput = !isNaN(userInput) && (userInput !== "") && (userInput !== " ");
    switch (true) {
        case userInput === null:
        const isTrue = numbers.length > 0 ? true : false;
        if (isTrue){
            for (let item of numbers) {
                total += item
            }alert (`Сумма чисел равна: ${total}`)
        }
        case isValidInput:
        numbers.push(Number(userInput));
        break
        default:
        alert ('Введене не число')
    }
}while (userInput !== null);

