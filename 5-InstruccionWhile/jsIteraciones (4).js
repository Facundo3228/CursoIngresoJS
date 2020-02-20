/**
 * Enunciado:
 * al presionar el botón pedir un número entre 0 y 9 inclusive.
 */

function mostrar()
{
	//variables inicialisadas
	var numero = prompt("ingrese un número entre 0 y 10.");

	/**
	 * Nota personal: El metodo isNaN(variable) determina si un valor es NaN.
	 */

	//while
	while (numero < 0 || numero > 9 || isNaN(numero)) {

		/**
		 * Nota personal: En las validaciones de datos con los ciclos al usar los operadores logicos
		 * tenr cuidado, recordar que siempre validamos lo que no es verdad, ya que si es correcto
		 * que prosiga su curso delocontrario queremos que entre al ciclo para poder validarlo.
		 */

		//ingreso de datos erroneos, pedimos otra ves el dato
		numero = prompt("Error... Ingrese un numero valido");
		
		//parseInt()
		numero = parseInt(numero);
	}

	//muestro.
	document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN