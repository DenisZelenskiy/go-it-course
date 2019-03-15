"use strict";


let userInput;
const numbers = [];
let total = 0;
do {
userInput = prompt(`Введи число`);
let isTrue = !isNaN(userInput) && (userInput !== '') && (userInput !==' ');
if(isTrue){
  const asNumber = Number(userInput);
  numbers.push(asNumber);
} else if (!isTrue) {
  alert(`Введено не число`)
}

}while(userInput !== null);

if(numbers.length > 0){
  for ( i of numbers ){
    total += i;
  }
  alert(`Общая сумма ${total}`);
}
