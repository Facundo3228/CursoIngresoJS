/**
 * Enunciado:
 * Al presionar el botón pedir 5 números e informar
 * la suma acumulada y el promedio.
 */

function mostrar()
{
	//variables inicializadas
	var contador = 0;
	var acumulador = 0;
	var numero;

	/**
	 * Nota personal: Si validamos una secuencia de ingreso de numeros debemos hacer un parseInt
	 * de la variable o parsearla al comienso y trabajar con la variable ya parseada.
	 */

	//while
	while (contador < 5) {
		contador++;

		//le doy valor a la variable
		numero = prompt("Ingrese el numero " + contador);
		//parseInt a la variable numero
		numero = parseFloat(numero);

		//validar
		while (isNaN(numero)) {

			//ingreso de datos erroneos, pedimos otra ves el dato
			numero = prompt("Error... Ingrese el numero " + contador);	
			//parseInt a la variable numero
			numero = parseFloat(numero);
		}

		//operacion de acumulacion (SUMA).
		acumulador += numero;	
	}

	//muestro y resuelvo.
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;
}//FIN DE LA FUNCIÓN