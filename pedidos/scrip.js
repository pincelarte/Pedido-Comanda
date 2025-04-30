

// Obtiene la parte de la URL que contiene los parámetros
const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);

// Selecciona los divs
const datosDiv = document.getElementById("datos");
const pedidoDiv = document.getElementById("pedido");
const pagosDiv = document.getElementById("pagos");

// Nombres legibles
const nameMapping = {
    'inputNombre': 'Nombre',
    'inputTelefono': 'Teléfono',
    'inputDireccion': 'Dirección',
    'inputFechaHora': 'Fecha de Entrega',
    'inputObservaciones': 'Observaciones',
    'inputSalsaAgridulce': 'Salsa Agridulce',
    'inputSalsaPicante': 'Salsa Picante',
    'cantidadCarne': 'Carne',
    'cantidadPollo': 'Pollo',
    'cantidadJyQ': 'J y Q',
    'combo': 'Combo',
    'pago': 'Método de Pago',
    'retiro': 'Forma de Entrega'
};

// Limpiar contenido
datosDiv.innerHTML = '';
pedidoDiv.innerHTML = '';
pagosDiv.innerHTML = '';

// Recorremos los parámetros
searchParams.forEach((value, key) => {
    let displayName = nameMapping[key] || key;

    // Formatear fecha si es necesario
    if (key === 'inputFechaHora') {
        const fechaObj = new Date(value);
        value = fechaObj.toLocaleString();
    }

    // Asignar al div correspondiente
    if (key.includes("input")) {
        datosDiv.innerHTML += `<p><strong>${displayName}:</strong> ${value}</p>`;
    } else if (key.includes("cantidad") || key === "combo") {
        pedidoDiv.innerHTML += `<p><strong>${displayName}:</strong> ${value}</p>`;
    } else if (key.includes("pago") || key === "retiro") {
        pagosDiv.innerHTML += `<p><strong>${displayName}:</strong> ${value}</p>`;
    }
});




window.addEventListener('DOMContentLoaded', () => {
    const boton = document.querySelector('button');
    const ringtone = document.getElementById('ringtone');

    // Agrega la clase de animación
    boton.classList.add('boton-vibrando');

    // Reproduce el sonido
    ringtone.play().catch((e) => {
        console.warn('Interacción del usuario requerida para reproducir audio');
    });

    boton.addEventListener('click', () => {
        // Detener sonido y animación
        ringtone.pause();
        ringtone.currentTime = 0;
        boton.classList.remove('boton-vibrando');

        // Aquí puedes poner la lógica de imprimir, si quieres
        window.print();
    });
});
