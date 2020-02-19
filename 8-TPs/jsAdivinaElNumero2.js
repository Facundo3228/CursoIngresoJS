/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

//variables globales
var numeroSecreto;
var numeroIngresado; 
var contadorIntentos = 0;
var intentos;
var maximo;
var minimo;
var mensaje;

function comenzar()
{
	//inicialiso variables
	maximo = 101;
	minimo = 1;

	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = parseInt(Math.random() * (maximo - minimo)) + minimo;

	//muestro el numero
	alert("El numero secreto fue creado. " + numeroSecreto);
}

function verificar()
{
	//inicialiso variables
	numeroIngresado = document.getElementById("numero").value;
		
	if (numeroIngresado == numeroSecreto) {
		contadorIntentos++;
		alert("Usted es un ganador!!! " + numeroSecreto + " y en solo " + contadorIntentos + " intentos.");

		//muestro la cantidad de veses intentadas.
		document.getElementById("intentos").value = contadorIntentos;

		//recupero el valor de contadorIntentos en la variable intentos.
		intentos = document.getElementById("intentos").value;

		//esto podria remplasarse por un swich 
		if (intentos == 1) {
			mensaje = "usted es un Psíquico";
			//alert(mensaje + " Intentos: " + contadorIntentos);
		} else {
			if (intentos == 2) {
				mensaje = "excelente percepción";
				//alert(mensaje + " Intentos: " + contadorIntentos);
			} else {
				if (intentos == 3) {
					mensaje = "Esto es suerte";
				} else {
					if (intentos == 4) {
						mensaje = "Excelente técnica";
					} else {
						if (intentos == 5) {
							mensaje = "usted está en la media";
						} else {
							if (intentos > 5 && contadorIntentos < 11) {
								mensaje = "falta técnica";
							} else {
								mensaje = "afortunado en el amor!!";
							}
						}
					}
				}
			}
		}

		alert(mensaje + " Intentos: " + intentos);

	} else {
		contadorIntentos++;
		if (numeroSecreto < 50) {
			alert("el numero se encuentra entre 1 y 49");
		} else {
			alert("el numero se encuentra entre 50 y 100");
		}
	}
	//asigno lo que tenga contadorIntentos a contadorIntentos.
	contadorIntentos = contadorIntentos;
	
	//Nota personal: Adiferencia de la vercion anterior antes de enviar los mensajes debo mostrar
	//el valor del contador, luego recuperarlo y compararlo con las posibilidades de cada mensaje.
}