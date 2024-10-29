document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    let nombre = document.getElementById('nombre').value;
    
    // Variables para cálculos
    let totalInicial = 0;
    let cuponesSeleccionados = [];

    // Revisa cada opción de cupón
    for (let i = 1; i <= 4; i++) {
        let checkbox = document.getElementById(`cupon${i}`);
        let cantidad = parseInt(document.getElementById(`cantidad${i}`).value) || 0;

        if (checkbox.checked && cantidad > 0) {
            let costo = parseInt(checkbox.value);
            totalInicial += costo * cantidad;
            cuponesSeleccionados.push({
                nombre: checkbox.nextElementSibling.innerText,
                costo: costo,
                total: costo * cantidad
            });
        }
    }

    // Cálculos
    let descuento = totalInicial > 120 ? totalInicial * 0.20 : 0; // Descuento si total inicial > $120
    let totalConDescuento = totalInicial - descuento;
    let iva = totalConDescuento * 0.13;
    let totalAPagar = totalConDescuento + iva;

});
