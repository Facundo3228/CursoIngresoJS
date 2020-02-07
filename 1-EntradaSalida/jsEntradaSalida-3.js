/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
    //variable
    var dato;
    
    //Tomo el dato por id
    dato = document.getElementById("elNombre").value;
	
    //mueestro el dato
    alert(dato);
}


