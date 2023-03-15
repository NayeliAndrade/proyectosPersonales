var textScreen='';
var total=0;
var typeOperation='';
var num1;
var decimalPoint=1;

function updateScreen(text){
    document.querySelector(".input").innerText=text;
}
function numbers(number){
        textScreen=textScreen+number;
        updateScreen(textScreen);
}
function point(){
    if(decimalPoint==1){
        textScreen=textScreen+'.';
        updateScreen(textScreen);
        decimalPoint=0;
    }
}
function cleanWindow(){
    textScreen='';
    total=0;
    typeOperation='';
}
function cleanOne(){
        textScreen=textScreen.toString();
        if(textScreen.length==1){
            cleanWindow();
        }
        else{
            textScreen=textScreen.slice(0,-1);
            updateScreen(textScreen);
        }  
}
function solve(operation){
    //Se activa la bandera de point por si el usuario quiere seguir ingresando otro flotante
    decimalPoint=1;
    //Para combinar operationes
    if((typeOperation==operation)||(typeOperation=='')){
        typeOperation=operation;
    }
    else{
        equal();
        typeOperation=operation;
    }
    //Por si el usuario presiona alguna tecla de operation sin haber ingresado un number
    if(textScreen=='')
    {
        console.log('window empty');
    }
    else{
        if(textScreen.includes('.'))
        {
            num1=parseFloat(textScreen);
            total=parseFloat(total);
        }
        else{
            num1=parseInt(textScreen);
        }
    
        if(total=='')
        {
            total=num1;
            updateScreen(total);
            textScreen='';
        }
        else{
            switch(operation){
                case '+':
                    total+=num1;
                    break;
                case '-':
                    total-=num1;
                    break;
                case '*':
                    total*=num1;
                    break;
                case '/':
                    total/=num1;
                    break;
                default:
                    break;
            }
            updateScreen(total);
            textScreen='';
        }
    }
}

function equal(){
    solve(typeOperation);
    typeOperation='';
}
