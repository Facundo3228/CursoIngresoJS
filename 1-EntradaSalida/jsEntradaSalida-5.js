/*Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
    //variables
    var nombre;
    var edad;
    var texto;


    //Tomo los datos por ID
    nombre = document.getElementById("elNombre").value;
	edad = document.getElementById("laEdad").value;

    texto = "Su nombre es: " + nombre + " y su edad es: " + edad;

    //muestro el dato en un alert concatenados
    //alert("Su nombre es: " + nombre + " y su edad es: " + edad);
    alert(texto);
}

