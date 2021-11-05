const ips = document.querySelectorAll('input[type="range"]');

ips.forEach((e) => e.addEventListener('change', onChangeSlider));

function onChangeSlider(e) {
    let target = e.target;

    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
}
