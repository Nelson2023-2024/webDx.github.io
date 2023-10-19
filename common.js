const navbar = document.querySelector('nav');
const menu = navbar.querySelector('ul');
const openBtn = navbar.querySelector('.fa-bars');
const closeBtn = menu.querySelector('.fa-times');

openBtn.onclick = () => {
    if (window.innerWidth <= 700) {
        menu.classList.toggle('menu');
    }
};

closeBtn.onclick = () => {
    if (window.innerWidth <= 700) {
        menu.classList.toggle('menu');
    }
};


