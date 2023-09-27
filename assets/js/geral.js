window.addEventListener('load', function(){ 
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    AOS.init()
    $('.preloader').fadeOut(300);
    switch (window.location.search) {
      case '?page=1':
        document.querySelector('footer').classList.add('footer_bg_1')  
        break;
      case '?page=3':
        document.querySelector('.titulo-conteudo h2').style.color = 'white'
        break;
      case '?page=4':
        document.querySelector('.titulo-conteudo h2').style.color = 'white'
        break;
    }
    AOS.refresh()
})

$('.bs-tooltip').click((e) => {
  e.preventDefault()
})


window.addEventListener('load', function(){ 
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  $('.preloader').fadeOut(300);
  AOS.init();
  AOS.refresh();

  // script pras páginas já visitadas
  switch(window.location.search){
    case '?page=1':
      localStorage.setItem('pagina1','visitada')
      break;
    case '?page=2':
      localStorage.setItem('pagina2','visitada')
      break;
    case '?page=3':
      localStorage.setItem('pagina3','visitada')
      break;
    case '?page=4':
      localStorage.setItem('pagina4','visitada')
      break;
    case '?page=5':
      localStorage.setItem('pagina5','visitada')
      break;
    case '?page=6':
      localStorage.setItem('pagina6','visitada')
      break;
    case '?page=7':
      localStorage.setItem('pagina7','visitada')
  }
  
  if(localStorage['pagina1']=='visitada'){document.querySelectorAll('.pagination li')[0].classList.add('visitada')}
  if(localStorage['pagina2']=='visitada'){document.querySelectorAll('.pagination li')[1].classList.add('visitada')}
  if(localStorage['pagina3']=='visitada'){document.querySelectorAll('.pagination li')[2].classList.add('visitada')}
  if(localStorage['pagina4']=='visitada'){document.querySelectorAll('.pagination li')[3].classList.add('visitada')}
  if(localStorage['pagina5']=='visitada'){document.querySelectorAll('.pagination li')[4].classList.add('visitada')}
  if(localStorage['pagina6']=='visitada'){document.querySelectorAll('.pagination li')[5].classList.add('visitada')}
  if(localStorage['pagina7']=='visitada'){document.querySelectorAll('.pagination li')[6].classList.add('visitada')}

})
window.setTimeout(function(){AOS.refresh()}, 1000)

$('#fig-2').fadeOut()
$('#change-pic').click(function () {
    $('.modal-slideshow').fadeOut()
    if ($('#fig-2').css('display') == 'none') {
        $('#fig-1').fadeOut()
        window.setTimeout(function () { $('#fig-2').fadeIn() }, 700)

    } else {
        $('#fig-2').fadeOut()
        window.setTimeout(function () { $('#fig-1').fadeIn() }, 700)

    }
})

$('.menu-btn').click(function () {
    if ($('.menu').hasClass('hidden')) {
        $('.menu').removeClass('hidden')
    } else {
        $('.menu').addClass('hidden')
    }
})

// reposicionamento do botao do menu

$(window).scroll(function () {

    var topPos = $(this).scrollTop();

    // if user scrolls down..
    if (topPos > 100) {
        $('.menu-btn').css("top", "20px");
        if(window.innerWidth<809){$('.menu').css('top', '100px')}else{$('.menu').css("top", "10px");}

    } else {
        $('.menu-btn').css("top", "125px");
        if(window.innerWidth<809){$('.menu').css('top', '180px')}else{$('.menu').css("top", "115px");}
        
        
    }

}); // scroll END


if(window.location.search=='?page=4'){
    $('.menu-btn').hide()
}