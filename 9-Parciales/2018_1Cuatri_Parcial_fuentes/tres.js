/**
 * Enunciado:
 * Bienvenidos.
 * Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
 */

function mostrar()
{
    //variables
    var precio;
    var descuento;
    var auxDescuento;
    var precioFinal;

    //inicio de variables
    precio = prompt("Ingrese el valor del producto: ");
    descuento = prompt("Ingrese el descuento del producto: ");

    //parceo
    precio = parseInt(precio);
    descuento = parseInt(descuento);

    //operaciones
    auxDescuento = (precio * descuento) / 100;
    precioFinal = precio - auxDescuento;

    //muestro
    document.getElementById("elPrecioFinal").value = precioFinal;
}
