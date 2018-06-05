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
        console.log(heroH);
        if ( $(this).scrollTop() >= heroH ) {
            dots.addClass('scrolled');
            menuItem.addClass('darken');
            elevatorBtn.fadeIn('slow');
        } else {
            dots.removeClass('scrolled');
            menuItem.removeClass('darken');
            elevatorBtn.fadeOut('slow');
        }
    });
    
    $('#elevatorBtn').on('click', function(event) {
        $('html, body').animate({
            scrollTop: '0' + '10px'
        }, 250);
    });
    
    // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    



});