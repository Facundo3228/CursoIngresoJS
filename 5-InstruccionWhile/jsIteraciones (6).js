/**
 * Enunciado:
 * Al presionar el botón pedir 5 números e informar
 * la suma acumulada y el promedio.
 */

/* function mostrar()
{
	//variables inicializadas
	var contador = 0;
	var acumulador = 0;
	var numero;

	/**
	 * Nota personal: Si validamos una secuencia de ingreso de numeros debemos hacer un parseInt
	 * de la variable o parsearla al comienso y trabajar con la variable ya parseada.
	 */

	/* //while  <------
	while (contador < 5) {
		contador++;

		//le doy valor a la variable
		numero = prompt("Ingrese el numero " + contador);
		//parseInt a la variable numero
		numero = parseFloat(numero); //¿Es necesario parsear la variable? Respuesta:

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

	//validacion de divicion por 0 para mostrar el promedio
	if (contador == 0) {
		document.getElementById('promedio').value = "Error no se puede dividir por 0" + acumulador + "/" + contador;	
	} else {
		document.getElementById('promedio').value = acumulador / contador;	
	}
}//FIN DE LA FUNCIÓN */

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

	//while para contar cantidad fija
	while (contador < 5) {
		contador++;

		//validar con do/while
		do {
			//le doy valor a la variable
			numero = prompt("Ingrese el numero " + contador);	
			//parseFloat a la variable numero
			numero = parseFloat(numero);

		} while (isNaN(numero));

		//operacion de acumulacion (SUMA).
		acumulador += numero;	
	}

	//muestro y resuelvo.
	document.getElementById('suma').value = acumulador;

	//validacion de divicion por 0 para mostrar el promedio
	if (contador == 0) {
		//Esta validacion y bloque de codigo no tiene centido.
		document.getElementById('promedio').value = "Error no se puede dividir por 0" + acumulador + "/" + contador;	
	} else {
		document.getElementById('promedio').value = acumulador / contador;	
	}
}//FIN DE LA FUNCIÓN