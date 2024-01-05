"use strict";

let user = [];
let noUser = 0;


function clearInput(user, pass) {
    user.value = ' ';
    pass.value = ' ';
}

function createText(list) {

    let container = document.getElementsByClassName('containerText')[0];
    let element = document.createElement('p');
    element.innerHTML = `Nombre: ${list[0]}`;
    container.appendChild(element);

    let element2 = document.createElement('p');
    element2.innerHTML = `Contraseña: ${list[1]}`;
    container.appendChild(element2);
}

function saveInfo(info) {
    user[noUser] = info;
    noUser++;
}

function getInfo(input) {
    return input.value;
}

function save() {
    let user = document.getElementById('user');
    let pass = document.getElementById('pass');

    let userFinal = [];

    userFinal[0] = getInfo(user);
    userFinal[1] = getInfo(pass);

    saveInfo(userFinal);
    clearInput(user, pass);
}

function lookList() {
    let container = document.getElementsByClassName('containerText')[0];
    cleanLookList(container);
    for (let index = 0; index < user.length; index++) {
        let lista = user[index];
        createText(lista);
    }
}

function cleanLookList(container) {
    container.innerHTML = ' ';
}