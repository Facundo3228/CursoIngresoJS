/*
* Enunciado:
* al seleccionar un mes informar.
* si tiene 29 días.
* si tiene 30 días.
* si tiene 31 días.
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
            alert(mesDelAño + " Tiene 29 dias.");            
        break;
    
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Novviembre":
            alert(mesDelAño + " Tienen 30 dias.");            
        break;

        default:
            alert(mesDelAño + " Tiene 31 dias.");
        break;
    }//fin del swich
}//FIN DE LA FUNCIÓN