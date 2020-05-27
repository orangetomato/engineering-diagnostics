const checkbox = document.querySelector('.hero__checkbox');
const burger = document.querySelector('.hero__burger');
const links = [...document.querySelectorAll('.navigation-menu__link')];

function changeHandler() {
    if (checkbox.checked) {
        document.addEventListener('click', closeMenu);
    }
}

function closeMenu(evt) {
    isLink = links.some(link => link === evt.target);
    isLink || evt.preventDefault();
    checkbox.checked = false;
    document.removeEventListener('click', closeMenu);
}

document.addEventListener('change', changeHandler);