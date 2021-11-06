const hambuger = document.getElementById('menu__hambuger');
const menuList = document.getElementById('menu__list');

let show = false;

hambuger.addEventListener('click', () => {
    if (!show) menuList.classList.add('menu__list--show');
    else menuList.classList.remove('menu__list--show');

    show = !show;
});
const btn = document.querySelector('.popup__btn');
btn.addEventListener('click', () => document.querySelector('.popup').classList.add('animate__backOutDown'));


