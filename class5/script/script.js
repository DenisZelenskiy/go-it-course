"use strict";
let text = document.querySelector(".input");
let form = document.querySelector(".box");
let container = document.querySelector("#container");
let get = document.querySelector("#get");
let post = document.querySelector("#post");
let del = document.querySelector("#del");


function readValue() {
  event.preventDefault();
  let value = text.value;
  console.log(value);
  text.value = "";

  sendRequest(value);
}

function sendRequest(value) {
  let url = `https://pixabay.com/api/?key=10567451-e89d654aa7ed9140fe488f539&q=${value}&per_page=9`;
  fetch(url)
    .then(response => response.json())
    .then(data => paintGallery(data.hits));
}

function paintGallery(arr) {
  let result = arr.reduce(
    (acc, el) =>
      acc +
      `<div class="one"><p>Photographer is ${el.user}</p><img src=${
        el.webformatURL
      }></div>`,
    ""
  );

  container.innerHTML = result;
}

function getRequest() {
    fetch('http://localhost:3001/tasks')
    .then(res => res.json())
    .then(data => console.log(data))
}
function postRequest() {
    fetch('http://localhost:3001/tasks',{
        method: 'post',
        body: JSON.stringify({text: 'Борщ'}),
        headers: { 'Content-Type': 'application/json'}
    })

 .then(res => res.json())
 .then(data => console.log (data))
 .catch(error => console.log(error))
}

function deleteRequest(){
    fetch('http://localhost:3001/tasks/2',{
        method: 'delete',
})
        .then(res => res.json())
        .then(data => console.log (data))
        .catch(error => console.log(error))
}
get.addEventListener('click',getRequest)
post.addEventListener('click',postRequest);
del.addEventListener('click', deleteRequest);
form.addEventListener("submit", readValue);
window.addEventListener('DOMContentLoaded', readValue)
