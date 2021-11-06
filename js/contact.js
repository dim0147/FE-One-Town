const hambuger = document.getElementById('menu__hambuger');
const menuList = document.getElementById('menu__list');

let show = false;

hambuger.addEventListener('click', () => {
    if (!show) menuList.classList.add('menu__list--show');
    else menuList.classList.remove('menu__list--show');

    show = !show;
});
const ips = document.querySelectorAll('input[type="range"]');

ips.forEach((e) => e.addEventListener('change', onChangeSlider));

function onChangeSlider(e) {
    let target = e.target;

    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
}
