

$(document).ready(function() {
  /*$('.nav-link, .navbar-brand').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 1000);
  });*/

  // jQuery for page scrolling feature - requires jQuery Easing plugin
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    let navbarHeight = $('.navbar').outerHeight();
    $('html, body').stop().animate({
        scrollTop: ($($anchor.attr('href')).offset().top - navbarHeight)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  //Add padding to body to fix navbar and footer
  $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
  $('body').css('padding-bottom', $('footer').outerHeight() + 'px');

  //Add navbar collapsing when pressing button
  $(document).click(function (event) {
    var click = $(event.target);
    var _open = $(".navbar-collapse").hasClass("show");
    if (_open === true && !click.hasClass("navbar-toggler")) {
        $(".navbar-toggler").click();
    }
  }); 

})

$(window).on("scroll", function() {
  var currentPos = $(window).scrollTop();

  $('.nav-brand, .nav-link').each(function() {
    var sectionLink = $(this);

    // capture the height of the navbar
    var navHeight = $('.navbar').outerHeight() + 1;
    var section = $(sectionLink.attr('href'));

    // subtract the navbar height from the top of the section
    if(section.position().top - navHeight  <= currentPos && sectionLink.offset().top + section.height()> currentPos) {
      $('.nav-item').removeClass('active');
      sectionLink.parent().addClass('active');
    } else {
      sectionLink.parent().removeClass('active');
    }
  });        
});


