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
	var respuesta = "si";
	var numero;

	//while
	while (respuesta == "si") {
		contador++;

		//le doy valor a la variable
		numero = prompt("Ingrese el numero " + contador);
		//parseInt a la variable numero
		numero = parseFloat(numero);

		//validar
		while (isNaN(numero)) {
			numero = prompt("Error... Ingrese el numero " + contador);	
			//parseInt a la variable numero
			numero = parseFloat(numero);
		}

		acumulador += numero;

		respuesta = prompt("¿Quiere continuar? si o no");
		//respuesta = confirm("¿Quiere continuar?");
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN