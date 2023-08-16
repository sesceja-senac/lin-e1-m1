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