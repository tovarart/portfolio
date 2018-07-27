$(document).ready(function() {

    var menuBtn = $('#menu'),
        dots = $('button#menu > span'),
        menuItem = $('#navList > ul li a'),
        elevatorBtn = $('#elevatorBtn'),
        navbar = $('#navList');

    var elevatorBtn = $('#elevatorBtn'),
        navbar = $('#navList');

    function closeMenu() {
        menuBtn.removeClass('open');
    }

    function openMenu() {
        menuBtn.addClass('open');
        elevatorBtn.fadeOut('slow');
    }

    menuBtn.on('click', function(event) {
        if ($(this).hasClass('open')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    menuItem.each(function() {
        $(this).on('click', function(event) {
            closeMenu();
        })
    });

    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() >= 250) {
            //            dots.addClass('scrolled');
            menuItem.addClass('darken');
            navbar.addClass('scrolled');
            elevatorBtn.fadeIn('slow');
        } else {
            //            dots.removeClass('scrolled');
            menuItem.removeClass('darken');
            navbar.removeClass('scrolled');
            elevatorBtn.fadeOut('slow');
        }
    });


    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });

    var moreBtn = $('button.more-button');

    moreBtn.each(function() {
        $(this).on('click', function(event) {
            //           $(this).addClass('close').siblings('div').addClass('down');
            if ($(this).hasClass('close')) {
                $(this).removeClass('close').siblings('div').removeClass('down');
            } else {
                $(this).addClass('close').siblings('div').addClass('down');
            }
        });
    });

    $('.slider').owlCarousel({
        loop: false,
        margin: 10,
        center: true,
        loop: true,
        animateOut: 'fadeOut',
        responsiveClass: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            800: {
                items: 2,
                nav: true
            }
        }
    });

    var moreMedia = $('button.more-media'),
        overlay = $('#overlay'),
        mediaBoxes = $('.media-box'),
        closeMediaBtn = $('button.close');

    moreMedia.each(function() {
        $(this).on('click', function(event) {
            var thisId = $(this).data('id');
            //           console.log(thisId);
            if (overlay.hasClass('hide')) {
                overlay.removeClass('hide');
                $('#' + thisId).addClass('show');
            } else {
                overlay.addClass('hide');
                mediaBoxes.removeClass('show');
            }

        });
    });

    closeMediaBtn.each(function() {
        $(this).on('click', function(event) {
            $(this).parent('.media-box').removeClass('show');
            overlay.addClass('hide');
        })
    });



});