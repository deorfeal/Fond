AOS.init();

$(function () {

    $('.questions-item').on('click', function (event) {
        if ($(this)[0].classList.contains('questions-item--active')) {
            $(this).removeClass('questions-item--active');
        } else {
            $('.questions-item').removeClass('questions-item--active');
            $(this).addClass('questions-item--active');
        }
    });

    $('.header__burger').on('click', function (event) {
        $('.header').addClass('header--active');
    });

    $('.menu-phone__top-close').on('click', function (event) {
        $('.header').removeClass('header--active');
    });

})

// $(function () {
//     var mixer = mixitup('.draws-info__inner', {
//         load: {
//             filter: '.draw'
//         },
//         animation: {
//             enable: false
//         },
//     });
// })

// $(function () {
//     var containerEl1 = document.querySelector('[data-ref="container-1"]');
//     var containerEl2 = document.querySelector('[data-ref="container-2"]');

//     var config = {
//         controls: {
//             scope: 'local'
//         },
//         load: {
//             filter: '.item-first',
//         },
//         animation: {
//             effects: 'fade scale(0%)',
//             duration: 0,
//         },
//     };
//     var confiG = {
//         controls: {
//             scope: 'local'
//         },
//         load: {
//             filter: '.item-firstt',
//         },
//         animation: {
//             effects: 'fade scale(0%)',
//             duration: 0,
//         },
//     };

//     var confiGG = {
//         controls: {
//             scope: 'local'
//         },
//         load: {
//             filter: '.item-first',
//         }
//     };

//     var mixer1 = mixitup(containerEl1, config);
//     var mixer1 = mixitup(containerEl2, confiG);

// })

new Swiper('.top-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        prevEl: '.top-swiper__buttons-prev',
        nextEl: '.top-swiper__buttons-next',
    },
    pagination: {
        el: '.top-swiper__pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        // 301: {
        //     slidesPerView: 2.2,
        //     centeredSlides: true,
        //     initialSlide: 1,
        //     slidesPerGroup: 1,
        //     loopedSlides: 6,
        // },
    }
});

new Swiper('.partners-swiper', {
    slidesPerView: 5,
    spaceBetween: 15,
    enable: false,
    breakpoints: {
        301: {
            slidesPerView: 2.2,
            spaceBetween: 4,
            enable: true,
        },
        801: {
            slidesPerView: 4,
            spaceBetween: 4,
            spaceBetween: 15,
            enable: true,
        },
        1301: {
            slidesPerView: 5,
            spaceBetween: 15,
            enable: false,
        }
    }
});

new Swiper('.news-swiper', {
    slidesPerView: 2.85,
    spaceBetween: 20,
    breakpoints: {
        301: {
            slidesPerView: 1.6,
            spaceBetween: 15,
        },
        601: {
            slidesPerView: 2.3,
            spaceBetween: 15,
        },
        901: {
            slidesPerView: 2.85,
            spaceBetween: 20,
        }
    }
});


new Swiper('.history-swiper', {
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
        301: {
            spaceBetween: 8,
            slidesPerView: 1.5,
        },
        551: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }
});

new Swiper('.our-partners-swiper', {
    slidesPerView: 5,
    spaceBetween: 50,
    navigation: {
        prevEl: '.our-partners-swiper__buttons-prev',
        nextEl: '.our-partners-swiper__buttons-next',
    },
    pagination: {
        el: '.our-partners-swiper__pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        301: {
            slidesPerView: 2.9,
            spaceBetween: 20,
        },
        551: {
            slidesPerView: 3.5,
            spaceBetween: 20,
        },
        951: {
            slidesPerView: 5,
            spaceBetween: 50,
        }
    }
});