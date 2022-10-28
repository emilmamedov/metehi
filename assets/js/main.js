$(function() {
    // гамбургер меню
    $('.hamburger').on('click', function() {
        $(this).toggleClass('active');
        $('header .menu').toggleClass('active');
    });

    // меню при ресайзе
    let mobile = false;
    let auth = $('.auth');

    if ($(window).width() < 993) {

        mobile = true;
        $('header .menu').append(auth);
    }

    $(window).on('resize', function() {
        if ($(window).width() < 993 && !mobile) {
            mobile = true;
            $('header .menu').append(auth);
        }

        if ($(window).width() >= 992 && mobile) {
            mobile = false;
            $('header .container').append(auth);
            $(this, 'header .menu').removeClass('active');
        }
    });

    $('.multiple-items').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        responsive: [{
                breakpoint: 992,
                settings: {
                    focusOnSelect: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    // centerPadding: '40px',

                }
            }
        ]
    });

});