var celdas = document.getElementsByTagName('td');
var asientos = []; // creo un array asiento vacio
for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}

function redirect(event){
  	var e = event.target.textContent;
    var html1= "";
    var s ='<table border="2" bordercolor="blue">' +
           "<tr>" + "<td>" + "<strong>" + "Reserve su pasaje" + "</strong>" + "</td>" + "</tr>" +
           "<tr>" + "<td>" + "Nº de Asiento : " + "</td>" + "<td>" + "<input type='text' id='numAsiento' value='"+e+"' disabled ></input>" +"</td>" + "</tr>" +
           "<tr>" + "<td>" + "Nombre : " + "</td>" + "<td>" + "<input id=txtnombre type=text > " + " </input>" +"</td>" + "</tr>" +
           "<tr>" + "<td>" + "Apellido: " + "</td>" + "<td>" + "<input id=txtapellido type=text > " + " </input> " +"</td>" + "</tr>" +
           "<tr>" + "<td>" + "D.N.I: " + "</td>" + "<td>" + "<input id=txtdni type=text > " + "</input> " +"</td>" + "</tr> " +
           "</table>" + "<br>";
    html1 += s ;

    var html2 = "";
    var b = '<button type="button" name="busca" onclick="reserva()" > ' + "reserva" + '</button>' + " " + " " +
            '<button type="button" name="cancelar" onclick="cancelar()" > ' + "cancelar" + '</button>' + "<br>" ;
    html2 += b;

    document.getElementById("muestra1").innerHTML=html1;
    document.getElementById("muestra2").innerHTML=html2;
}


function reserva()
{
    var NumAsiento = document.getElementById('numAsiento').value;
    var Nombre = document.getElementById("txtnombre").value;
  	var Apellido = document.getElementById("txtapellido").value;
  	var Dni = document.getElementById("txtdni").value;
    for (var i = 0; i <= 32; i++) {
       asientos[i] = undefined;
    }
    asientos[NumAsiento - 1] = {
        asiento : NumAsiento,
    		nombre : Nombre,
    		apellido : Apellido,
    		dni : Dni,
  	};
  //console.log(asientos);
  alert("registro exitoso");
}

function buscar()
{
    var Dni = document.getElementById("txtdni").value;
    var str = "";
    for(var i=0 ; i < asientos.length ; i++)
    {
          if(asientos[i] != undefined)
          {
               if (asientos[i].dni == Dni)
               {
                 str = '<table border="4">' +
                 "<tr>" + "<td>" + "<strong>" + "Numero de Asiento: " + "</strong>"  + "</td>" + "<td>" + asientos [i].asiento + "</td>" + "</tr>" +
                 "<tr>" + "<td>" + "<strong>" + "Nombre del pasajero: " + "</strong>" + "</td>" + "<td>" + asientos [i].nombre +"</td>" + "</tr>" +
                 "<tr>" + "<td>" + "<strong>" + "Apellido del pasajero: " + "</strong>" + "</td>" + "<td>" + asientos [i].apellido +"</td>" + "</tr>" +
                 "<tr>" + "<td>" +  "<strong>" + "DNI del pasajero: " + "</strong>" + "</td>" + "<td>" + asientos [i].dni +"</td>" + "</tr> " +
                 "</table>";
              }
          }
     }
     document.getElementById("mostrarBusqueda").innerHTML = str;
}
function cancelar()
{
    window.close();
}
