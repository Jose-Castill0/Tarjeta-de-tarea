var valorInicial = document.querySelector("#precio");
var cantidadInicial = document.querySelector("#cantidad");

var valor = 5000
var numCantidad = 1;
var valor_total = valor * numCantidad;

function actualizarTotal() {

    document.querySelector("#precio").innerHTML = valor;
    document.querySelector("#cantidad").innerHTML = numCantidad;
    document.querySelector("#total").innerHTML = valor_total;

};

function aumentarCantidad() {
    numCantidad++;
    valor_total = valor * numCantidad;
    actualizarTotal();
}

function disminuirCantidad() {
    if (numCantidad > 1) 
        numCantidad--;
        valor_total = valor * numCantidad;
    
    actualizarTotal();
}

actualizarTotal();