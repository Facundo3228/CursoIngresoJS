/*
* Enunciado:
* Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/

function mostrar()
{
	//variables
	var numeroRandom;
	var maximo;
	var minimo;

	//inicialiso variables
	maximo = 11;
	minimo = 1;

	//Genero el número RANDOM entre 1 y 10
	numeroRandom = parseInt(Math.random() * (maximo - minimo)) + minimo;

	//muestro el numero
	alert("el numero es: " + numeroRandom);

	

}//FIN DE LA FUNCIÓN