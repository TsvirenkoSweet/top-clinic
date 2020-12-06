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
});


