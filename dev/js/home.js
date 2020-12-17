$(document).ready(function () {
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

    function mobileMenuHandler() {
        $('#showHideMobileMenu').off('click').on( 'click', function () {
            $('.menu_inner').addClass('active');
            setTimeout(() => {
                $('.menu_inner').addClass('done');
            }, 300);
        });

        $('.menu_inner').off('click').on( 'click',function(event) {
            if ($(this).hasClass('done') && $(event.target).hasClass('menu_inner')) {
                $(this).removeClass('done')
                setTimeout(() => {
                    $(this).removeClass('active');
                }, 200);
            }
        });
        $('.has-sub-menu .icon-arrow-down').off('click').on( 'click',function(event) {
            event.preventDefault();
            $(this).closest('.has-sub-menu').find('.sub-menu').slideToggle(300);
            $(this).toggleClass('show');
        });
        $(".menu_inner").swipe( {
            swipe:function(event, direction, distance) {
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
        $('.section__services__list__item').on('click', function () {
            const s = '.section__services__description';
            $(`${s}__item`).hide().removeClass('active');
            $(`${s}__item[data-service-id="${$(this).data('service-list-id')}"]`).fadeIn(300);
            $(`${s}__btn .btn`).attr('href', $(this).data('service-link'));
        });
    }
    function priceHandler() {
        $('.section__price__list__link').on('click', function () {
            const s = '.section__price__list';
            if ( $(this).hasClass('active')) {
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
});


