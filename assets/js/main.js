'use strict';
class Pasajero {
    constructor(NumAsiento, Nombre, Apellido, Dni) {
        this.numAsiento = NumAsiento,
            this.nombre = Nombre,
            this.apellido = Apellido,
            this.dni = Dni
    }
}
class ReservaAsiento {
    constructor() {
        this.asientos = [];
        //this.colorCeldas = colorCeldas;
    }
    setup() {
        $("td").click(() => this.Celdas(event));
        $("#reserva").click(() => this.Reserva());
        $("#listar").click(() => this.Listar());
        $("#btnBuscar").click(() => this.Buscar());
        $("#cancelar").click(() => this.Eliminar());

    }
    Celdas(event) {
        let e = event.target.textContent;
        let colorCeldas = event.target;
        $("#muestra1").append(`<table border="2" bordercolor="blue">
                <tr><td><strong>Reserve su pasaje</strong></td></tr>
                <tr><td>Nº de Asiento : </td><td><input type=""text id="numAsiento" value=${e} disabled></input></td></tr>
                <tr><td>Nombre : </td><td><input id="txtnombre" type="text"></input></td></tr>
                <tr><td>Apellido: </td><td><input id="txtapellido" type="text" ></input></td></tr>
                <tr><td>D.N.I: </td><td><input id="txtdni" type="text"></input></td></tr>
                </table>`);

        let num = parseInt(e);
        for (let i in this.asientos) {
            let datos = this.asientos[i];
            if (num === parseInt(datos.numAsiento && num != NaN)) {
                document.getElementById('numAsiento').value = datos.numAsiento;
                document.getElementById("txtnombre").value = datos.nombre;
                document.getElementById("txtapellido").value = datos.apellido;
                document.getElementById("txtdni").value = datos.dni;
            }
        }
    }
    Reserva() {

        let NumAsiento = document.getElementById('numAsiento').value;
        let Nombre = document.getElementById("txtnombre").value;
        let Apellido = document.getElementById("txtapellido").value;
        let Dni = document.getElementById("txtdni").value;
        let N = 32; // Número de asientos
        let pasajes = new Pasajero(NumAsiento, Nombre, Apellido, Dni);
        this.asientos.push(pasajes);
        //this.Celdas.colorCeldas.style.backgroundColor = "red";
        alert("guardado");
        //limpiar()
    }
    Listar() {

        for (let i in this.asientos) {
            let datos = this.asientos[i];

            $("#mostrarBusqueda").append(`<strong>Numero de Asiento: </strong>${datos.numAsiento}<br>
                    <strong>Nombre del pasajero: </strong>${datos.nombre}<br>
                    <strong>Apellido del pasajero: </strong>${datos.apellido}<br>
                    <strong>DNI del pasajero: </strong>${datos.dni}`);
        }
    }
    Buscar() {
        let _dni = document.getElementById("buscar").value;
        console.log("dato entrado" + _dni);
        var str = "";
        for (let i in this.asientos) {
            let datos = this.asientos[i];
            if (parseInt(_dni) === parseInt(datos.dni)) {
                $("#mostrarBusqueda").append(`<table border="4">
                            <tr><td><strong>Numero de Asiento: </strong></td><td>${datos.numAsiento}</td></tr>
                            <tr><td><strong>Nombre del pasajero: </strong></td><td>${datos.nombre}</td></tr>
                            <tr><td><strong>Apellido del pasajero: </strong></td><td>${datos.apellido}</td></tr>
                            <tr><td><strong>DNI del pasajero: </strong></td><td>${datos.dni}</td></tr>
                            </table>`);
                break;
            }

        }

    }
    Limpiar() {
        document.getElementById('numAsiento').value = " ";
        document.getElementById("txtnombre").value = " ";
        document.getElementById("txtapellido").value = " ";
        document.getElementById("txtdni").value = " ";
    }
    Eliminar() // falta completar
    {
        let NumAsiento = document.getElementById('numAsiento').value;

        for (let i in this.asientos) {
            let datos = this.asientos[i].numAsiento;
            if (NumAsiento === datos.numAsiento) {
                delete datos.numAsiento;
                delete datos.nombre;
                delete datos.apellido;
                delete datos.dni;

            }
        }
    }
}
let pasaje = new ReservaAsiento();
pasaje.setup();



// var celdas = document.getElementsByTagName('td');
// var asientos = []; // creo un array asiento vacio
// var colorCeldas;
// for (var i = 0; i < celdas.length; i++) {
//     celdas[i].addEventListener('click', redirect, false);
// }

// function redirect(event) {

//     var e = event.target.textContent;
//     colorCeldas = event.target;
//     var html1 = "";
//     var s = '<table border="2" bordercolor="blue">' +
//         "<tr>" + "<td>" + "<strong>" + "Reserve su pasaje" + "</strong>" + "</td>" + "</tr>" +
//         "<tr>" + "<td>" + "Nº de Asiento : " + "</td>" + "<td>" + "<input type='text' id='numAsiento' value='" + e + "' disabled ></input>" + "</td>" + "</tr>" +
//         "<tr>" + "<td>" + "Nombre : " + "</td>" + "<td>" + "<input id=txtnombre type=text > " + " </input>" + "</td>" + "</tr>" +
//         "<tr>" + "<td>" + "Apellido: " + "</td>" + "<td>" + "<input id=txtapellido type=text > " + " </input> " + "</td>" + "</tr>" +
//         "<tr>" + "<td>" + "D.N.I: " + "</td>" + "<td>" + "<input id=txtdni type=text > " + "</input> " + "</td>" + "</tr> " +
//         "</table>" + "<br>";
//     html1 += s;

//     var html2 = "";
//     var b = '<button type="button" name="busca" onclick="reserva()" > ' + "reserva" + '</button>' + " " + " " +
//         '<button type="button" name="cancelar" onclick="eliminar()" > ' + "eliminar" + '</button>' + " " + " " +
//         '<button type="button" name="listar" onclick="listar()" > ' + "lista" + '</button>' + " <br>" + "<br>";
//     html2 += b;

//     var num = parseInt(e);
//     for (var i = 0; i < asientos.length; i++) {
//         var datos = asientos[i];
//         if (num === parseInt(datos.numAsiento && num != NaN)) {
//             document.getElementById('numAsiento').value = datos.numAsiento;
//             document.getElementById("txtnombre").value = datos.nombre;
//             document.getElementById("txtapellido").value = datos.apellido;
//             document.getElementById("txtdni").value = datos.dni;

//         }

//     }
//     document.getElementById("muestra1").innerHTML = html1;
//     document.getElementById("muestra2").innerHTML = html2;

// }

// function Pasajero(NumAsiento, Nombre, Apellido, Dni) {
//     this.numAsiento = NumAsiento,
//         this.nombre = Nombre,
//         this.apellido = Apellido,
//         this.dni = Dni
// };

// function reserva() {

//     var NumAsiento = document.getElementById('numAsiento').value;
//     var Nombre = document.getElementById("txtnombre").value;
//     var Apellido = document.getElementById("txtapellido").value;
//     var Dni = document.getElementById("txtdni").value;
//     var N = 32; // Número de asientos
//     var pasajes = new Pasajero(NumAsiento, Nombre, Apellido, Dni);
//     asientos.push(pasajes);
//     colorCeldas.style.backgroundColor = "red";

//     limpiar()
// }



// function listar() {
//     var str = "";
//     for (var i = 0; i < asientos.length; i++) {
//         var datos = asientos[i];

//         str += "<strong>" + "Numero de Asiento: " + "</strong>" + datos.numAsiento + "<br>" +
//             "<strong>" + "Nombre del pasajero: " + "</strong>" + datos.nombre + "<br>" +
//             "<strong>" + "Apellido del pasajero: " + "</strong>" + datos.apellido + "<br>" +
//             "<strong>" + "DNI del pasajero: " + "</strong>" + datos.dni + "<br>" + "<br>";
//     }
//     document.getElementById("mostrarBusqueda").innerHTML = str;
// }
// //var buscar = document.getElementById("btnBusca");
// function buscar() {
//     var _dni = document.getElementById("buscar").value;
//     console.log("dato entrado" + _dni);
//     var str = "";
//     for (var i = 0; i < asientos.length; i++) {
//         var datos = asientos[i];
//         if (parseInt(_dni) === parseInt(datos.dni)) {
//             str = '<table border="4">' +
//                 "<tr>" + "<td>" + "<strong>" + "Numero de Asiento: " + "</strong>" + "</td>" + "<td>" + datos.numAsiento + "</td>" + "</tr>" +
//                 "<tr>" + "<td>" + "<strong>" + "Nombre del pasajero: " + "</strong>" + "</td>" + "<td>" + datos.nombre + "</td>" + "</tr>" +
//                 "<tr>" + "<td>" + "<strong>" + "Apellido del pasajero: " + "</strong>" + "</td>" + "<td>" + datos.apellido + "</td>" + "</tr>" +
//                 "<tr>" + "<td>" + "<strong>" + "DNI del pasajero: " + "</strong>" + "</td>" + "<td>" + datos.dni + "</td>" + "</tr> " +
//                 "</table>";
//             break;
//         }

//     }
//     document.getElementById("mostrarBusqueda").innerHTML = str;
// }

// function limpiar() {
//     document.getElementById('numAsiento').value = " ";
//     document.getElementById("txtnombre").value = " ";
//     document.getElementById("txtapellido").value = " ";
//     document.getElementById("txtdni").value = " ";
// }

// function eliminar() // falta completar
// {
//     var NumAsiento = document.getElementById('numAsiento').value;

//     for (var i = 0; i < asientos.length; i++) {
//         var datos = asientos[i].numAsiento;
//         if (NumAsiento === datos.numAsiento) {
//             delete datos.numAsiento;
//             delete datos.nombre;
//             delete datos.apellido;
//             delete datos.dni;

//         }
//     }
// }