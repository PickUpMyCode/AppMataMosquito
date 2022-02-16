var coracoes = document.getElementsByName('coracao')

var screenW = window.innerWidth, screenH = window.innerHeight

var tempo = 100

var vida = 3

var perdeu = false, morto = true

var mosca = document.getElementById('mosca')

const dificuldade = parseInt(sessionStorage.getItem("dificuldade"))

var tempo_mosca, mosca_intervalo;

switch (dificuldade) {
    case 0:
        mosca_intervalo = 3000
        tempo_mosca = 2000
        break;
    case 1:
        mosca_intervalo = 2000
        tempo_mosca = 1000
        break;
    case 2:
        mosca_intervalo = 1000
        tempo_mosca = 500
        break;
}


var temporizador = function () {

    document.getElementById('tempo').innerHTML = tempo.toString()

    tempo--

    if (tempo == 0) {
        vitoria()
    }
}

var mosca_acao = function () {

   

    morto = false

    var x = getRandomArbitrary(0, screenW)

    var y = getRandomArbitrary(0, screenH)

    mosca.style.top = y + "px"

    mosca.style.left = x + "px"

    mosca.style.display = "block"


}

function mataMosca() {
    mosca.style.display = "none"

    morto = true

    clearTimeout(mosca_acao)
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function vitoria() {
    open("vitoria.html", "_self")
}



setInterval(temporizador, 1000)

setInterval(function () {

    setTimeout(mosca_acao, tempo_mosca)
  
    mosca.style.display = "none"

    console.log("mostra")

    if (!morto) {

        vida--

        console.log(vida)

        coracoes[vida].setAttribute("src", "img/coracao_vazio.png")

        if (vida == 0) {
            open("perdeu.html", "_self")
        }

    }

}, mosca_intervalo)