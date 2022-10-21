const hamburgerBtn = document.querySelector('nav .hamburger');
const navMobile = document.querySelector('.nav__items-mobile-list');
const navItems = document.querySelector('.nav__items-mobile');

console.log(document.body);
const showNav = () => {
    hamburgerBtn.classList.toggle('is-active');
    navMobile.classList.toggle('nav__items-mobile-list--active');
    navItems.classList.toggle('nav__items-mobile--active');
}

hamburgerBtn.addEventListener('click', showNav)