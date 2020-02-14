/*
* Enunciado:
* Al ingresar una hora, informar:
* si está entre las 7 y las 11 : "Es de mañana."
*/
function mostrar()
{
    //variables
    var laHora;

    //tomo la hora  
    var laHora = document.getElementById('hora').value;

    //comienzo del swich
    switch (laHora) {
        case "7":
        case "8":
        case "9":
        case "10":
        case "11":
            alert(laHora + " Es de mañana.");                     
        break;
            
        default:
            alert("No hay mensaje. " + laHora);
        break;
    }//fin del swich
}//FIN DE LA FUNCIÓN