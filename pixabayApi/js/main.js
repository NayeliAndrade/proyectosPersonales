"use strict";
let container = document.querySelector(".container");

function dataInput() {
  let btnSearch = document.querySelector(".buttonSearch");
  btnSearch.addEventListener("click", () => {
    let wordSearch = document.querySelector("input").value;
    /* if(wordSearch.trim() === ""){
        alert('Escribe algo por favor');  
        return;
    } */
    if (!validation(wordSearch)) return;
    makeRequest(wordSearch);
    clearInput();
    clearWindow(container);
  });
}

function validation(wordSearch) {
  if (wordSearch.trim() === "") {
    alert("Escribe algo por favor");
    return false;
  }
  return true;
}

function makeRequest(wordSearch) {
  fetch(`https://pixabay.com/api/?key=28447089-bfc88bc737501f66f3560f214&q=${wordSearch}`)
    .then((response) => response.json())
    .then((data) => printInfo(data))
    .catch((err) => console.log("Request fail", err));
}

function clearInput() {
    document.getElementsByTagName("input")[0].value = " ";
}

function printInfo(data) {
    let imagenes = data.hits;
    /* console.log(imagenes); */
    imagenes.map((imagen) => {
    const { previewURL, pageURL, type, likes, downloads } = imagen;

    let element = document.createElement("div");
    element.innerHTML = `
    <div class="containerImages">
            <div class="img">
            <img src="${previewURL}" alt="">
            </div>
            <span><h2>Tipo:</h2><p>${type}</p></span>
            <span><h2>Likes:</h2><p>${likes}</p></span>
            <span><h2>Descargas:</h2><p>${downloads}</p></span>
            <a href="${pageURL}" target="_blank">Link de la imagen</a>
        </div>
    `;
    container.appendChild(element);
  });
}

function clearWindow(container) {
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
}

function textInitial(){
    let text2 = "Busca tus imagenes favoritas en esta página, consumiras una API de la página PIXABAY"
    let text = document.createElement("div");
    text.innerHTML = `
    <p class="textEmpty">${text2}</p>
    `;
    container.appendChild(text)
}
/* inicializacion */
dataInput();
textInitial();