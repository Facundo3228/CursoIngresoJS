/**
 * 2. Para el departamento de Construcción:
 * A. mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno
 * rectangular y se debe alambra con tres hilos de alambre.
 * B. mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular
 * y se debe alambra con tres hilos de alambre.
 * C. Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal,
 * debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

//varibles globales
var largoIngresado;
var largoParseado;
var anchoIngresado;
var anchoParseado;
var totalAlambre;

function Rectangulo () 
{

    //inicio de bariables
    largoIngresado = document.getElementById("Largo").value;
    anchoIngresado = document.getElementById("Ancho").value;

    //parseo de variables
    largoParseado = parseFloat(largoIngresado);
    anchoParseado = parseFloat(anchoIngresado);

    //operaciones
    totalAlambre = (largoParseado + anchoParseado) * 2; //Formula para sacar el perimetro.
    totalAlambre = totalAlambre * 3;

    //muestro el resultado
    alert("La cantidad de alambre segun el " + largoIngresado + " y " + anchoIngresado + " es de: " + totalAlambre + " por 3");

}
function Circulo () 
{
    //variables
    var radioIngresado;
    var radioParseado;
    var constantePi;

    //inicio de bariables
    radioIngresado = document.getElementById("Radio").value;
    constantePi = 3.14;

    //parseo de variables
    radioParseado = parseFloat(radioIngresado);

    //operaciones
    totalAlambre = (radioParseado * 2) * constantePi; //Formula para sacar el perimetro.
    totalAlambre = totalAlambre * 3;

    //muestro el resultado
    alert("La cantidad de alambre segun el " + radioIngresado + " es de: " + totalAlambre + " por 3");

	
}
function Materiales () 
{
    //variables
    var totalArea;
    var totalCemento;
    var totalCal;

    //inicio de bariables
    largoIngresado = document.getElementById("Largo").value;
    anchoIngresado = document.getElementById("Ancho").value;

    //parseo de variables
    largoParseado = parseFloat(largoIngresado);
    anchoParseado = parseFloat(anchoIngresado);

    //operaciones
    totalArea = (largoParseado * anchoParseado) * 2;
    totalCemento = totalArea * 2;
    totalCal = totalArea * 1;
   
    //muestro el resultado
    alert("La cantidad de cemento y cal segun el " + largoIngresado + " y " + anchoIngresado + " es de: " + totalCemento + " cemento y " + totalCal + " cal.");

	
}