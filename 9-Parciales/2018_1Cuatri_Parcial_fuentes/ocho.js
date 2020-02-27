/**
 * Enunciado:
 * Bienvenidos. 
 * Realizar el algoritmo que permita iterar el ingreso de dos datos,
 * una letra y un número entre -100 y 100 (validar) hasta que el usuario
 * quiera e informar al terminar el ingreso por document.write: 
 * a) La cantidad de números pares. 
 * b) La cantidad de números impares. 
 * c) La cantidad de ceros. 
 * d) El promedio de todos los números positivos ingresados. 
 * e) La suma de todos los números negativos. 
 * f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos 
( d , -150(mal) , -50(bien)) 
( z , 0) 
( g , 20) 
( a , 150(mal) , 0(bien)) 
( b , 3) 
( k , 7)
 */

function mostrar()
{
    //variables y inisializacion 
    var letraIngresada;
    var numeroIngresado;
    var cantidadNumerosPares = 0;
    var cantidadNumerosImpares = 0;
    var cantidadCeros = 0;
    var numeroPositivo;
    var promedio;
    var acumuladorNumeroNegativos;
    var numeroMaximo;
    var numeroMinimo;
    var letraMaximo;
    var letraMinimo;

    var bandera = true;
    var respuesta = true;

    while (respuesta) {

        do {
            letraIngresada = prompt("Ingrese una letra: ");      
        } while (!(isNaN(letraIngresada.toLowerCase())));

        do {
            numeroIngresado = prompt("Ingrese un numero entre -100 y 100: ");
            numeroIngresado = parseInt(numeroIngresado);
        } while (isNaN(numeroIngresado) || numeroIngresado < -100 || numeroIngresado > 100);

        
        //f) El número y la letra del máximo y el mínimo.
        if (bandera) {
            bandera = false;
            var numeroMaximo = numeroIngresado;
            var numeroMinimo = numeroIngresado;
            var letraMaximo = letraIngresada;
            var letraMinimo ; 
            
        }






        respuesta = confirm("¿QUIERE CONTINUAR?");
    }

}
