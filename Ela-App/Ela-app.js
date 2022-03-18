// $("#search-icon").onclick(function() {
//     $(".nav").toggleClass("search");
//     $(".nav").toggleClass("no-search");
//     $(".search-input").toggleClass("search-active");
//   });
  
//   $('.#menu-toggle').onclick(function(){
//      $(".nav").toggleClass("mobile-nav");
//      $(this).toggleClass("is-active");
//   });


const mobileMenu = document.querySelector(".menu-toggle")
const navBar = document.querySelector('#links-nav')
mobileMenu.addEventListener('click', () =>{
   navBar.classList.toggle('show')
})

const loginBody = document.querySelector(".login-body a")
const container = document.querySelector('.container-onclick')
loginBody.addEventListener('click', () =>{
   container.classList.toggle('display')
})

const reg = document.querySelector("#reg")
const loginBoxz = document.querySelector('.login-boxz')
reg.addEventListener('click', () =>{
   loginBoxz.classList.toggle('onplay')
})

const loged = document.querySelector("#loged")
const loginBox = document.querySelector('.login-box')
loged.addEventListener('click', () =>{
   loginBox.classList.toggle('dotplay')
})

