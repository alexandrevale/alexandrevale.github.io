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
    //Um novo mindset a cada load
    var mindset = ['Peça ajuda quando uma tarefa for difícil de mais pra iniciar ou terminar.',
                   'Fique atendo, identifique seu "ladrão de foco" e remova distrações',
                   'Utilize listas com sabedoria: mantenha a lista enxuta, não crie tarefas sem relevância, isso pode tirar seu foco e criar a sensação de que você esta trabalhando muito, quando na verdade esta desperdiçando energia.',
                   'Utilize a técnica pomodoro para criar ciclos de produtividade',
                   'Microlearning: forma de oferecer aprendizagem em doses menores, planejadas e estruturadas para serem de fácil e rápida assimilação.',
                   'Um dos principais vilões no EAD é a distração causada por motivações que causam sensação de recompensa fácil, geralmente associada a procrastinação.',
                   'Técnica Pomodoro (timer): 25 minutos de trabalho sem interrupção + 5 minutos de pausa',
                   'No  design Thinking, a  Arte se junta à Ciência e à Tecnologia para encontrar novas soluções de negócio.',
                   'Design Thinking = Arte + Ciência + Tecnologia',
                   'Não "ache”, tenha certeza, pois maneiras subjetivas são barreiras para uma conversa construtivas.',
                   '"Existem dias que mudam totalmente a sua vida." Entender e aceitar o tempo, quando digo sim para algo estou dizendo não para outras possibilidades.',
                   'A essência precede a existência, isto é, um gato não tem opção de não ser um gato, ele já nasce com preceitos definidos. O ser humano é uma tela em branco, podemos ser primais, selvagens ou extremamente civilizados e evoluídos tecnologicamente e espiritualmente.',
                   'Custa caro (tempo) treinar e educar uma equipe. Isso exige muita energia e o resultado será notado em longo prazo, não é um trabalho da noite para o dia.',
                   'Liderança é um processo de criação em conjunto. Se você não se doar pela empresa sua equipe também não vai doar.',
                   'Não se pode viver com medo das possibilidades.'];
    
    $('<p class="mindset">'+mindset[Math.floor(Math.random()*mindset.length)]+'</p>').appendTo('#post-it');
    
    var coresPostit = ['#5DFF9E', '#fefabc', '#FFB580', '#FFA3F0', '#A9BAFF']; 
    var coresAleatorias = coresPostit[Math.floor(Math.random()*coresPostit.length)];
    $('#post-it').css('background-color',coresAleatorias);
    //Uma dica a cada load
    /*var imagens = ['a-chegada.JPG',
                   'alien-o-oitavo-passageiro.JPG',
                   'scrum-a-arte.JPG'];
    
    $('<img class="dica-efeito img-responsive" src="img/livros/'+imagens[Math.floor(Math.random()*imagens.length)]+'">').appendTo('#dica-livro');*/
    //Ajuste no carousel
    $('#caseCarousel').carousel({
        keyboard:true,
        interval:false
    });
    //Controle manual do carousel
    $(document).keydown(function(e){
        if(e.keyCode === 37){
            // Previous
            $(".carousel-control.left").click();
            return false;
        }
        if(e.keyCode === 39){
            // Next
            $(".carousel-control.right").click();
            return false;
        }
    });
    //Botão top
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200){
            $('.top').fadeIn(200);
        } else {
            $('.top').fadeOut(200);
        }
    });
    $('.top').click(function(event){
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });
    
    //Smooth scrolling
    $(".navbar li a").on('click', function(e) {
        if(this.hash !== ""){
            e.preventDefault();
            var hash = this.hash; //Armazena a âncora alvo
            
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){

            window.location.hash = hash;
            });
        }
    });
});