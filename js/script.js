let savedPIN = '8888';

function login() {

    let ingresar = false;

    for (let i = 2; i >= 0; i--) {

        let userPIN = prompt('Ingresá tu contraseña. Tenés ' + (i + 1) + ' oportunidades.');

        if (userPIN === savedPIN) {

            alert('Bienvenido/a');
            ingresar = true;
            break;

        } else {

            alert('Error. Te quedan ' + i + ' intentos.');

        }

    }

    return ingresar;

}


if (login()) {

    let productos = 3;

    let opcion = prompt('Elegí una opción: \n1- Productos. \n2 - Quitar productos. \n3 - Agregar productos. \nPresioná X para continuar comprando.');

    while (opcion != 'X' && opcion != 'x') {

        switch (opcion) {

            case '1':
                alert('Tus productos son ' + productos);
                break;

            case '2':
                let quitar = parseInt(prompt('Ingresa cantidad a quitar'));
                if (quitar <= productos) {
                    productos -= quitar;
                    alert('Producto quitado. Ahora tienes ' + productos);
                } else {
                    alert('Productos insuficientes');
                }
                break;

            case '3':
                let agregar = parseInt(prompt('Ingresa cantidad de productos a agregar'));
                productos += agregar;

                alert('Producto agregado. Ahora tienes ' + productos);
                break;

            default:
                alert('Elegiste una opción inválida');
                break;

        }

        opcion = prompt('Elegí una opción: \n1- Productos. \n2 - Quitar productos. \n3 - Agregar productos. \nPresioná X para continuar comprando.');

    }

} else {
    alert('Bloqueamos la cuenta y te mandamos un correo electronico por seguridad.');

}

alert('Gracias por elegirnos.');