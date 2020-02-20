/**
 * Enunciado:
 * al presionar el botón pedir un número entre 0 y 9 inclusive.
 */

function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while (numero < 0 || numero > 9 || isNaN(numero)) {
		numero = prompt("error ingrese un numero valido");
		numero = parseInt(numero);
	}

	document.getElementById("Numero").value = numero;


}//FIN DE LA FUNCIÓN