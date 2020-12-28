$(document).ready(function() {
    //TODO
    // $(window).resize(()=>{
    //     if( $(window).outerWidth() < 768){
    //
    //     } else {
    //
    //     }
    // });

    mobileMenuHandler();
    serviceHandler();
    priceHandler();
    mobileClinicSectionHandler();
    scrollToElServiceHandler();

    function scrollToElServiceHandler() {
        $('.section__services__list__item').on('click', function(e) {
            e.preventDefault();
            if ($(window).outerWidth() < 768) {
                $('html, body').animate({
                    scrollTop: $('.section__services__description').offset().top - 82
                }, 500);
            }
        });
    }

    function mobileClinicSectionHandler() {
        addFirstStepImg();

        function addFirstStepImg() {
            $('.section__clinic__arrow-left').off('click').on('click', function() {
                $('.section__clinic__image-container').addClass('first-img-show');
                setTimeout(function() {
                    const target = $('.section__clinic__image-container.first-img-show .section__clinic__image-container__right__2');
                    const targetWidth = target.width() - (target.width() * 0.2);
                    target.css({ width: targetWidth - targetWidth * 0.27 });
                    $('.section__clinic__arrow-right').addClass('active');
                    removeFirstStapImg();
                    addSecondStepImg();
                }, 200);
            });
        }

        function addSecondStepImg() {
            $('.section__clinic__image-container.first-img-show .section__clinic__arrow-left').off('click').on('click', function() {
                $('.section__clinic__image-container').addClass('second-img-show');
                setTimeout(function() {
                    const target = $('.section__clinic__image-container.first-img-show .section__clinic__image-container__right__1');
                    const targetWidth = target.width() - (target.width() * 0.2);
                    target.css({ width: targetWidth - targetWidth * 0.27 });
                    $('.section__clinic__image-container .section__clinic__image-container__right__2').css({ width: '' });
                    $('.section__clinic__arrow-right').addClass('back-to-first');
                    removeSecondStapImg();
                }, 200);
            });
        }

        function removeSecondStapImg() {
            $('.section__clinic__arrow-right.active.back-to-first').off('click').on('click', function() {
                $('.section__clinic__image-container').removeClass('second-img-show');
                $('.section__clinic__arrow-right').removeClass('back-to-first');
                $('.section__clinic__image-container .section__clinic__image-container__right__1').css({ width: '' });
                setTimeout(function() {
                    const target = $('.section__clinic__image-container.first-img-show .section__clinic__image-container__right__2');
                    const targetWidth = target.width() - (target.width() * 0.2);
                    target.css({ width: targetWidth - targetWidth * 0.27 });
                    $('.section__clinic__arrow-right').addClass('active');
                    removeFirstStapImg();
                    addSecondStepImg();
                }, 200);
            });
        }

        function removeFirstStapImg() {
            $('.section__clinic__arrow-right.active').off('click').on('click', function() {
                $('.section__clinic__image-container').removeClass('first-img-show');
                setTimeout(function() {
                    const target = $('.section__clinic__image-container .section__clinic__image-container__right__2');
                    target.css({ width: '' });
                    $('.section__clinic__arrow-right').removeClass('active');
                    addFirstStepImg(true);
                }, 200);
            });
        }
    }

    function mobileMenuHandler() {
        $('#showHideMobileMenu').off('click').on('click', function() {
            $('.menu_inner').addClass('active');
            setTimeout(() => {
                $('.menu_inner').addClass('done');
            }, 300);
        });

        $('.menu_inner').off('click').on('click', function(event) {
            if ($(this).hasClass('done') && $(event.target).hasClass('menu_inner')) {
                $(this).removeClass('done')
                setTimeout(() => {
                    $(this).removeClass('active');
                }, 200);
            }
        });
        $('.has-sub-menu .icon-arrow-down').off('click').on('click', function(event) {
            event.preventDefault();
            $(this).closest('.has-sub-menu').find('.sub-menu').slideToggle(300);
            $(this).toggleClass('show');
        });
        $(".menu_inner").swipe({
            swipe: function(event, direction, distance) {
                if ($(this).hasClass('done') && direction === 'right' && distance > 100) {
                    $(this).removeClass('done')
                    setTimeout(() => {
                        $(this).removeClass('active');
                    }, 200);
                }
            }
        });
    }

    function serviceHandler() {
        $('.section__services__list__item').on('click', function() {
            const s = '.section__services__description';
            $(`${s}__item`).hide().removeClass('active');
            $(`${s}__item[data-service-id="${$(this).data('service-list-id')}"]`).fadeIn(300);
            $(`${s}__btn .btn`).attr('href', $(this).data('service-link'));
        });
    }

    function priceHandler() {
        $('.section__price__list__link').on('click', function() {
            const s = '.section__price__list';
            if ($(this).hasClass('active')) {
                $(this).removeClass('active').siblings(`${s}__sub`).slideUp(300);
            } else {
                $(`${s}__sub`).slideUp(300);
                $(`${s}__link .icon`).removeClass('show');
                $(`${s}__link`).removeClass('active');
                $('.icon', this).addClass('show');
                $(this).addClass('active').siblings(`${s}__sub`).slideDown(300);
            }
        });
    }

    $('.section__laser_medicine__container__slider').slick({
        responsive: [{
                breakpoint: 2500,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                    autoplay: false,
                    prevArrow: '<img src="./img/images/slide_prev.png" class="slick-prev">',
                    nextArrow: '<img src="./img/images/slide_next.png" class="slick-next">'
                }
            }
        ]
    });
    $('.section__face__container__slider').slick({
        responsive: [{
                breakpoint: 2500,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                    autoplay: false,
                    prevArrow: '<img src="./img/images/slide_prev.png" class="slick-prev">',
                    nextArrow: '<img src="./img/images/slide_next.png" class="slick-next">'
                }
            }
        ]
    });
    $('.section__body_correction__container__slider').slick({
        responsive: [{
                breakpoint: 2500,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    focusOnSelect: true,
                    autoplay: false,
                    prevArrow: '<img src="./img/images/slide_prev.png" class="slick-prev">',
                    nextArrow: '<img src="./img/images/slide_next.png" class="slick-next">'
                }
            }
        ]
    });
});