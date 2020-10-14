const scroll = new SmoothScroll('a[href*="#"]');

const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
const links = document.querySelectorAll('a');
let menuOpen = false;


hamburger.addEventListener('click', () => {
    if (!menuOpen) {
        header.classList.add('open');
        menuOpen = true;
    } else {
        header.classList.remove('open');
        menuOpen = false;
    }
})


links.forEach(link => {
    link.addEventListener('click', () => {
        if (menuOpen) {
            header.classList.remove('open');
            menuOpen = false;
        }
    })
})



options = {
    threshold: 1,
}

const landing = document.querySelector('#landing');
const contact = document.querySelector('#contact');
const scrollA = document.querySelector('.scroll');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            header.classList.remove('shadow');
            if (landing)
                scrollA.classList.remove('hide');
        }
        else {
            header.classList.add('shadow');
            if (landing)
                scrollA.classList.add('hide');
        }
    })
}, options);

if (landing)
    observer.observe(landing);
else
    observer.observe(contact);