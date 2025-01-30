"use script";

let subtotal = 50;
let shipping = 10;
let quanity = 3;
let tax = 25;

subtotal += 20;

let totalExclusivTax = (quanity * subtotal) + shipping;
let totalInclusivTax = totalExclusivTax * 1.25;

document.getElementById("subtotal").textContent = subtotal;
document.getElementById("shipping").textContent = shipping;
document.getElementById("quanity").textContent = quanity;
document.getElementById("tax").textContent = `${tax}%`;
document.getElementById("total").textContent = totalInclusivTax;

console.log(`${subtotal}, ${shipping}, ${totalInclusivTax}`);