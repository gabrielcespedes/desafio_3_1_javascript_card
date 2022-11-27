function calcular() {
    const cantidad = document.querySelector('#cantidad').value;
    const color = document.querySelector('#color').value;
    const precio = document.querySelector('#precio').innerHTML;

    console.info('Cantidad: ', cantidad);
    console.info('Color: ', color);
    console.info('Precio: ', precio);

    document.querySelector('#resumen_total').innerHTML = cantidad*precio;
    document.querySelector('#resumen_cantidad').innerHTML = cantidad;
    document.querySelector('#resumen_color').style.backgroundColor = color;
}