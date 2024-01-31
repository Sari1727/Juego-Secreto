/*let parrafo = document.querySelector ('p');
parrafo.innerHTML = 'Ingresa un número del 1 al 10'; ---> Se cambia a la funcion para reducir codigo*/

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[]; //almacena cada uno de los numeros para no volver a juhgar el mismo de manera continua
let numeroMaximo =10;

console.log(numeroSecreto); //de ayuda para ver el numero secreto*/
function asignarTextoElemento(elemento,texto) {
        let elementoHTML = document.querySelector(elemento); // ('h1') la forma en que java selecciona elementos. Es un objeto; puente de java con html
        elementoHTML.innerHTML = texto; //'Juego del número secreto';    
}

        function verificarIntento() 
        {
        let numeroDeUsuario= parseInt(document.getElementById('valorUsuario').value); //.value hace que muestre el valor, no solo el objeto
        //parseInt hace que el tipo sea numero.
        console.log (intentos);
        //console.log(numeroDeUsuario === numeroSecreto); retorna dato tipo boolean

        

        if (numeroDeUsuario === numeroSecreto)
        {
        asignarTextoElemento ('p', `Acertaste el número en ${intentos} ${(intentos == 1) ? 'vez' : 'veces'}`);
       document.getElementById('reiniciar').removeAttribute('disabled'); // habilita el botón "nuveo juego"

} else {
                //el usuario no acertó
        if(numeroDeUsuario>numeroSecreto) {
        asignarTextoElemento('p','El número es menor');
        } else {
        asignarTextoElemento('p','El número es mayor');
                }
        intentos ++;
        limpiarCaja ();
        }
        return;

}
function limpiarCaja(){
       document.querySelector ('#valorUsuario').value =''; // # -> lo queremos por ID
      
}

function generarNumeroSecreto()
{
       let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

       console.log (numeroGenerado);
       console.log (listaNumerosSorteados);
       //Ya sorteamos todos los numeros?
       if(listaNumerosSorteados.length == numeroMaximo)
       {
        asignarTextoElemento ('p','Ya se sortearon todos los números posibles')
       } else {


                //Si el numero generado esta incluido en la lista hacemos ua operacio, sino, hacemos otra
                 if (listaNumerosSorteados.includes (numeroGenerado)){
         return generarNumeroSecreto ();
                 } else {
                 listaNumerosSorteados.push(numeroGenerado)
         return numeroGenerado;
       }
}     }

function condicionesIniciales ()
{
        asignarTextoElemento('h1', 'Juego del número secreto');
        asignarTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}`);
        numeroSecreto = generarNumeroSecreto();
        intentos=1;

}

function reiniciarJuego()
{
        //limpiar la caja
        limpiarCaja();
        //indicar mensaje de intervalo de números.
        //generar número aleatorio nuevamente.
        //incializar el numero de intentos.
        condicionesIniciales();
         //deshabilitar botón "nuevo juego".
         document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();   