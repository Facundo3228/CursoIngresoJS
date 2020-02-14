/**
 * Enunciado:
 * al presionar el botón INICIAR se debe mostrar un mensaje de bienvenida "Bienvenidos a la UTN FRA"
 * cada 2 segundos, y mostrar la cantidad de veces mostrado (contador).
 * al presionar el botón FINALIZAR se debe detener los mensajes.
 */

//variables globales
var miIntervalo ;
var contador = 0;

function inicio()
{
	alert("function inicio.");
	miIntervalo = setInterval(SegundosEnElAire, 3000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {

	contador++;
    alert("Bienvenido a la UTN FRA, cantidad = " + contador);
    
}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	alert("function fin.");
	clearInterval(miIntervalo);

}//FIN DE LA FUNCIÓN fin