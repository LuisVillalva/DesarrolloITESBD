/// <autosync enabled="true" />
/// <reference path="modernizr-2.6.2.js" />
/// <reference path="jquery-1.10.2.js" />
/// <reference path="bootstrap.js" />
/// <reference path="respond.js" />


function ShowSelected() {
    /* Para obtener el valor */
    var cod = document.getElementById("typeSearch").value;
    if ($("#typeSearch option:selected").text() == "1 Estrella") {
        $('#Aux').html(cod);
        document.getElementById('typeSearch').value = "Tipo de Comida";
    } else if ($("#typeSearch option:selected").text() == "1 Estrella") {
        cod = "";
    }
    if ($("#typeSearch option:selected").text() == "2 Estrellas") {
        $('#Aux').html(cod);
        document.getElementById('typeSearch').value = "Tipo de Comida";
    }
    if ($("#typeSearch option:selected").text() == "3 Estrellas") {
        $('#Aux').html(cod);
        document.getElementById('typeSearch').value = "Tipo de Comida";
    }
    if ($("#typeSearch option:selected").text() == "4 Estrellas") {
        $('#Aux').html(cod);
        document.getElementById('typeSearch').value = "Tipo de Comida";
    }
    if ($("#typeSearch option:selected").text() == "5 Estrellas") {
        $('#Aux').html(cod);
        document.getElementById('typeSearch').value = "Tipo de Comida";
    }


}


function buscar() {
    var cod = $("#Aux").text();



    var busqueda = $("#wordKeys").val();
    var tipo = $("#typeSearch option:selected").text();
    if ($("#typeSearch option:selected").text() == "Tipo de Comida") {
        tipo = ""; // Declarar el valor que queremos mostrar cuando no se a seleccionado nada
    }
    var zona = $("#zonaSearch option:selected").text();

    if ($("#zonaSearch option:selected").text() == "Zona") {

        zona = "";// Declarar el valor que queremos mostrar cuando no se a seleccionado nada
    }
    var precio = $("#precioSearch option:selected").text();
    if ($("#precioSearch option:selected").text() == "Precio") {

        precio = "";// Declarar el valor que queremos mostrar cuando no se a seleccionado nada
    }

    var divisa = $("#divisaSearch option:selected").text();
    if ($("#divisaSearch option:selected").text() == "Moneda") {

        divisa = "";// Declarar el valor que queremos mostrar cuando no se a seleccionado nada
    }
    alert(busqueda + " " + cod + " " + tipo + " " + zona + " " + precio + " " + divisa);
}


// valida caja

function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}


// Peticion

function peticionxfiltro() {
    var formulario = document.formulario;
    var wordKeys = formulario.wordKeys.value;
    console.log(wordKeys);
    $(document).ready(function () {
        var rps = "";
        var obj = {
            async: true,
            url: 'http://192.168.1.83:52452/api/busqueda',
            data: { palabra: wordKeys },
            method: 'GET',
            dataType: 'JSONP',
            success: function (json) {
                console.log(json);
                rps = json;
            },
            failure: function () { console.log("Error!!!"); },

        }

        var resp = $.ajax(obj);
        $.ajax(obj);
        console.log(resp);
        console.log(rps);
        //var jsonApi= JSON.stringify(rps);
        window.location.href = 'http://localhost:26741/Index/Respuesta?json=' + rps;

        /*redireccionar vista v = new vista(json)
        Ya en la vista
        transformar a lista Lust<objetos>
        public void actionResutl(string json){
        json -> lista<objeto>
        retunr view(Lissta)
        }
        */
    })
}
