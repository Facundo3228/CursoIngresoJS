/*
* Enunciado:
* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
* "EXCELENTE" para notas igual a 9 o 10,
* "APROBÓ" para notas mayores a 4,
* "Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	//variables
	var numeroRandom;
	var maximo;
	var minimo;
	var mensaje;

	//inicialiso variables
	maximo = 11;
	minimo = 1;

	//Genero el número RANDOM entre 1 y 10
	numeroRandom = parseInt(Math.random() * (maximo - minimo)) + minimo;

	//condicional if/else
	if (numeroRandom >= 9) {
		mensaje = "EXCELENTE";
		alert(mensaje + " Su nota es: " + numeroRandom);
	} else {
		if (numeroRandom >= 4 && numeroRandom < 9) {
			mensaje = "APROBÒ";
			alert(mensaje + " Su nota es: " + numeroRandom);
		} else {
			mensaje = "VAMOS LA PROXIMA SE PUEDE";
			alert(mensaje + " Su nota es: " + numeroRandom);
		}
	}

}//FIN DE LA FUNCIÓN