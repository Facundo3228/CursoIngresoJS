/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

//variables globales
    var numeroUnoIngresado;
    var numeroDosIngresado;
    var resultado;
    var texto;

    var numeroUnoParseado;
    var numeroDosParseado;

function sumar()
{	
    /*
    * con esta forma pese a que esta bien destrullo el valor string inicial
    * con el cual fue ingresado por medio de las variables.
    */

    //variables de la funcion
    var numero1;
    var numero2;
    var resulto;

    //recupero los datos por ID
    numero1 = document.getElementById("numeroUno").value;
    numero2 = document.getElementById("numeroDos").value;

    //La función parseInt () analiza una cadena y devuelve un entero.
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    //sumar
    resultado = numero1 + numero2;

    //muestro el resultado
    alert("El resultado entre " + numero1 + " + " + numero2 + " = " + resultado);
	
}

function restar()
{
    /*
    * con esta forma pese a que esta bien tengo la posibilidad de recuperar el valor string inicial
    * con el cual fue ingresado por medio de las variables.
    */

    //recupero los datos por ID
    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;

    //La función parseInt () analiza una cadena y devuelve un entero.
    numeroUnoParseado = parseInt(numeroUnoIngresado);
    numeroDosParseado = parseInt(numeroDosIngresado);

    //restar
    resultado = numeroUnoParseado - numeroDosParseado;

    //muestro el resultado
    texto = "El resultado entre " + numeroUnoParseado + " - " + numeroDosParseado + " = " + resultado;    
    alert(texto);
}

function multiplicar()
{ 
    //recupero los datos por ID
    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;

    //La función parseInt () analiza una cadena y devuelve un entero.
    numeroUnoParseado = parseInt(numeroUnoIngresado);
    numeroDosParseado = parseInt(numeroDosIngresado);

    //multiplicasion
    resultado = numeroUnoParseado * numeroDosParseado;

    //muestro el resultado
    texto = "El resultado entre " + numeroUnoParseado + " * " + numeroDosParseado + " = " + resultado;    
    alert(texto);
	
}

function dividir()
{
    //recupero los datos por ID
    numeroUnoIngresado = document.getElementById("numeroUno").value;
    numeroDosIngresado = document.getElementById("numeroDos").value;

    //La función parseInt () analiza una cadena y devuelve un entero.
    numeroUnoParseado = parseInt(numeroUnoIngresado);
    numeroDosParseado = parseInt(numeroDosIngresado);

    //dividir
    resultado = numeroUnoParseado / numeroDosParseado;

    //muestro el resultado
    texto = "El resultado entre " + numeroUnoParseado + " / " + numeroDosParseado + " = " + resultado;    
    alert(texto);
	
}

