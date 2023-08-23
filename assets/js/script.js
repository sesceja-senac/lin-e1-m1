//audio
// var x = document.getElementById("myAudio");

// function playAudio() {
//   x.play();
// }

// function pauseAudio() {
//   x.pause();
// }


//modais
var modal1 = new bootstrap.Modal(document.getElementById('modal-1'), {});
var modal2 = new bootstrap.Modal(document.getElementById('modal-2'), {});
var modal3 = new bootstrap.Modal(document.getElementById('modal-3'), {});
var modal4 = new bootstrap.Modal(document.getElementById('modal-4'), {});

//casas
var casa1 = document.getElementById('casa-1');
var casa2 = document.getElementById('casa-2');
var casa3 = document.getElementById('casa-3');
var casa4 = document.getElementById('casa-4');
var casa5 = document.getElementById('casa-5');
var casa6 = document.getElementById('casa-6');
var casa7 = document.getElementById('casa-7');
var casa8 = document.getElementById('casa-8');
var casas = [casa1, casa2, casa3, casa3. casa5, casa6, casa7, casa8];

//check das casas visitadas é feito pelo local storage
//modelo: localStorage.casaVisitada1 

//links
var link1 = document.getElementById('link-1');
var link2 = document.getElementById('link-2');
var link3 = document.getElementById('link-3');
var link4 = document.getElementById('link-4');
var link5 = document.getElementById('link-5');
var link6 = document.getElementById('link-6');
var link7 = document.getElementById('link-1');
var link8 = document.getElementById('link-8');


//função hover links que mostra o titulo
function onLinkHover(title) {
	document.getElementById(title).classList.add('ativo')
}

//função quando tira o mouse dos links
function linkOnMouseOut(title) {
	document.getElementById(title).classList.remove('ativo')
}

//botão aviso1
var btnAviso = document.getElementById('aviso-btn-1');

//função esconde aviso
btnAviso.addEventListener('click', function(){
	document.getElementById('aviso-1').style.opacity = "0";
	document.getElementById('aviso-1').style.pointerEvents = "none";
	localStorage.avisoClicado = "true";
})

window.addEventListener("load", function() {
	//checa se o aviso já foi clicado
	if(localStorage.avisoClicado === "false" || !localStorage.avisoClicado){
		document.getElementById('aviso-1').style.display = "block";
	}

	//checa se algum link foi visitado
	//caso foi visitado ele marca a casa
	if(localStorage.link1Visitado === "true") {
		casa1.classList.add('visitado');
		this.document.getElementById("img-01-mobile").classList.add("ativo");
	}
	if(localStorage.link2Visitado === "true"){
		casa2.classList.add('visitado')
		this.document.getElementById("img-02").style.opacity = 1;
		this.document.getElementById("img-02-mobile").classList.add("ativo");
		
	}
	if(localStorage.link3Visitado === "true"){
		casa3.classList.add('visitado');
		//se a var modal1visitado é verdadeira ele não abre mais o mdoal
		this.document.getElementById("img-03").style.opacity = 1;
		this.document.getElementById("img-03-mobile").classList.add("ativo");
		if(localStorage.modal1visitado !== "true"){
			modal1.toggle();
		}
	}
	if(localStorage.link4Visitado === "true"){
		casa4.classList.add('visitado');
		this.document.getElementById("img-04").style.opacity = 1;
		this.document.getElementById("img-04-mobile").classList.add("ativo");
	}
	if(localStorage.link5Visitado === "true"){
		casa5.classList.add('visitado');
		this.document.getElementById("img-05").style.opacity = 1;
		this.document.getElementById("img-05-mobile").classList.add("ativo");
		//se a var modal2visitado é verdadeira ele não abre mais o mdoal
		if(localStorage.modal2visitado !== "true"){
			modal2.toggle();
		}
	}
	if(localStorage.link6Visitado === "true"){
		casa6.classList.add('visitado');
		this.document.getElementById("img-06").style.opacity = 1;
		this.document.getElementById("img-06-mobile").classList.add("ativo");
	}
	if(localStorage.link7Visitado === "true"){
		casa7.classList.add('visitado');
		this.document.getElementById("img-07").style.opacity = 1;
		this.document.getElementById("img-07-mobile").classList.add("ativo");
		//se a var modal3visitado é verdadeira ele não abre mais o mdoal
		if(localStorage.modal3visitado !== "true"){
			modal3.toggle();
		}
	}
	if(localStorage.link8Visitado === "true"){
		casa8.classList.add('visitado');
		this.document.getElementById("img-08").style.opacity = 1;
		this.document.getElementById("img-08-mobile").classList.add("ativo");
		//se a var modal4visitado é verdadeira ele não abre mais o mdoal
		if(localStorage.modal4visitado !== "true"){
			modal4.toggle();
		}
	}
});

//botões das modais
document.getElementById('btn-modal-1').addEventListener('click', function(){
	localStorage.modal1visitado = "true";
})

document.getElementById('btn-modal-2').addEventListener('click', function(){
	localStorage.modal2visitado = "true";
})

document.getElementById('btn-modal-3').addEventListener('click', function(){
	localStorage.modal3visitado = "true";
})

document.getElementById('btn-modal-4').addEventListener('click', function(){
	localStorage.modal4visitado = "true";
})

$(function (){
	var links = new Array();
	for (i=0; i< 8; i++){
		links[i] = localStorage.getItem("link"+ i +"Visitado");
	}
	var modais = new Array(); 
	for (i=0; i< 4; i++){
		modais[i] = localStorage.getItem("modal"+ i +"Visitado");
	}

	if(links.indexOf("null") != -1 && modais.indexOf("null") != -1) {
		alert("Você finalizou o material! Parabéns!");
	}
	
})
//redimensionamento da tela
function resize_div(){
    var _x = 1920;
    var _y = 1080;
    var janelaUsuarioX = $(window).width();
    var janelaUsuarioY = $(window).height();
    var proporcao = ((janelaUsuarioX/_x)*100)/100;
    $('#bg').css('transform', 'scale(' +proporcao +')');
}

resize_div();

$(window).resize(resize_div);





