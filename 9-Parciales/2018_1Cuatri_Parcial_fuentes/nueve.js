/**
 * Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100
(validar), la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al
terminar el ingreso por document.write:

a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.

Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 )
 */
function mostrar()
{
    //variables y inicio
    var marcaIngresada;
    var pesoIngresado;
    var temperaturaIngresada;

    var contadorPeso = 0;



    //ingreso de datos y validaciones
    do {
        marcaIngresada = prompt("Ingrese la marca ");
    } while (! isNaN(marcaIngresada.toLowerCase)());

    do {
        pesoIngresado = prompt("Ingrese el peso entre 1kg a 100kg ");
        pesoIngresado = parseInt(pesoIngresado);
    } while (isNaN(pesoIngresado) || pesoIngresado < 0 || pesoIngresado > 101);

    contadorPeso++; // cuento la cantidad de pesos ingresados para sacar el promedio

    do {
        temperaturaIngresada = prompt("Ingrese la temperatura de lmacenamiento entre -30º a 30º ");
        temperaturaIngresada = parseInt(temperaturaIngresada);
    } while (isNaN(temperaturaIngresada) || temperaturaIngresada < -30 || temperaturaIngresada > 30);



}
