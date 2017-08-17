//Menu
$(document).ready(function() {
    $(window).scroll(function() {
        if($(document).scrollTop() > 60) {
            $('.navbar').addClass('alterarMenu');
            $('.navbar-inverse .navbar-nav>li>a').css('color','#211A9D');
            
        }
        else {
            $('.navbar').removeClass('alterarMenu');
            $('.navbar-inverse .navbar-nav>li>a').css('color','#FF8420');
        }
    });
});