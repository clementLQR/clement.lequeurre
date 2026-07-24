const menuToggle = document.querySelector('.menu-toggle');
const menuIcon = menuToggle.querySelector('img');
const menu = document.getElementById('menu');

const closeMenu = () => {
    menu.classList.remove('is-open');
    menuToggle.classList.remove('is-active');
};

const toggleMenu = () => {
    menu.classList.toggle('is-open');
    menuToggle.classList.toggle('is-active');
};

menuIcon.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleMenu();
});

menu.querySelectorAll('.nav-link-sm').forEach((link) => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (event) => {
    if (menu.classList.contains('is-open') && !menu.contains(event.target) && event.target !== menuIcon) {
        closeMenu();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeMenu();
    }
});
