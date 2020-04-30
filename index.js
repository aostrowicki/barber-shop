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
const scrollA = document.querySelector('.scroll');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            header.classList.remove('shadow');
            scrollA.classList.remove('hide');
        }
        else {
            header.classList.add('shadow');
            scrollA.classList.add('hide');
        }
    })
}, options);

observer.observe(landing);