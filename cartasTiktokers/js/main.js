import { tiktokers } from "./data.js";

const pintar = (tiktokers) => {
    let carta = document.getElementsByClassName('cartas')[0];

    for (let index = 0; index < tiktokers.length; index++) {
        const imagenes = () => {
            for (let contarImg = 0; contarImg < tiktokers[index].estrellas; contarImg++) {
                let contenedorEstrella = document.createElement('div');
                contenedorEstrella.innerHTML = `<img src="img/estrella.png" class="imgEstrella" alt="estrella"></img>`;
                let estrella = document.getElementsByClassName('estrella')[index];
                estrella.appendChild(contenedorEstrella);
            }
        }

        let amarillo = document.createElement('div');
        amarillo.innerHTML = `
            <div class="carta">
                <div class="amarillo">
                    <div class="titulo">${tiktokers[index].nombre}</div>
                    <div class="estrella"></div>
                    <div class="img"></div>
                    <div class="informacion">
                        <div class="tipo">${tiktokers[index].tipo}</div>
                        <div class="descripcion">${tiktokers[index].info}</div>
                        <div class="especificaciones">${tiktokers[index].atk},${tiktokers[index].def}</div>
                    </div>
                </div>
            </div>`;
        carta.appendChild(amarillo);
        imagenes();
    }

    const imgTiktokers = () => {
        for (let bgi = 0; bgi < tiktokers.length; bgi++) {
            let bgiTiktokers = document.getElementsByClassName('img')[bgi];
            bgiTiktokers.style.backgroundImage = tiktokers[bgi].img;
        }
    }
    imgTiktokers();
}

pintar(tiktokers);
