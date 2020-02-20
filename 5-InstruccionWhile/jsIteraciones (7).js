/**
 * Enunciado:
 * Al presionar el botón pedir números hasta que el
 * USUARIO QUIERA e informar la suma acumulada y el promedio.
 */

function mostrar()
{
	//variables inicializadas
	var contador = 0;
	var acumulador = 0;
	//var respuesta = "si"; //Si usamos el metodo confirm() la variable debe tomar el valor true.
	var respuesta = true
	var numero;

	/**
	 * Nota personal: Si validamos una secuencia de ingreso de numeros debemos hacer un parseInt
	 * de la variable o parsearla al comienso y trabajar con la variable ya parseada.
	 */

	//while
	while (respuesta) {
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

		//respuesta = prompt("¿Quiere continuar? si o no"); //si queremos que sea mas especifico debemos validar.
		respuesta = confirm("¿Quiere continuar?"); //con este metodo nuestra variable toma valores true o false.
	}

	//muestro y resuelvo.
	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = acumulador / contador;

}//FIN DE LA FUNCIÓN