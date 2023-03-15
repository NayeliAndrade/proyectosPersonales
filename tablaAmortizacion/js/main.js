import { setListener } from "./setListeners.js";
setListener()

export function imprimir(e) {
    e.preventDefault(); 

    let prestamo = document.querySelector("#prestamo").value;
    const tazaInteres = document.querySelector("#interes").value / 100.0;
    const meses = document.querySelector("#meses").value;

    let tazaMensual = tazaInteres / 12

    let pagoMensual = prestamo * (tazaMensual / (1 - Math.pow((1 + tazaMensual), -meses)))

    if (!isNaN(prestamo) && !isNaN(tazaInteres) && !isNaN(tazaMensual)) {
        for (let i = 1; i <= meses; i++) {
            let interes = 0
            let amortizacion = 0

            let contenedorTablaAmortizacion = document.querySelector(".contenedorTablaAmortizacion")
            let template = document.querySelector("template").content
            let fragment = document.createDocumentFragment()

            template.querySelector(".tablaMeses").textContent = `${i}`
            template.querySelector(".tablaPago").textContent = `${pagoMensual.toFixed(2)}`

            interes = prestamo * tazaMensual
            template.querySelector(".tablaInteres").textContent = `${interes.toFixed(2)}`

            amortizacion = pagoMensual - interes
            template.querySelector(".tablaAmortizacion").textContent = `${amortizacion.toFixed(2)}`

            prestamo = prestamo - amortizacion
            template.querySelector(".tablaSaldo").textContent = `${prestamo.toFixed(2)}`
            

            const clone = template.cloneNode(true)
            fragment.appendChild(clone)
            contenedorTablaAmortizacion.appendChild(fragment)
        }
    }else{
        alert("Ingresa numeros")
    }
}



/* function getFile(){
    let inputFile = document.querySelector("#file");
    inputFile.addEventListener("click",(e)=>printWindow(e))
} */
