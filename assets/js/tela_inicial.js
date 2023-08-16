window.addEventListener('load', function(){ 
    $('.preloader').fadeOut(300);
})
$('#fechar-video').click(function(){
    $('.backdrop').fadeOut()
})
$('.botao-video').click(function(){
    $('.backdrop').fadeIn()
})