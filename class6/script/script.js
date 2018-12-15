"use strict";

// let arr = [1, 5, 6, 8, 10];
// let arr2 = [8];
// localStorage.setItem('array',JSON.stringify(arr));
// let result = JSON.parse(localStorage.getItem('array'));
// console.log(result);
// localStorage.setItem('array',JSON.stringify(arr2));
// // localStorage.removeItem('array'); //удаление
// // localStorage.clear(); //Очистка полностью

// ================================

let text = document.querySelector('[type="text"]');
let form = document.querySelector("form");
let ul = document.querySelector("ul");
function readValue() {
  event.preventDefault();
  let value = text.value;
  let obj = {
    id: Date.now(),
    content: value,
  }
  createLi(obj);
  saveToStoreg(obj);
  text.value = "";
}

function createLi(task) {
  let li = document.createElement("li");
  li.textContent = task.content;
  li.setAttribute ('data-id', task.id)
  ul.append(li);
}

function saveToStoreg(obj) {
 
  let result = JSON.parse(localStorage.getItem('task'))
  result.push(obj);
  localStorage.setItem("task", JSON.stringify(result));
}

function paintFromStorage() {
  let result = JSON.parse(localStorage.getItem("task"));
  if (result) {
    for (let el of result) {
        createLi(el);
      }
  } else {
    localStorage.setItem('task', JSON.stringify([]));
  }
}

function deleteLi () {
    let id = event.target.dataset.id;
    event.target.remove();
    console.log(id);
    let result  = JSON.parse(localStorage.getItem('task'));
    let arrForSave = result.filter(el => el.id !== id);
    localStorage.setItem('task', JSON.stringify(arrForSave));
}

window.addEventListener("DOMContentLoaded", paintFromStorage);
form.addEventListener("submit", readValue);
ul.addEventListener('click', deleteLi);
