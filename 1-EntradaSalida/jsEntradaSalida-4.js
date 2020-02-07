/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'mostrar'
*/
function mostrar()
{
	//variables
	var dato;

	//ingreso el dato
	dato = prompt("ingrese el dato: ");

	//muestro el dato
	document.getElementById("elNombre").value = dato;
}

