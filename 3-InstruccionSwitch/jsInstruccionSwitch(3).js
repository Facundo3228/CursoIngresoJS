/*
* Enunciado:
* al seleccionar un mes informar.
* si es Febrero: " Este mes no tiene más de 29 días."
* si NO es Febrero: "Este mes tiene 30 o más días"
*/

function mostrar()
{
    //variables
    var mesDelAño;

    //tomo el valor mes 
    mesDelAño = document.getElementById('mes').value;

    //comienzo del swich
    switch (mesDelAño) {
        case "Febrero":
            alert("Este mes no tiene más de 29 días.");           
        break;
    
        default:
            alert("Este mes tiene 30 o más días.");
        break;
    }//fin del swich
}//FIN DE LA FUNCIÓN