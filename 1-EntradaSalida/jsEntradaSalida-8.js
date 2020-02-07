/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
     //variables
    var numeroUnoIngresado;
    var numeroDosIngresado;
    var resultado;
    var texto;

    var numeroUnoParseado;
    var numeroDosParseado;

    //recupero los datos por ID
    numeroUnoIngresado = document.getElementById("numeroDividendo").value;
    numeroDosIngresado = document.getElementById("numeroDivisor").value;

    //La función parseInt () analiza una cadena y devuelve un entero.
    numeroUnoParseado = parseInt(numeroUnoIngresado);
    numeroDosParseado = parseInt(numeroDosIngresado);

    //sumar
    resultado = numeroUnoParseado % numeroDosParseado;

    //muestro el resultado
    texto = "El resto entre " + numeroUnoParseado + " % " + numeroDosParseado + " = " + resultado;    
    alert(texto);
	
}
