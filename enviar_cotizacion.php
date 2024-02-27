<?php
    // Verifica si el formulario ha sido enviado
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Captura los datos del formulario
        $nombreCompleto = $_POST['nombreCompleto'];
        $correoContacto = $_POST['correoContacto'];
        $numeroContacto = $_POST['numeroContacto'];
        $fechaIngreso = $_POST['fechaIngreso'];
        $fechaSalida = $_POST['fechaSalida'];
        $cantidadAdultos = $_POST['cantidadAdultos'];
        $cantidadNinos = $_POST['cantidadNinos'];
        $cantidadBebes = $_POST['cantidadBebes'];
        $cantidadMascotas = $_POST['cantidadMascotas'];

        // Configura los detalles del correo electrónico
        $destinatario = "eucaliscondordia@gmail.com"; // Cambia esto por tu dirección de correo electrónico
        $asunto = "Nueva reserva recibida";

        // Construye el contenido del mensaje
        $mensaje = "Nombre completo: $nombreCompleto\n";
        $mensaje .= "Correo electrónico: $correoContacto\n";
        $mensaje .= "Número de contacto: $numeroContacto\n";
        $mensaje .= "Fecha de ingreso: $fechaIngreso\n";
        $mensaje .= "Fecha de salida: $fechaSalida\n";
        $mensaje .= "Cantidad de adultos: $cantidadAdultos\n";
        $mensaje .= "Cantidad de niños: $cantidadNinos\n";
        $mensaje .= "Cantidad de bebés: $cantidadBebes\n";
        $mensaje .= "Cantidad de mascotas: $cantidadMascotas\n";

        // Envía el correo electrónico
        $headers = "From: $correoContacto";

        if (mail($destinatario, $asunto, $mensaje, $headers)) {
            // Si el correo se envió correctamente, muestra un Sweet Alert de éxito y redirige al usuario a la página de reserva
            echo "<script>
                    Swal.fire(
                        'Reserva exitosa',
                        '¡Tu reserva ha sido enviada con éxito!',
                        'success'
                    ).then((result) => {
                        // Redirige al usuario a la página de reserva
                        window.location.href = 'reservar.html';
                    });
                  </script>";
        } else {
            // Si hay un error al enviar el correo, muestra un Sweet Alert de error
            echo "<script>
                    Swal.fire(
                        'Error',
                        'Ha ocurrido un error al enviar la reserva. Por favor, inténtalo de nuevo más tarde.',
                        'error'
                    );
                  </script>";
        }
    } else {
        // Si se intenta acceder al script directamente sin enviar el formulario, redirige al formulario
        header("Location: reservar.html");
        exit;
    }
?>