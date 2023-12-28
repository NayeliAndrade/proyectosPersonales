"use strict";

let marginTop = 0;
let marginLeft = 0;
let speed = 10;

let pikachu = document.getElementsByClassName('pikachu')[0];

let valueButtonScreen = () => {
    let value;
    let buttons = document.querySelectorAll("button");
    for (const button of buttons) {
        button.addEventListener("click", (e) => {
            value = e.target.classList[0];
            move(value)
        });
    }
}

let move = (value) => {
    if (value) {
        switch (value) {
            case "d":
                marginLeft += speed;
                break;
            case "a":
                marginLeft -= speed;
                break;
            case "w":
                marginTop -= speed;
                break;
            case "s":
                marginTop += speed;
                break;
        }
        pikachu.style.marginLeft = marginLeft + 'px';
        pikachu.style.marginTop = marginTop + 'px';

        checkLimits();
    } else {
        document.addEventListener('keydown', (e) => {
            const key = e.key;

            if (key === 'ArrowRight' || key === "d") {
                marginLeft += speed;
            } else if (key === "ArrowLeft" || key === "a") {
                marginLeft -= speed;
            } else if (key === "ArrowUp" || key === "w") {
                marginTop -= speed;
            } else if (key === "ArrowDown" || key === "s") {
                marginTop += speed;
            }

            pikachu.style.marginLeft = marginLeft + 'px';
            pikachu.style.marginTop = marginTop + 'px';

            checkLimits();
        });
    }
};


let checkLimits = () => {
    if (marginLeft >= 620) {
        pikachu.style.marginLeft = 0 + 'px';
        alert('estas en el limite de la pantalla.');
        marginLeft = 0;
    } else if (marginLeft <= -10) {
        pikachu.style.marginLeft = 0 + 'px';
        alert('estas en el limite de la pantalla.');
        marginLeft = 0;
    }

    if (marginTop >= 260) {
        pikachu.style.marginTop = 0 + 'px';
        alert('estas en el limite de la pantalla.');
        marginTop = 0;
    } else if (marginTop <= -10) {
        pikachu.style.marginTop = 0 + 'px';
        alert('estas en el limite de la pantalla.');
        marginTop = 0;
    }
}

move()
valueButtonScreen();