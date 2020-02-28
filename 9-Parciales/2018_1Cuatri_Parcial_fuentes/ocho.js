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
    var acumuladorNumeroPositivo = 0;
    var promedio;
    var contadorNumeroPositivo = 0;
    var acumuladorNumeroNegativos = 0;
    var numeroMaximo;
    var numeroMinimo;
    var letraMaximo;
    var letraMinimo;

    //varibles de control y inicio 
    var bandera = true;
    var respuesta = true;
    var mensaje;

    while (respuesta) {

        do {
            letraIngresada = prompt("Ingrese una letra: "); 
            /**
             * Nota personal: para validar una letra podemos usar el isNaN() negando el valor y para restringir la
             * cantidad de caracteres podemos usar la propiedad length-1 igualando la cantidad de caracteres
             * que queremos menos 1.
            */     
        } while ((! isNaN(letraIngresada.toLowerCase())) || letraIngresada.toLowerCase().length-1 != 0);

        do {
            numeroIngresado = prompt("Ingrese un numero entre -100 y 100: ");
            numeroIngresado = parseInt(numeroIngresado);
        } while (isNaN(numeroIngresado) || numeroIngresado < -100 || numeroIngresado > 100);
        
        //bandera
        if (bandera) {
            bandera = false;
            numeroMaximo = numeroIngresado; // 20  // 20  // 20 // 30 
            numeroMinimo = numeroIngresado; // 20  // 10  // 4  // 4
            letraMaximo = letraIngresada; // l  // l  // l  // k
            letraMinimo = letraIngresada; // l  // r  // g // g
        } else {
            //f) El número y la letra del máximo y el mínimo.    
            if (numeroIngresado > numeroMaximo) {
                numeroMaximo = numeroIngresado;
                letraMaximo = letraIngresada;
            } else if (numeroIngresado < numeroMinimo) {
                //¿Debo declarar la condicion?  si...  <-----
                numeroMinimo = numeroIngresado;
                letraMinimo = letraIngresada;
            }
        }

        //e) La suma de todos los números negativos.
        //d) El promedio de todos los números positivos ingresados.
        if (numeroIngresado < 0) {
            acumuladorNumeroNegativos += numeroIngresado;
        } else {
            acumuladorNumeroPositivo += numeroIngresado;
            contadorNumeroPositivo++;
        }

        //c) La cantidad de ceros ¡Atencion el cero es neutro!.
        //a) La cantidad de números pares. 
        //b) La cantidad de números impares. 
        if (numeroIngresado == 0) {
            cantidadCeros++;
        } else {
            if (numeroIngresado %2 == 0) {
                cantidadNumerosPares++;
            } else {
                cantidadNumerosImpares++;
            }
        }

        respuesta = confirm("¿QUIERE CONTINUAR?");
    }

    //operatoria promedio y validacion
    if (contadorNumeroPositivo != 0) {
        promedio = acumuladorNumeroPositivo / contadorNumeroPositivo;        
    } else {
        mensaje = "¡¡¡ NO SE PUEDE DIVIDIR POR 0 !!! USTED NO INGRESO NINGUN NUMERO POSITIVO...";
        promedio = mensaje;
    }
    
    //muestro por document.write()
    document.write("a) La cantidad de números pares: " + cantidadNumerosPares + "<br>" +
                   "b) La cantidad de números impares: " + cantidadNumerosImpares + "<br>" +
                   "c) La cantidad de ceros ¡Atencion el cero es neutro!: " + cantidadCeros + "<br>" +
                   "d) El promedio de todos los números positivos ingresados." + promedio + "<br>" +
                   "e) La suma de todos los números negativos: " + acumuladorNumeroNegativos + "<br>" +
                   "f) El número y la letra del máximo y el mínimo: <br>" +
                   "Letra y numero maximo: " + letraMaximo + " " + numeroMaximo + "<br>" +
                   "Letra y numero minimo: " + letraMinimo + " " + numeroMinimo);
}
