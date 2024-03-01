const nombreCompleto = document.getElementById("nombreCompleto")
const correoContacto = document.getElementById("correoContacto")
const numeroContacto = document.getElementById("numeroContacto")
const fechaIngreso = document.getElementById("fechaIngreso")
const fechaSalida = document.getElementById("fechaSalida")
const cantidadAdultos = document.getElementById("cantidadAdultos")
const cantidadNinos = document.getElementById("cantidadNinos")
const cantidadBebes = document.getElementById("cantidadBebes")
const cantidadMascotas = document.getElementById("cantidadMascotas")

function SendMail() {
    var params = {
        from_name : nombreCompleto.value,
        message : 
        `Nombre completo: ${nombreCompleto.value}
        Correo de contacto: ${correoContacto.value}
        Numero de contacto: ${numeroContacto.value}
        Fecha de ingreso: ${fechaIngreso.value}
        Fecha de salida: ${fechaSalida.value}
        Cantidad de adultos: ${cantidadAdultos.value}
        Cantidad de niños: ${cantidadNinos.value}
        Catidad de bebes: ${cantidadBebes.value}
        Cantidad de mascotas: ${cantidadMascotas.value}`,
    }
    emailjs.send('service_jzr4k0l', 'template_tzdbqek', params).then(function (res){
        console.log('Email sent!');
        console.log(params)
        window.location.href = "formRecieved.html";
    })
    .catch(function(error) {
        console.error("Se produjo un error:", error);
        console.log(params)
        window.location.href = "formError.html";

    });
}

document.getElementById("contact_form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de forma predeterminada
    // Ejecuta tu función aquí cada vez que se presione el botón de enviar
    SendMail();
});