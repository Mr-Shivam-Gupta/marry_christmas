/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
      navClose = document.getElementById('nav-close');
      navToggle = document.getElementById('nav-toggle');

if (navToggle) {
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu');
    })
}
if (navClose) {
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const linkAction = ()=> {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach( n=>n.addEventListener('click',linkAction));

/*=============== DAY COUNTER FOR CHRISTMAS ===============*/

