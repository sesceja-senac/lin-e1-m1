// $('#modal-correto-geladeira .btn-close').click(function(){
//     $('.ODA_geladeira .bg').fadeOut()
//     setTimeout(function(){
//         $('.ODA_geladeira').addClass('animate')
//     }, 100)
// })
$("#modal-correto-geladeira").on("hidden.bs.modal", function () {
    $('.ODA_geladeira .bg').fadeOut()
    setTimeout(function(){
        $('.ODA_geladeira').addClass('animate')
    }, 100)
});