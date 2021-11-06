document.addEventListener('DOMContentLoaded', function () {
    const hambuger = document.getElementById('menu__hambuger');
    const menuList = document.getElementById('menu__list');

    let show = false;

    hambuger.addEventListener('click', () => {
        if (!show) menuList.classList.add('menu__list--show');
        else menuList.classList.remove('menu__list--show');

        show = !show;
    });

    $('#banner__list').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        navText: [
            `<button class="btn btn--navigate btn--navigate--left"><ion-icon name="chevron-back-outline"></ion-icon></button>`,
            '<button class="btn btn--navigate btn--navigate--right"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
        ],
    });
    const owl = $('#feature-work__img-list').owlCarousel({
        autoplay: true,
        loop: true,
        items: 1,
        dots: true,
        dotsContainer: '#feature-work__list',
    });

    $('.feature-work__item').click(function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });
});
