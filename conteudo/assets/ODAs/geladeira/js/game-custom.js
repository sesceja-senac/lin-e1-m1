
$('#iniciar').click(()=>{
  $('.tela-1').fadeOut()
})
// Aqui você adiciona ou remove os containers pra onde devem ir os cards
var containers = [
  // Container com os cards que serão realocados
  // Não mexer
  document.querySelector("#cardPile"),

  // Containers que irão receber os cards
  document.querySelector("#slot-1")
];
var audio = new Audio();
var erro = 0;

// Solução ao dragindrop
var scrollable = true;

var listener = function(e) {
  console.log(scrollable)
    if (! scrollable) {
        e.preventDefault();
    }
}

document.addEventListener('touchmove', listener, { passive:false });

// Solução ao dragindrop

var drake = dragula({
  containers: containers,
  revertOnSpill: true,
  direction: 'vertical',
  accepts: function (el, target, source, sibling) {
      return el.dataset.target == target.id; 
  }
}).on('drag', function(el, source) {
  // On mobile this prevents the default page scrolling while dragging an item.
  scrollable = false;
}).on("drop", function(el, target, source){
  scrollable = true;
  if($(this)[0].containers[1].children[0].id == 'card-1'){
    $('.tela-erro').fadeIn()
      console.log(el, + '   ', source)
      $(el).remove()
      $(source).append(el)
      return;
  }
  if($(this)[0].containers[1].children[0].id == 'card-2'){
    $('.tela-correto').fadeIn()
      console.log(el, + '   ', source)
      $(el).remove()
      $(source).append(el)
      return;
  }
}).on("cancel", function(){
  scrollable = true;

      // Executa o áudio e a modal necessária
      // Também é possível fazer algum teste aqui caso necessário.
  $('#bgmodal-erro').modal('show')
      audio.setAttribute('src','audios/erro.mp3'); //change the source
      audio.load(); //load the new source
      audio.play(); //play
});

$('#tentar-novamente').click(()=>{
  $('.tela-erro').fadeOut()
})
// document.addEventListener('touchmove', function(e) { e.preventDefault(); }, { passive:false });