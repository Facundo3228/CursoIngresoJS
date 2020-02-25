/**
 * Enunciado:
 * Bienvenidos.
 * Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre
 * el perímetro por alert.
 */

function mostrar()
{
    //variables
    var ancho;
    var largo;
    var perimetro;

    //inicializacion
    ancho = prompt("Ingrese el ancho del rectangulo:");
    largo = prompt("Ingrese el largo del rectangulo:");
    
    //parseo
    ancho = parseInt(ancho);
    largo = parseInt(largo);
    
    //Operacio
    perimetro = (ancho * 2) + (largo * 2);

    //muestro
    alert("El perimetro del rectangulo con Ancho: " + ancho + " y largo: " + largo + " es: " + perimetro);
}
