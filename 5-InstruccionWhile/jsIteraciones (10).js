/**
 * Enunciado:
 * Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
 * 1-Suma de los negativos.
 * 2-Suma de los positivos.
 * 3-Cantidad de positivos.
 * 4-Cantidad de negativos. 
 * 5-Cantidad de ceros. 
 * 6-Cantidad de números pares. 
 * 7-Promedio de positivos. 
 * 8-Promedios de negativos. 
 * 9-Diferencia entre positivos y negativos, (positvos - negativos).
 */

function mostrar()
{
	//declarar contadores, acumuladores, variables y inicialisacion
	var numeroIngresado;
	var acumuladorPositivo = 0;
	var acumuladorNegativo = 0;
	var contadorPositivo = 0;
	var contadorNegativo = 0;
	var contadorCero = 0;
	var contadorPares = 0;
	var contador = 0;
	var promedioPositivo;
	var promedioNegativo;
	var diferenciaPositNegat;
	var respuesta = true;

	//while remplaso: (respuesta.toLowerCase() != "no")
	while(respuesta) {
		contador++;

		//le doy valor a la variable
		numeroIngresado = prompt("Ingrese el numero " + contador);
		//parseInt a la variable numero
		numeroIngresado = parseInt(numeroIngresado);

		//validacion
		while (isNaN(numeroIngresado)) {

			//ingreso de datos erroneos, pedimos otra ves el dato
			numeroIngresado = prompt(" Error... Ingrese el numero " + contador);
			//parseInt a la variable
			numeroIngresado = parseInt(numeroIngresado);
		}
		
		//oprtaciones IF/ELSE
		if (numeroIngresado >= 0) {
		
			contadorPositivo++;
			acumuladorPositivo += numeroIngresado;
		
		} else {
			
			if (numeroIngresado == 0) {
				contadorCero++;
			}

			contadorNegativo++;
			acumuladorNegativo += numeroIngresado;
		}

		if (numeroIngresado % 2 == 0) {
			contadorPares++;
		}

		respuesta = confirm("¿Quiere continuar?");
	
		/* respuesta = prompt("¿Quiere continuar? si o no");

		//validacion de respuesta si o no
		while (respuesta.toLowerCase != "si" && respuesta.toLowerCase != "no") {
			respuesta = prompt("Error... ¿Quiere continuar? SI o NO");			
		} */
	}

	//operaciones y validaciones
	if (contadorPositivo != 0) {
		promedioPositivo = acumuladorPositivo / contadorPositivo;
	}

	if (contadorNegativo != 0) {
		promedioNegativo = acumuladorNegativo / contadorNegativo;
	}

	diferenciaPositNegat = acumuladorNegativo - acumuladorPositivo;

	//muestro por document.write
	document.write(" 1-Suma de los negativos: " + acumuladorNegativo + "</br>" +
				   " 2-Suma de los positivos: " + acumuladorPositivo + "</br>" +
				   " 3-Cantidad de positivos: " + contadorPositivo + "</br>" +
				   " 4-Cantidad de negativos: " + contadorNegativo + "</br>" +
				   " 5-Cantidad de ceros: " + contadorCero + "</br>" +
				   " 6-Cantidad de números pares: " + contadorPares + "</br>" +
				   " 7-Promedio de positivos: " + promedioPositivo + "</br>" +
				   " 8-Promedios de negativos: " + promedioNegativo + "</br>" +
				   " 9-Diferencia entre positivos y negativos: " + diferenciaPositNegat);

}//FIN DE LA FUNCIÓN