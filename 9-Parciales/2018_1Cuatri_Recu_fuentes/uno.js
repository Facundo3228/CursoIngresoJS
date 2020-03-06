function mostrar()
{
    //variables y inicio
    var autosIngresada;
    var vendedorIngresado;
    var marcaIngresada;
    var patenteIngresada;
    var letraIngresada;
    var colorIngresado;
    var precioIngresado;
    var pagoIngresado;

    //variable de operacion
    var acumCantidadAutos = 0;
    var contaAutomotora = 0;

    //promedio de autos variables de operacion
    var contadorAutos = 0;
    var promedioAutos;

    //nonbre del vendedor que tiene menos cantidad de autos
    var autoCantidadMenor;
    var vendedorAutoCantMenor;

    //el auto de color rojo con precio mas alto
    var precioColorRojoAlto;
    var autoPrecioColorRojoAlto;

    //marca y patente del auto con precio mas alto y bajo
    var precioAutoAlto;
    var precioMarcaAutoAlto;
    var precioPatenteAutoAlto;
    var precioLetraAutoAlto;

    var precioAutoBajo;
    var precioMarcaAutoBajo;
    var precioPatenteAutoBajo;
    var precioLetraAutoBajo;

    //la forma de pago mas usada
    var formaPago;
    var contadorEfectivo = 0;
    var contadorCheque = 0;
    var contadorTarjeta = 0;
        

    //variables de control
    var respuesta = true;
    var primeraIteracion = true;
    var mensaje;


    while (respuesta) {

        //validacion y pedido de datos
        if (contaAutomotora < 10) {
            contaAutomotora++;

            do {
                autosIngresada = prompt("Ingrese la cantidad de autos (Maximo 100): ");
                autosIngresada = parseInt(autosIngresada);
            } while (isNaN(autosIngresada) || autosIngresada < 0 || autosIngresada > 50);
    
            acumCantidadAutos += autosIngresada;
            contadorAutos++;
    
            if (acumCantidadAutos <= 50) {
                do {
                    vendedorIngresado = prompt("Nombre del vendedor: ");       
                } while (! isNaN(vendedorIngresado.toLowerCase()));
    
                do {
                    marcaIngresada = prompt("Ingrese la marca del automovil:");
                } while (! isNaN(marcaIngresada.toLowerCase()));
    
                do {
                    patenteIngresada = prompt("Ingrese la patente numerica de 4 digitos: ");
                    patenteIngresada =parseInt(patenteIngresada);
                } while (isNaN(patenteIngresada) || patenteIngresada < 1000 || patenteIngresada > 9999);
    
                do {
                    letraIngresada = prompt("Ingrese la letra de la patente 2 letras: ");
                } while ((! isNaN(letraIngresada.toUpperCase())) || letraIngresada.toUpperCase().length-1 != 1);
    
                do {
                    colorIngresado = prompt("Ingrese color del auto: ");
                } while (! isNaN(colorIngresado.toLowerCase()));
    
                do {
                    precioIngresado = prompt("Valor del auto: ");
                    precioIngresado = parseFloat(precioIngresado);
                } while (isNaN(precioIngresado));
    
                do {
                    pagoIngresado = prompt("Ingrese la forma de pago (EFECTIVO, CHEQUE O TRANSFERENCIA): ");
                } while (pagoIngresado.toUpperCase() != "EFECTIVO" && pagoIngresado.toUpperCase() != "CHEQUE" && pagoIngresado.toUpperCase() != "TRANSFERENCIA");
                
            } else {
                mensaje = "EL VENDEDOR " + vendedorIngresado + "TIENE EL MAXIMO DE AUTOS PERMITIDOS";
                alert(mensaje);
            }
    
            //bandera
            if (primeraIteracion) {
                autoCantidadMenor = autosIngresada;
                vendedorAutoCantMenor = vendedorIngresado;
                
                precioColorRojoAlto = precioIngresado;
                autoPrecioColorRojoAlto = colorIngresado;
    
                precioAutoAlto = precioIngresado;
                precioMarcaAutoAlto = marcaIngresada;
                precioPatenteAutoAlto = patenteIngresada;
                precioLetraAutoAlto = letraIngresada;

                precioAutoBajo = precioIngresado;
                precioMarcaAutoBajo = marcaIngresada;
                precioPatenteAutoBajo = patenteIngresada;
                precioLetraAutoBajo = letraIngresada;
    
                primeraIteracion = false;
            } else {
                //nonbre del vendedor que tiene menos cantidad de autos
                if (autosIngresada < autoCantidadMenor) {
                    autoCantidadMenor = autosIngresada;
                    vendedorAutoCantMenor = vendedorIngresado;
                } else {
                    //el auto de color rojo con precio mas alto
                    if (precioIngresado > precioColorRojoAlto && autoPrecioColorRojoAlto === "rojo") {
                        precioColorRojoAlto = precioIngresado;
                        autoPrecioColorRojoAlto = colorIngresado;                        
                    } else {
                        //marca y patente del auto con precio mas alto y bajo
                        if (precioIngresado > precioAutoAlto) {
                            precioAutoAlto = precioIngresado;
                            precioMarcaAutoAlto = marcaIngresada;
                            precioPatenteAutoAlto = patenteIngresada;
                            precioLetraAutoAlto = letraIngresada;
                        } else {
                            //marca y patente del auto con precio mas alto y bajo
                            if (precioIngresado < precioMarcaAutoBajo) {
                                precioAutoBajo = precioIngresado;
                                precioMarcaAutoBajo = marcaIngresada;
                                precioPatenteAutoBajo = patenteIngresada;
                                precioLetraAutoBajo = letraIngresada;
                            }
                        }
                    }
                }
            }
        } else {
            mensaje = "EL AUTOMOTOR NO SOPORTA MAS AUTOS";
            alert(mensaje + " " + contaAutomotora);
        }

        //la forma de pago mas usada
        switch(pagoIngresado.toUpperCase()) {
            case "EFECTIVO":
                contadorEfectivo++;
                formaPago.toLowerCase() = pagoIngresado;
                break;
            case "CHEQUE":
                contadorCheque++;
                formaPago.toLowerCase() = pagoIngresado;
                break;
            case "TARJETA":
                contadorTarjeta++;
                formaPago.toLowerCase() = pagoIngresado;
                break;
            default:
                mensaje = "NO ES UNA FORMA DE PAGO VALIDA";
                alert(mensaje);
                break;
        }
        
        respuesta = confirm("¿DESEA CONTINUAR?");
    }

    //promedio de autos
    if (contadorAutos != 0) {
        promedioAutos = acumCantidadAutos / contadorAutos;
    } else {
        promedioAutos = "NO SE PUEDE DIVIDIR POR CERO";
    }

    //la forma de pago mas usada
    if (contadorEfectivo > contadorCheque && contadorEfectivo > contadorTarjeta) {
        formaPago = "EFECTIVO";
    } else if (contadorCheque > contadorTarjeta) {
        formaPago = "CHEQUE";
    } else {
        formaPago = "TARJETA";
    }

    //la forma de pago menos usada
    if (contadorEfectivo < contadorCheque && contadorEfectivo < contadorTarjeta) {
        formaPago = "EFECTIVO";
    } else if (contadorCheque < contadorTarjeta) {
        formaPago = "CHEQUE";
    } else {
        formaPago = "TARJETA";
    }

    //informe
    document.write("El promedio de los autos es: " + acumCantidadAutos + "/" + contadorAutos + "=" + promedioAutos + "<br>");
    document.write("El vendedor " + vendedorAutoCantMenor + " tiene " + autoCantidadMenor + " autos solamente" + "<br>");
    document.write("El auto de color " + autoPrecioColorRojoAlto + " con precio mas alto es " + precioColorRojoAlto + "<br>");
    document.write("El auto de marca " + precioMarcaAutoAlto +" y patente " + precioPatenteAutoAlto + precioLetraAutoAlto + " del auto con precio mas alto es: " + precioAutoAlto + "<br>");
    document.write("El auto de marca " + precioMarcaAutoBajo +" y patente " + precioPatenteAutoBajo + precioLetraAutoBajo + " del auto con precio mas bajo es: " + precioAutoBajo + "<br>");
    document.write("La forma de pago mas usada es: " + formaPago + "<br>");
    document.write("La forma de pago menos usada es:" + formaPago);

}