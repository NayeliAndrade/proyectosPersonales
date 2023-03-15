"use strict"; 

let marginTop = 0; 
let marginLeft = 0;
let speed = 10;

let pikachu = document.getElementsByClassName('pikachu')[0];

/* let speedY = 0; */
 
document.addEventListener('keydown',(e)=>{
    /* console.log(e.key); */
     let key = e.key;
    
     switch (key) {
        
         case 'ArrowRight':
            marginLeft += speed;
            pikachu.style.marginLeft=marginLeft+'px';
            console.log(marginLeft);
            if (marginLeft === 1400){
                pikachu.style.marginLeft=0+'px';
                alert('estas en el limite de la pantalla.')
                marginLeft = 0;
            }
             break;
     
         case 'ArrowLeft':
            marginLeft -= speed;
            pikachu.style.marginLeft=marginLeft+'px';
            console.log(marginLeft);
            if (marginLeft === -10){
                pikachu.style.marginLeft=0+'px';
                alert('estas en el limite de la pantalla.')
                marginLeft = 0;
            }
             break;
 
         case 'ArrowUp':
            marginTop -= speed;
            pikachu.style.marginTop=marginTop+'px';
            console.log(marginTop);
            if (marginTop === -10){
                pikachu.style.marginTop=0+'px';
                alert('estas en el limite de la pantalla.')
                marginTop = 0;
            }
             break;
 
         case 'ArrowDown':
                marginTop += speed;
            pikachu.style.marginTop=marginTop+'px';
            console.log(marginTop);
            if (marginTop === 540){
                pikachu.style.marginTop=0+'px';
                alert('estas en el limite de la pantalla.')
                marginTop = 0;
            }
             break;
         default:
             
            
     }
 });

/* let pikachu = document.getElementsByClassName('pikachu')[0];

let speedX = 0;
let speedY = 0;
 
document.addEventListener('keydown',(e)=>{
    let key = e.key;

    switch (key) {
        case 'ArrowRight':
            speedX+=10
            let moveXR = pikachu.style.transform =`translateX(${speedX}px)`
            console.log(moveXR);
            break;
    
        case 'ArrowLeft':
            speedX-=10
            let moveXL = pikachu.style.transform =`translateX(${speedX}px)`
            console.log(moveXL);
            break;

        case 'ArrowUp':
            speedY-=10
            let moveYU = pikachu.style.transform =`translateY(${speedY}px)`
            console.log(moveYU);
            break;

        case 'ArrowDown':
            speedY+=10
            let moveYD = pikachu.style.transform =`translateY(${speedY}px)`
            console.log(moveYD);
            break;
        default:
            break;
    }
});  */