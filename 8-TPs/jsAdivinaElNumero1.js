/*
* Al comenzar el juego generamos un número 
* secreto del 1 al 100, en la pantalla del juego
* dispondremos de un cuadro de texto para ingresar
* un número y un botón “Verificar”, si el número 
* ingresado es el mismo que el número secreto se dará 
* por terminado el juego con un mensaje similar a este: 
* “Usted es un ganador!!! y en solo X intentos”.
* de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…” 
* del número secreto.
*/

//variables globales
var numeroSecreto;
var numeroIngresado; 
var contadorIntentos = 0;
var maximo;
var minimo;

function comenzar()
{
	//inicialiso variables
	maximo = 101;
	minimo = 1;
	contadorIntentos = 0; //reinicio el contadorIntentos

	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = parseInt(Math.random() * (maximo - minimo)) + minimo;

	//muestro el numero
	alert("El numero secreto fue creado. " + numeroSecreto);
}

function verificar()
{
	//inicialiso variables
	numeroIngresado = document.getElementById("numero").value;
	contadorIntentos++;

	if (numeroIngresado == numeroSecreto) {
		//contadorIntentos++;
		alert("Usted es un ganador!!! " + numeroSecreto + " y en solo " + contadorIntentos + " intentos.");	
	} else {
		//contadorIntentos++;
		if (numeroSecreto < 50) {
			alert("el numero se encuentra entre 1 y 49");
		} else {
			alert("el numero se encuentra entre 50 y 100");
		}
	}
	//asigno lo que tenga contadorIntentos a contadorIntentos.
	contadorIntentos = contadorIntentos;
	document.getElementById("intentos").value = contadorIntentos;
}

/**
 * Nota personal rebisar en casa metodo contador.
 */