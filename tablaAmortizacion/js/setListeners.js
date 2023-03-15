import { imprimir } from "./main.js";

export function setListener() {
    const form = document.querySelector("form")
    form.addEventListener("submit", function (e) {
        e.preventDefault()
        imprimir(e)})
}

