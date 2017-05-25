window.onload = function () {
    document.formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(evObject) {
    evObject.preventDefault();
    var todoCorrecto = true;
    var formulario = document.formulario;
    var caja=formulario.caja.value; 
   
    if (caja.length==0) { alert('No valido'); todoCorrecto = false; }
    if (todoCorrecto == true) { peticion(); }
}


function peticion() {
    var formulario = document.formulario;
    var caja = formulario.caja.value;
    console.log(caja);
    $(document).ready(function () {
        var rps = "";
        var obj = {
            async: true,
            url: 'http://192.168.1.83:52452/api/busqueda',
            data: { palabra:caja},
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