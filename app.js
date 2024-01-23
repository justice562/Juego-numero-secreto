
let intentos = 1;
let numerosSorteados=[];
let numeroMaximo = 10;
let numeroSecreto = generarNumeroAleatorio();
numerosSorteados.push(numeroSecreto);

asignarTexto('h1','Juego del numero secreto');
asignarTexto('p','Indica un numero del 1 al 10');


function asignarTexto(elemento,texto){
let elementoHtml = document.querySelector(elemento);
elementoHtml.innerHTML= texto;
}


function generarNumeroAleatorio(){
    return Math.floor(Math.random()*numeroMaximo)+1;
}

function verificarIntento(){
    
    let numeroUsuario = parseInt(document.getElementById('numeroIntento').value);


    if (numeroUsuario === numeroSecreto){
        asignarTexto('p','Acertaste el numero, lo lograste en: '+intentos +`${(intentos===1 ? ' vez' : ' veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); 
    }
    else{
        if (numeroUsuario>numeroSecreto){
            asignarTexto('p','El numero secreto es menor');
        }
        else{
            asignarTexto('p','El numero secreto es mayor');
        }
        limpiarCaja();
    }
    intentos++;
}
function limpiarCaja(){
    document.getElementById('numeroIntento').value = '';

}
function reiniciarJuego(){
    numeroSecreto = generarNumeroAleatorio();
    limpiarCaja();
    asignarTexto('p','Indica un numero del 1 al 10');
    document.getElementById('reiniciar').setAttribute('disabled',true);
    intentos=1;
    crearNuevoNumero();
    console.log(numerosSorteados);
}

function crearNuevoNumero(){
    let nuevoNumero = generarNumeroAleatorio();
    if(numerosSorteados.length == numeroMaximo){
        asignarTexto('p','ya se sortearon todos los numeros');
    }
    else{
        if(numerosSorteados.includes(nuevoNumero)){
            crearNuevoNumero();
        }
        else{
            numeroSecreto = nuevoNumero;
            numerosSorteados.push(numeroSecreto); 
        }
    }
    

}
