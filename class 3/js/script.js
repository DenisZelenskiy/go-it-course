// 'use script'

// const nav = document.querySelector('.nav');
// let topNav = nav.offsetTop;


// function showScroll(){
//     if (window.scrollY >= topNav){
//         nav.classList.add('fixed-nav');
//     }else{
//         nav.classList.remove('fixed-nav');
//     }
// }
// window.addEventListener('scroll',showScroll);




//============================


let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let btn = document.querySelector('.win');
let btnWidth = btn.clientWidth;
let btnHeight = btn.clientHeight;
console.log(btnWidth,btnHeight);



let btns = document.querySelectorAll ('.btn');

function moveBtn() {
    this.style.top = Math.floor(Math.random()*(windowHeight - btnHeight)) + 'px';
    this.style.left = Math.floor(Math.random()*(windowWidth - btnWidth)) + 'px';
}

btns.forEach(el => el.addEventListener('mouseenter', moveBtn));

console.log (windowWidth,windowHeight);

