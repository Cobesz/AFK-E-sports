$(document).ready(function() {

    // Animate scrolling with navigation using OnePageNav.
    $('#nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 750
    });

    // Animate scrolling with subscribe using own code.
    $("#subscribe").click(function() {
        $('html, body').animate({
            scrollTop: $("#contact").offset().top
        }, 750);
    });
});