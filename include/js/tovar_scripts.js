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
            elevatorBtn = $('#elevatorBtn'), navbar = $('#navList');
        console.log(heroH);
        if ( $(this).scrollTop() >= heroH - 1 ) {
            dots.addClass('scrolled');
            menuItem.addClass('darken');
            navbar.addClass('scrolled');
            elevatorBtn.fadeIn('slow');
        } else {
            dots.removeClass('scrolled');
            menuItem.removeClass('darken');
            navbar.removeClass('scrolled');
            elevatorBtn.fadeOut('slow');
        }
    });
    
    $('#elevatorBtn').on('click', function(event) {
        $('html, body').animate({
            scrollTop: '0' + '10px'
        }, 250);
    });
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
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
            $target.attr('tabindex','-1');
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
           if ( $(this).hasClass('close') ) {
               $(this).removeClass('close').siblings('div').removeClass('down');
           } else {
               $(this).addClass('close').siblings('div').addClass('down');
           }
       });
    });


});