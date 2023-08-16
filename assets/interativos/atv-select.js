const opcao01 = document.querySelector('#op01');
$('#op01').on('change', function (e) {
    let optionSelected = $("option:selected", this);
    let valueSelected = this.value;
    console.log(valueSelected)
    if(valueSelected == 1) {
        $('#opcao1').removeClass('errado')
        $('#opcao1').addClass('correto')
    } else {
        $('#opcao1').removeClass('correto')
        $('#opcao1').addClass('errado')
    }
});
$('#op02').on('change', function (e) {
    let optionSelected = $("option:selected", this);
    let valueSelected = this.value;
    console.log(valueSelected)
    if(valueSelected == 3) {
        $('#opcao2').addClass('correto')
        $('#opcao2').removeClass('errado')
    } else {
        $('#opcao2').addClass('errado')
        $('#opcao2').removeClass('correto')
    }
});
$('#op03').on('change', function (e) {
    let optionSelected = $("option:selected", this);
    let valueSelected = this.value;
    console.log(valueSelected)
    if(valueSelected == 2) {
        $('#opcao3').removeClass('errado')
        $('#opcao3').addClass('correto')
    } else {
        $('#opcao3').removeClass('correto')
        $('#opcao3').addClass('errado')
    }
});