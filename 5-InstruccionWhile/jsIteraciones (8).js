/**
 * Enunciado:
 * Al presionar el botón pedir números hasta que el usuario quiera,
 * sumar los que son positivos y multiplicar los negativos.
 */

function mostrar()
{
	//variables inicializadas
	var contador = 0;
	var positivo = 0; //acumulador positivos
	var negativo = 1; //acumulado negativos
	var numeroIngresado;
	var numeroParseado;
	var respuesta = true;

	/**
	 * Nota personal: Si validamos una secuencia de ingreso de numeros debemos hacer un parseInt
	 * de la variable o parsearla al comienso y trabajar con la variable ya parseada.
	 */
	
	//while
	while (respuesta) {
		contador++;

		//le doy valor a la variable
		numeroIngresado = prompt("Ingrese el numero " + contador);
		//parseInt a la variable numero
		numeroParseado = parseInt(numeroIngresado);

		//validar
		while (isNaN(numeroParseado)) {

			//ingreso de datos erroneos, pedimos otra ves el dato
			numeroIngresado = prompt("Error... Ingrese el numero " + contador);	

			/**
			 * Nota: Analizar...
			 * 		 1: ¿Porque la multiplicacion da 1?
			 * 		 2: ¿Es necesario crear una variable indistinta a la variable principal de ingreso
			 * 			de datos parsearla en otra variable y controlar los datos con la variable ya parseada?
			 */

			//parseInt a la variable numero
			numeroParseado = parseInt(numeroIngresado);
		}

		//operacion de los valores ingresados
		if (numeroParseado >= 0) {
			positivo += numeroParseado;
		} else {
			negativo = negativo * numeroParseado;
		}

		respuesta = confirm("¿Desea continuar?");//con este metodo nuestra variable toma valores true o false.		
	}

	//muestro los resultados
	document.getElementById('suma').value = positivo;
	document.getElementById('producto').value = negativo;

}//FIN DE LA FUNCIÓN