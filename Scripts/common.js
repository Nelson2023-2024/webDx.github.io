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

document.addEventListener('DOMContentLoaded', function () {
    const scroll = ScrollReveal({
        origin:'top',
        distance:'60px',
        duration:2000,
        delay:250,
        reset:true,

    })

/*Index.html */
    scroll.reveal('.main-content',{origin:'left'})


    scroll.reveal('.sub-sub-about',{origin:'right'})
    scroll.reveal('.about__img-1',{origin:'right'})
    scroll.reveal('.about__img-2',{origin:'left'})

    scroll.reveal('.about-companies')

    scroll.reveal('.subscribe')

    scroll.reveal('.copyright',{origin:'bottom'})


    /**Contact form */
    scroll.reveal('.contact-main-text',{origin:'left'})
    scroll.reveal('.contact-form',{origin:'right'})
    scroll.reveal('.contact-icons',{origin:'bottom'})

    /**Login */
    scroll.reveal('.box')


    //Auto type
    const typed = new Typed('.auto-type', {
        strings: ["easy","fun", "simple", "effortless", "smooth", "User-friendly","Manageable"],
        typeSpeed: 200,
        backSpeed: 150,
        loop: true
    });


})





