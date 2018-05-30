$(document).ready(function() {

    var menuBtn = $('#menu'),
        dots = $('#menu > span'),
        menuItem = $('#navList > ul li a');

    function closeMenu() {
        menuBtn.removeClass('open');
    }

    function openMenu() {
        menuBtn.addClass('open');
    }

    menuBtn.on('click', function(event) {
        if ( $(this).hasClass('open') ) {
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
        var heroH = $('#hero').height(),
            elevatorBtn = $('#elevatorBtn');
        
        if ( $(this).scrollTop() >= heroH ) {
            dots.addClass('scrolled');
            elevatorBtn.fadeIn('slow');
        } else {
            dots.removeClass('scrolled');
            elevatorBtn.fadeOut('slow');
        }
    });
    



});