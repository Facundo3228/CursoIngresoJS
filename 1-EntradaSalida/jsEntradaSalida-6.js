/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    //variables
    var numeroUnoIngresado;
    var numeroDosIngresado;
    var resultado;
    var texto;

    var numeroUnoParseado;
    var numeroDosParseado;

    //recupero los datos por ID
    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;

    //La función parseInt () analiza una cadena y devuelve un entero.
    numeroUnoParseado = parseInt(numeroUnoIngresado);
    numeroDosParseado = parseInt(numeroDosIngresado);

    //sumar
    resultado = numeroUnoParseado + numeroDosParseado;

    //muestro el resultado
    texto = "El resultado entre " + numeroUnoParseado + " + " + numeroDosParseado + " = " + resultado;    
    alert(texto);
}

