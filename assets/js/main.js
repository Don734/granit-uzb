const protoInit = {
    mainSlider() {
        let swiperContainer = '.swiper-main';
        let swiperOptions = {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
        const swiper = new Swiper(swiperContainer, swiperOptions);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    protoInit.mainSlider();
})