/**
 * Enunciado:
 * al presionar el botón pedir un número entre 0 y 9 inclusive.
 */

/* function mostrar()
{
	//variables inicialisadas
	var numero = prompt("ingrese un número entre 0 y 10.");

	/**
	 * Nota personal: El metodo isNaN(variable) determina si un valor es NaN.
	 */

	/* //while <-----
	while (numero < 0 || numero > 9 || isNaN(numero)) {

		/**
		 * Nota personal: En las validaciones de datos con los ciclos al usar los operadores logicos
		 * tenr cuidado, recordar que siempre validamos lo que no es verdad, ya que si es correcto
		 * que prosiga su curso delocontrario queremos que entre al ciclo para poder validarlo.
		 */

		/* //ingreso de datos erroneos, pedimos otra ves el dato <------
		numero = prompt("Error... Ingrese un numero valido");
		
		//parseInt()
		numero = parseInt(numero);
	}

	//muestro.
	document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN */

function mostrar()
{
	//variables inicialisadas
	var numero;
	var contador = 0;

	/**
	 * Nota personal: El metodo isNaN(variable) determina si un valor es NaN.
	 */

	//do/while
	do {
		/**
		 * Nota personal: En las validaciones de datos con los ciclos al usar los operadores logicos
		 * tener cuidado, recordar que siempre validamos lo que no es verdad, ya que si es correcto
		 * que prosiga su curso de lo contrario queremos que entre al ciclo para poder validarlo.
		 */

		//si contador es igual a 3 termina el ciclo sin mostrar el resto del bloque de codigo.
        if (contador == 3) {
            break;
        }

		contador++;
		//ingreso de datos erroneos, pedimos otra ves el dato
		numero = prompt("ingrese un número entre 0 y 9.");
		
		//parseInt()
		numero = parseInt(numero);

	} while (numero < 0 || numero > 9 || isNaN(numero));

	//Le informo al usuario el comportamiento del programa
	if (contador == 3) {
		alert(contador + " Intentos maximos numeros incorrectos");		
	} else {
		alert("Usted ingreso un numero correcto ");
	}

	//muestro.
	document.getElementById("Numero").value = numero;
}//FIN DE LA FUNCIÓN