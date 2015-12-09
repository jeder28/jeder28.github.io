var header_height      = $('header').height() - 90,
    projects_height    = $('.projects').height(),
    about_position     = projects_height + header_height - 90,
    about_height       = $('.about').height(),
    contact_position   = about_height + projects_height + header_height - 90,
    projects_link      = $("nav li")[0],
    about_link         = $("nav li")[1],
    contact_link       = $("nav li")[2]

function pageSlide() {
  var scroll_top = $(window).scrollTop();
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

$(window).scroll(pageSlide);