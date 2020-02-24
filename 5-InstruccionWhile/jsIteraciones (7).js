/**
 * Enunciado:
 * Al presionar el botón pedir números hasta que el
 * USUARIO QUIERA e informar la suma acumulada y el promedio.
 */

/* function mostrar()
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

	/* //while
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

}//FIN DE LA FUNCIÓN */

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

	//while que pregunta al usuario si quiere seguir
	while (respuesta) {
		contador++;

		// do/while valida el dato ingresado
		do {
			//le doy valor a la variable
			numero = prompt("Error... Ingrese el numero " + contador);	
			//parseInt a la variable numero
			numero = parseFloat(numero);			
		} while (isNaN(numero));

		//operacion de acumulacion (SUMA).
		acumulador += numero;

		//respuesta = prompt("¿Quiere continuar? si o no"); //si queremos que sea mas especifico debemos validar.
		respuesta = confirm("¿Quiere continuar?"); //con este metodo nuestra variable toma valores true o false.
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