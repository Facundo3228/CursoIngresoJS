/**
 * Enunciado:
 * Al presionar el botón pedir números hasta que el usuario quiera,
 * mostrar el número máximo y el número mínimo ingresado.
 */

/* function mostrar()
{
	//declarar variables y iniciarlas
	var numero;
	var bandera = true;
	var maximo;
	var minimo;
	var contador = 0;
	var respuesta = 'si';

	//while
	while(respuesta.toLowerCase() != 'no') {
		contador++;

		//le doy valor a la variable
		numero = prompt("Ingrese un numero" + contador);
		//parseInt a la variable numero
		numero = parseInt(numero);
		
		//validar
		while (isNaN(numero)) {

			//ingreso de datos erroneos, pedimos otra ves el dato
			numero = prompt(" Error... Ingrese un numero" + contador);
			//parseInt a la variable
			numero = parseInt(numero);		
		}

		//bandera y inicio de maximo y minimo
		if (bandera) {
			bandera = false; //cambio el valor de la variable bandera
			maximo = numero;
			minimo = numero;
		} else {
			//comparo los numeros ingresados
			if (numero > maximo) {
				maximo = numero;
			} else {
				minimo = numero;
			}
		}

		respuesta = prompt("¿Desea continuar? si o no");
	}

	//muestro los resultados
	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN */

function mostrar()
{
	//declarar variables y iniciarlas
	var numero;
	var bandera = true;
	var maximo;
	var minimo;
	var contador = 0;
	var respuesta = true; //respuesta = 'si'

	//while
	while(respuesta) {
		contador++;

		//do/validar
		do {
			//le doy valor a la variable
			numero = prompt("Ingrese un numero " + contador);
			//parseInt a la variable numero
			numero = parseInt(numero);
		} while (isNaN(numero));

		/**
		 * Nota Personal: Las banderas son variables que se instanian para marcar un punto inicial en el
		 * 				  programa dando inicio por primera vez un bloque de codigo.
		 */

		//bandera y inicio de maximo y minimo
		if (bandera) {
			bandera = false; //cambio el valor de la variable bandera
			maximo = numero;
			minimo = numero;
		}
		//comparo los numeros ingresados
		if (numero > maximo) {
			maximo = numero;
		} 
		if (numero < minimo) {
			minimo = numero;
		}

		respuesta = confirm("¿Desea continuar?");
	}

	//muestro los resultados
	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;
	
}//FIN DE LA FUNCIÓN