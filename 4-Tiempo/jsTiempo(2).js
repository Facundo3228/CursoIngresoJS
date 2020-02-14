/** 
 * Enunciado:
 * al presionar el botón INICIAR se debe mostrar un mensaje de bienvenida "Bienvenidos a la UTN FRA"
 * cada 3 segundos.
 * al presionar el botón FINALIZAR se debe detener los mensajes.
 */

 //variables globales
var miIntervalo ;

function inicio()
{
	alert("function inicio.");
	miIntervalo = setInterval(SegundosEnElAire, 3000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() {

    alert("Bienvenido a la UTN FRA");
    
}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	alert("function fin.");
	clearTimeout(miIntervalo);

}//FIN DE LA FUNCIÓN fin