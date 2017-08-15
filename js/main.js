$(document).ready(function() {
    $(window).scroll(function() {
        if($(document).scrollTop() > 10) {
            $('.navbar').addClass('alterarMenu');
        }
        else {
            $('.navbar').removeClass('alterarMenu');
        }
    });
});