// Ejercicio: Calculadora de descuento
// Escribe un programa que calcule el precio final de un producto
// Despues de aplicar un descuento. Pide al usuario el precio original y el porcentaje de descuento.
// y muestra el precio final con el descuento aplicado.

const prompt = require('prompt-sync')();

// 1. Pedir al usuario el precio original y el porcentaje de descuento
const precioOriginal = parseFloat(prompt("Introduce el precio original del producto: "));
// 2. Calcular el precio final aplicando el descuento
const porcentajeDescuento = parseFloat(prompt("Introduce el porcentaje de descuento (sin el símbolo %): "));
// 3. Mostrar el precio final al usuario
const descuento = (precioOriginal * porcentajeDescuento) / 100;

let precioFinal = precioOriginal - descuento;

console.log(`El precio final del producto, después de aplicar un descuento del ${porcentajeDescuento}%, es: $${precioFinal.toFixed(2)}`);