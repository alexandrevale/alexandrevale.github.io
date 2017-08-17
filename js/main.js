$(document).ready(function() {
    //Efeito menu
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
    //Uma dica a cada load
    var imagens = ['a-chegada.JPG',
                   'alien-o-oitavo-passageiro.JPG',
                   'scrum-a-arte.JPG'];
    
    $('<img class="dica-efeito img-responsive" src="img/livros/'+imagens[Math.floor(Math.random()*imagens.length)]+'">').appendTo('#dica-livro');
});