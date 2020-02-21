/**
 * Enunciado:
 * Al presionar el botón pedir números hasta que el usuario quiera,
 * mostrar el número máximo y el número mínimo ingresado.
 */

function mostrar()
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




}//FIN DE LA FUNCIÓN