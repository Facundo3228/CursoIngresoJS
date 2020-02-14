/*
* Enunciado:
* al seleccionar un mes informar. 
* si estamos en Invierno: "Abrigate que hace frio." 
* si aún no llego el Invierno: "Falta para el invierno." 
* si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!." 
* ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/

function mostrar()
{
    //variables
    var mesDelAño;

    //tomo el valor mes 
    var mesDelAño = document.getElementById('mes').value;

    //comienso swich
    switch(mesDelAño) {
        case "Julio":
        case "Agosto":
            alert("Abrigate que hace frio. " + mesDelAño);
        break;

        case "Septiembre":
        case "Octubre":
        case "Noviembre":
        case "Diciembre":
            alert("Ya pasamos el frio, ahora calor!!!. " + mesDelAño);
        break;

        default:
            alert("Falta para el invierno. " + mesDelAño);
        break;
    }//fin del swich

//Nota personal: Presta atencion a los nombres de los datos.

}//FIN DE LA FUNCIÓN