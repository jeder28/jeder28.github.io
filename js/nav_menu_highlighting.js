$("#navbar li").click(function() {
   $(".active").removeClass("active");
   $(this).addClass("active");
});

$("#navbar .brand-name").click(function() {
   $(".active").removeClass("active");
});