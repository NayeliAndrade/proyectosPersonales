"use strict";

let contenedorPopUp = document.getElementsByClassName('contenedorPopUp');

function abrir(){
    contenedorPopUp[0].style.top = '0';
}

function cerrar(){
    contenedorPopUp[0].style.top = 'initial';
}