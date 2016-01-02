$(document).ready(function() {

    var dropDownMenu = $('nav ul'),
        menuButton   = $('.navbar-toggle')[0]

    $(menuButton).click(function(event) {
        $(this).toggleClass('in-use');
        $(dropDownMenu).toggleClass('in-use');

        event.preventDefault();
    });

    $(document).click(function(event) {
      if(!($(event.target).closest('.navbar-toggle').length)) {
          if(!($(dropDownMenu).hasClass('in-use'))) {
              $(dropDownMenu).toggleClass('in-use');
          }
      }
    });

});