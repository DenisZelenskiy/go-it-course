/*
  Напишите функцию checkNumberType(num)
  
  Функция получает число num как аргумент и возвращает 
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки

const checkNumberType = function (num){
    const result = !(num % 2) ? 'Even': 'Odd';
    return result;
  }
  console.log( checkNumberType(2) ); // 'Even'
  
  console.log( checkNumberType(46) ); // 'Even'
  
  console.log( checkNumberType(3) ); // 'Odd'
  
  console.log( checkNumberType(17) ); // 'Odd'

  

  //----2


  /*
  Напишите функцию formatString(str)
  
  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее. 
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего 
    возвращает укороченную версию.
*/

function formatString(str) {
    const strngLength = str.length;
    if (strngLength > 40) {
      const stringShort = str.slice (0,39) + '...';
      return stringShort ;
    }else {
      return str;
    }
  }
  
  // Вызовы функции для проверки
  console.log(
    formatString("Curabitur ligula sapien, tincidunt non.")
  ); // вернется оригинальная строка
  
  console.log(
    formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
  ); // вернется форматированная строка
  
  console.log(
    formatString("Curabitur ligula sapien.")
  ); // вернется оригинальная строка
  
  console.log(
    formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
  ); // вернется форматированная строка
  