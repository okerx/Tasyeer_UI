(function($) {
    "use strict";
    $("body").scrollspy({ target: "#nav", offset: $(window).height() / 2 });
    $("#nav .main-nav a[href^='#']").on("click", function(e) {
        e.preventDefault();
        var hash = this.hash;
        $("html, body").animate({ scrollTop: $(this.hash).offset().top }, 600);
    });
    $("#back-to-top").on("click", function() {
        $("body,html").animate({ scrollTop: 0 }, 600);
    });
    $("#nav .nav-collapse").on("click", function() {
        $("#nav").toggleClass("open");
    });
    $(".has-dropdown a").on("click", function() {
        $(this)
            .parent()
            .toggleClass("open-drop");
    });
    $(window).on("scroll", function() {
        var wScroll = $(this).scrollTop();
        if (wScroll > 1) {
            $("#nav").addClass("fixed-nav");
            $("#navBtn").css("color", "black");

        }else{
          $("#nav").removeClass("fixed-nav");
          $("#navBtn").css("color", "#fff");
        }   
        wScroll > 700 ? $("#back-to-top").fadeIn() : $("#back-to-top").fadeOut();
    });
    $(".work").magnificPopup({ delegate: ".lightbox", type: "image" });
})(jQuery);

$("#inpt_search").on('focus', function() {
    $(this).parent('label').addClass('active');
});

$("#inpt_search").on('blur', function() {
    if ($(this).val().length == 0)
        $(this).parent('label').removeClass('active');
});