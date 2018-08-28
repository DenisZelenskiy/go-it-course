 'use strict';

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const userInput = prompt ('Введите логин');
const Password = 'Введите пароль';
const canceled = 'Отменено пользователем!';
const banned = 'Доступ запрещен!';
const welcome = 'Добро пожаловать!'
if(userInput === null){
    alert(`${canceled}`)
}else if(userInput !== adminLogin){
    alert(`${banned}`)
}else if(userInput === adminLogin){
    const userPassword = prompt (`${Password}`);
    if (userPassword === null){
        alert(`${canceled}`)
    }else if(userPassword !== adminPassword){
        alert(`${banned}`)
    }else if(userPassword === adminPassword){
        alert(`${welcome}`)
    }
}
