const precio = 400000;
let cantidad = 1;
let cantmax = 10;

const precioSpan = document.querySelector(".precio-inicial");
const cantSpan = document.querySelector(".cantidad");
const totalSpan = document.querySelector(".valor-total");
const btnaumenta = document.querySelector(".aumentar");
const btndisminuir = document.querySelector(".disminuir");

precioSpan.innerHTML = (precio).toLocaleString();
cantSpan.innerHTML = cantidad;
totalSpan.innerHTML = precio * cantidad;

function acttotal() {
    cantSpan.innerHTML = cantidad;
    totalSpan.innerHTML = (precio * cantidad).toLocaleString();
}

btnaumenta.addEventListener("click", function () {
    if (cantidad >= cantmax){
        alert("Cantida Maxima de compra")
    }else{
    cantidad++;
    acttotal();
    }
});

btndisminuir.addEventListener("click", function () {
    if (cantidad > 1) {
        cantidad--;
        acttotal();
    }
});