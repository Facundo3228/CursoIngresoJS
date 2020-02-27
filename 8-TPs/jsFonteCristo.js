/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo
  nos está pidiendo una aplicación que verifique las distintas cualidades de 
  los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar
las cualidades pedidas:

A.	Se pedirán un número positivo y se mostrará la cantidad de números pares
desde el número ingresado hasta el cero.

B.	Se pedirán un número positivo y se mostrará la cantidad de números pares
desde el número ingresado hasta el cero.

C.	Se pedirán un número positivo y se mostrará la cantidad de números
divisibles de este número que se encuentran desde el 1 al 100.

D.	Se pedirán un número positivo y se mostrará si el número es un número
primo o no.

E.	Se pedirán un número positivo y se mostrará la cantidad de números Primos
desde el número ingresado hasta el cero.
*/

function ComenzarIngreso () 
{
    
}

function NumerosPares()
{
    var numero;
    var numeroPar;
    var contador = 0;

    //numero = document.getElementById("numero").value;

    while (contador < numero) {
        contador++;

        if (numero %2 == 0) {
            numeroPar = numero - 2;
            document.getElementById("numero").value = numeroPar;
            //console.log(numeroPar);
        }  
    } 
}

function NumerosImpares()
{
    var numero;
    var numeroImpar;
    var contador = 1;

    numero = document.getElementById("numero").value;

    while (contador < numero) {
        contador++;

        if (numero %2 == 1) {
            numeroImpar = numero - 2;
            document.getElementById("numero").value = numeroImpar;
            console.log(numeroImpar);
        }  
    } 
    
}

function NumerosDivisibles()
{
    
}

function VerificarPrimo()
{
    
}

function NumerosPrimos()
{
    
}