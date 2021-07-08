const CELESTE = document.getElementById('celeste');
const VIOLETA = document.getElementById('violeta');
const NARANJA = document.getElementById('naranja');
const VERDE = document.getElementById('verde');
const BTN_EMPEZAR = document.getElementById('btn_empezar');

CELESTE.sounds = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3')
VIOLETA.sounds = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3')
NARANJA.sounds = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3')
VERDE.sounds = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3')

function empezarJuego(){
    var juego = new Juego();
    console.log(juego)
}