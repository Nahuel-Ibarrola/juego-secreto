let numeroSecretoJuego=0;
let intentos=0;
let numerosGenerados=[];
let numeroMaximo=10;
let vecesJugadas=0;

function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
}

function numeroSecreto(){
   let numeroGeneradoSecreto= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGeneradoSecreto);
    console.log(numerosGenerados);
    console.log("veces jugadas:",vecesJugadas);
    
    if(numerosGenerados.length==numeroMaximo || vecesJugadas==3){
        asignarTextoElemento('p',"Ya se sortearon todos los numeros, FIN DEL JUEGO!");
    }
    else{
        vecesJugadas++;
        if(numerosGenerados.includes(numeroGeneradoSecreto)){
            return numeroSecreto();
        }
        else{
            numerosGenerados.push(numeroGeneradoSecreto);
            return numeroGeneradoSecreto;
        }
    }
    
}

function verificarNumero(){
    let numeroDeUsuario= parseInt(document.getElementById(`numeroIngresado`).value);
    
    console.log(typeof(numeroSecretoJuego));
    if (numeroSecretoJuego === numeroDeUsuario){
        asignarTextoElemento(`p`,`Acertaste el numero en ${intentos} ${intentos ==1 ? "vez":"veces"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(numeroDeUsuario>numeroSecretoJuego){
            asignarTextoElemento(`p`,"el numero secreto es menor");
        }
        else{
            asignarTextoElemento(`p`,"el numero secreto es mayor");
        }
    }
   // console.log("intentos:",intentos);
    intentos++;
    LimpiarJuego();
    return;
}

function LimpiarJuego(){
    document.querySelector('#numeroIngresado').value= '';
}

function condicionesIniciales(){
    asignarTextoElemento(`h1`, "Juego del numero secreto!");
    asignarTextoElemento(`p`, `Elige un numero del 1 al ${numeroMaximo}!`);
    numeroSecretoJuego = numeroSecreto();
    intentos=1;
}

function reiniciarJuego() {
    //limpiar la caja
    //indicar el rango de numero
    //generar el numero aletorio 
    LimpiarJuego();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled',true);
    console.log(numeroSecretoJuego);
}

condicionesIniciales();
console.log(numeroSecretoJuego);