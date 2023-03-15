"use strict"; 

/* funciones */
/* var usuario = prompt('cual es tu nombre'); 

function mensaje(usuario){
    console.log('hs ' + usuario);
}
mensaje(usuario); */

/* funciones se encargan de hacer una cosas */
/* parametros */

/* function clearInput(input){
    input.value = '';
}

function createText(text){
    var container = document.getElementsByClassName('texto')[0];
    var element = document.createElement('p');
    element.innerHTML = text;
    container.appendChild(element);
}

function getInfo(input){ */
    /* var input = document.getElementById('user'); */

/*     createText(input.value);
    clearInput(input);
}

function init(){
    var user = document.getElementById('user');
    var pass = document.getElementById('pass');
    getInfo(user);
    getInfo(pass);
}
 */
var usuarios = [];
var noUsuarios = 0;


function clearInput(user,pass){
    user.value = ' ';
    pass.value = ' ';
}

function createText(lista){
    
    var container = document.getElementsByClassName('texto')[0];
    var element = document.createElement('p');
    element.innerHTML = lista;
    container.appendChild(element);
}

function saveInfo(info){
    usuarios[noUsuarios] = info;
    noUsuarios++;
    console.log(usuarios);
}

function getInfo(input){
    return input.value;
}

function guardar(){
    var user = document.getElementById('user');
    var pass = document.getElementById('pass');

    var usuarioFinal = [];

    usuarioFinal[0] = getInfo(user);
    usuarioFinal[1] = getInfo(pass);

    saveInfo(usuarioFinal);
    console.log(usuarioFinal);
    clearInput(user,pass);
}

function verLista(){
    var container = document.getElementsByClassName('texto')[0];
    limpiarBtnVerLista(container);
    for (var index = 0; index < usuarios.length; index++){
       var lista = usuarios[index];
       createText(lista);
    }
}

function limpiarBtnVerLista(container){
    container.innerHTML = ' ';
}

/* tarea terminar la lista  */
/* return 
pasar parametros funciones 
guardar variable en una funcion 
 */

/* function mensaje(nombre){
    var bienvenida = 'bienvenido ' + nombre;
    return bienvenida;
}
var nuevoMensaje = mensaje('pedro'); */