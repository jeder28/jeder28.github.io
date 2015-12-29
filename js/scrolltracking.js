var header_height       = $('header').height() - 120,
    projects_link       = $("nav li")[0],
    about_link          = $("nav li")[1],
    contact_link        = $("nav li")[2]

function pageSlide() {

  var scroll_top = $(window).scrollTop();
  var projects_height     = $('.projects').height(),
      about_position    = projects_height + header_height - 120,
      about_height        = $('.about').height(),
      contact_position  = about_height + projects_height + header_height - 150

  if (scroll_top >= header_height && scroll_top < about_position) {
    $("nav li").removeClass('active');
    $(projects_link).addClass('active');
  }
  else if (scroll_top >= about_position && scroll_top < contact_position) {
    $("nav li").removeClass('active');
    $(about_link).addClass('active');
  }
  else if (scroll_top >= contact_position) {
    $("nav li").removeClass('active');
    $(contact_link).addClass('active');
  }
  else {
    $("nav li").removeClass('active');
  }

}

var debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

var lazyScroll = debounce(pageSlide, 100);


$(window).scroll(lazyScroll);
