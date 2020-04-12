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