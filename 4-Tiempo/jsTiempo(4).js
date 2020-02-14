/**
 * Enunciado:
 * al presionar el botón INICIAR se debe mostrar un mensaje de bienvenida "Bienvenidos a la UTN FRA"
 * cada 2 segundos, al mostrar el mensaje 5 veces que se detenga AUTOMATICAMENTE.
 */

//variables globales
var miIntervalo ;
var contador = 0;

function inicio()
{
	alert("function inicio.");
	miIntervalo = setInterval(SegundosEnElAire, 2000);
	
}//FIN DE LA FUNCIÓN inicio

function SegundosEnElAire() 
{
	contador++;
    alert("Bienvenido a la UTN FRA, cantidad = " + contador);
    if (contador == 5)
    {
		clearInterval(miIntervalo);
		alert("Finalice en contador: " + contador);
		contador = 0;
	}
	
}//FIN DE LA FUNCIÓN SegundosEnElAire

function fin()
{
	alert("function fin. Contador: " + contador);
	clearInterval(miIntervalo);

}//FIN DE LA FUNCIÓN fin