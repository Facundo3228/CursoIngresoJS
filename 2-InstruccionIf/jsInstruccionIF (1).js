/*
* Enunciado:
* Al ingresar una edad que sea igual a 15,
* mostrar el mensaje "niña bonita".
*/

function mostrar()
{
    //variables
    var edadIngresada;
    var edadParceada;
    var mensaje;
    
    //tomo la edad
    edadIngresada = document.getElementById("edad").value;
    mensaje = "niña bonita";

    //parseo
    edadParceada = parseInt(edadIngresada);

    //condicional if
    if(edadParceada == 15)
    {
        alert(mensaje);
    }
}//FIN DE LA FUNCIÓN