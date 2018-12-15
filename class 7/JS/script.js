"use strict";

// const source = document.querySelector('#address-template').innerHTML.trim();
// // console.log(source);
// const temp = Handlebars.compile(source);
// // console.log(temp);

// const context = {

//     "city": "London",

//     "street": "Baker Street",

//     "number": "221B"

// };

// const markup = temp(context);
// console.log(markup);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = markup;

// ====================================

// const data = {

//     people: [

//         {firstName: 'Homer', lastName: 'Simpson'},

//         {firstName: 'Peter', lastName: 'Griffin'},

//         {firstName: 'Eric', lastName: 'Cartman'},

//         {firstName: 'Kenny', lastName: 'McCormick'},

//         {firstName: 'Bart', lastName: 'Simpson'}

//     ]

// };

// const source = document.querySelector('#example-template').innerHTML.trim();
// console.log(source);
// const temp = Handlebars.compile(source);
// console.log(temp);
// const markup = temp(data);
// const content = temp(data);
// const conteiner = document.querySelector('.content-placeholder');
// conteiner.innerHTML = markup;

//======================================
// ========Posmotret!!!!!!========
// const menuData = {

//     title: 'Eat it createElement, templates rule!',

//     items: ['Handlebars', 'LoDash', 'Pug', 'EJS']

// };

// // // const source = document.querySelector('#template').innerHTML.trim();
// // // // console.log(source);
// // // const temp = Handlebars.compile(source);
// // // console.log(temp);
// // // const markup = temp(menuData);
// // // const content = temp(menuData);
// // // const conteiner = document.querySelector('.template');
// // // conteiner.innerHTML = markup;

// // //==================================
// const source = document.querySelector('#menu').innerHTML.trim();
// const temp = Handlebars.compile(source);
// const markup = temp(menuData);
// const conteiner = document.querySelector('.example-template');
// conteiner.innerHTML = markup;

// =======================================================================

// const data = {
//   animals: [
//     {
//       name: "cow",

//       noise: "moooo"
//     },

//     {
//       name: "cat",

//       noise: "meow"
//     },

//     {
//       name: "fish",

//       noise: ""
//     },

//     {
//       name: "farmer",

//       noise: "Get off my property!"
//     }
//   ]
// };



// let source = document.querySelector('#built-in-helpers-template').innerHTML.trim();

// let tmp =  Handlebars.compile(source);
// let mark = tmp(data);
// let container = document.querySelector('.content-placeholder');
// container.innerHTML = mark;


//===============================

const gallery = {

    title: 'Gallery',

    items: [

        {img: 'https://placeimg.com/300/150/animals', text: 'animals'},

        {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},

        {img: 'https://placeimg.com/300/150/nature', text: 'nature'},

        {img: 'https://placeimg.com/300/150/people', text: 'people'},

        {img: 'https://placeimg.com/300/150/tech', text: 'tech'},

        {img: 'https://placeimg.com/300/150/any', text: 'random'}

    ]

};

let source = document.querySelector('#gallery').innerHTML.trim();
let tmp = Handlebars.compile(source);
let mark = tmp(gallery);
let container = document.querySelector('.gallery');
container.innerHTML = mark;