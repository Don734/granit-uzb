const protoInit = {
    mainSlider() {
        let swiperContainer = '.swiper-main';
        let interleaveOffset = 0.5;

        let swiperOptions = {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                renderBullet: function (index, className) {
                    let swiper = this;
    
                    return '<div class="slide-pagination-wrap ' + className + '">' + '<p class="counter">' + "0" + (index + 1) + '</p>' + '<span class="divider">|</span>' + '<p class="totalSlides">' + "0" + swiper.slides.length + '</p>' + '</div>';
                }
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            on: {
                progress: function () {
                    let swiper = this;
                    for (let i = 0; i < swiper.slides.length; i++) {
                        let slideProgress = swiper.slides[i].progress;
                        let innerOffset = swiper.width * interleaveOffset;
                        let innerTranslate = slideProgress * innerOffset;
    
                        swiper.slides[i].querySelector(".swiper-img").style.transform = "translate3d(" + innerTranslate + "px, 0, 0)";
                    }
                },
                touchStart: function () {
                    let swiper = this;
                    for (let i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = "";
                    }
                },
                setTransition: function (elem, curSpeed) {
                    let swiper = this;
                    for (let i = 0; i < swiper.slides.length; i++) {
                        swiper.slides[i].style.transition = curSpeed + "ms";
                        swiper.slides[i].querySelector(".swiper-img").style.transition = curSpeed + "ms";
                    }
                },
                slideNextTransitionStart: function () {
                    let prevslide = gsap.timeline();
                    prevslide.to($('.swiper-pagination-bullet-active').prev().find('.counter'), {duration: 0.5, y: -20, stagger: 0.1, ease: 'Power2.easeIn'})
                    prevslide.to($('.swiper-slide-active').prev().find('.content__title span'), {duration: 0.5, scale: 0.9, x: -100, opacity: 0, stagger: 0.1, ease: 'Power2.easeInOut'})
                    prevslide.to($('.swiper-slide-active').prev().find('.content__subtitle'), {duration: 0.5, x: -20, opacity: 0, delay: 0.1, ease: 'Power2.easeIn'})
                    let activeslide = gsap.timeline();
                    activeslide.to($('.swiper-pagination-bullet-active').find('.counter'), {duration: 0.5, y: 0, stagger: 0.1, ease: 'Power2.easeOut'})
                    activeslide.to($('.swiper-slide-active').find('.content__title span'), {duration: 0.5, delay: 0.1, scale: 1, x: 0, opacity: 1, stagger: 0.1, ease: 'Power2.easeOut'})
                    activeslide.to($('.swiper-slide-active').find('.content__subtitle'), {duration: 0.5, x: 0, opacity: 1, delay: 0.3, ease: 'Power2.easeOut'})
                    let nextslide = gsap.timeline();
                    nextslide.to($('.swiper-pagination-bullet-active').next().find('.counter'), {duration: 0.5, y: 20, stagger: 0.1, ease: 'Power2.easeIn'})
                    nextslide.to($('.swiper-slide-active').next().find('.content__title span'), {duration: 0.5, scale: 1.1, x: 100, opacity: 0, stagger: 0.1, ease: 'Power2.easeInOut'})
                    nextslide.to($('.swiper-slide-active').next().find('.content__subtitle'), {duration: 0.5, x: 20, opacity: 0, delay: 0.1, ease: 'Power2.easeIn'})
                },
                slidePrevTransitionStart: function () {
                    let prevslide = gsap.timeline();
                    prevslide.to($('.swiper-pagination-bullet-active').prev().find('.counter'), {duration: 0.5, y: -20, stagger: -0.1, ease: 'Power2.easeIn'})
                    prevslide.to($('.swiper-slide-active').prev().find('.content__title span'), {duration: 0.5, scale: 1.1, x: -100, opacity: 0, stagger: -0.1, ease: 'Power2.easeInOut'})
                    prevslide.to($('.swiper-slide-active').prev().find('.content__subtitle'), {duration: 0.5, x: -20, opacity: 0, delay: 0.3, ease: 'Power2.easeIn'})
                    let activeslide = gsap.timeline();
                    activeslide.to($('.swiper-pagination-bullet-active').find('.counter'), {duration: 0.5, y: 0, stagger: -0.1, ease: 'Power2.easeOut'})
                    activeslide.to($('.swiper-slide-active').find('.content__title span'), {duration: 0.5, delay: 0.5, scale: 1, x: 0, opacity: 1, stagger: -0.1, ease: 'Power2.easeOut'})
                    activeslide.to($('.swiper-slide-active').find('.content__subtitle'), {duration: 0.5, x: 0, opacity: 1, delay: 0.3, ease: 'Power2.easeOut'})
                    let nextslide = gsap.timeline();
                    nextslide.to($('.swiper-pagination-bullet-active').next().find('.counter'), {duration: 0.5, y: 20, stagger: -0.1, ease: 'Power2.easeIn'})
                    nextslide.to($('.swiper-slide-active').next().find('.content__title span'), {duration: 0.5, scale: 0.9, x: 100, opacity: 0, stagger: -0.1, ease: 'Power2.easeInOut'})
                    nextslide.to($('.swiper-slide-active').next().find('.content__subtitle'), {duration: 0.5, x: 20, opacity: 0, delay: 0.3, ease: 'Power2.easeIn'})
                }
            }
        };
        const swiper = new Swiper(swiperContainer, swiperOptions);
    },
    ballCursor() {
        let cursor = document.querySelector('#ball');
    
        document.addEventListener('mousemove', function (event) {
            gsap.to(cursor, 0.2, {
                x: event.clientX,
                y: event.clientY
            })
        });
    
    
        $('.swiper-button-prev, .swiper-button-next, a, button').mouseenter(function () {
            gsap.to(cursor, 0.3, {
                borderWidth: '0px',
                scale: 3,
                backgroundColor: "rgba(127, 127, 127, 1)",
                opacity: .15,
            })
        })
    
        $('.swiper-button-prev, .swiper-button-next, a, button').mouseleave(function () {
            gsap.to(cursor, 0.3, {
                borderWidth: '2px',
                scale: 1,
                backgroundColor: "rgba(127, 127, 127, 0)",
                opacity: 1,
            })
        })
    },
}

document.addEventListener('DOMContentLoaded', () => {
    protoInit.mainSlider();
    protoInit.ballCursor();
})