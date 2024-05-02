AOS.init({
    // easing: "ease-in-out-sine",
    // offset: 120,
    // delay: 0,
    // disable: false,
    // once: true,
});

$(window).scroll(function menu3() {
    if ($(this).scrollTop() > 300) {
        $("#menu3").addClass("scroll");
    } else {
        $("#menu3").removeClass("scroll");
    }
    if ($(this).scrollTop() > 450) {
        $("#menu3").addClass("on");
    } else {
        $("#menu3").removeClass("on");
    }
});