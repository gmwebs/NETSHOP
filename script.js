var pedidos = document.getElementById("pedido");
var carritoPedido = 0;
var botonVaciarCarro = document.getElementById("vaciarcarro");
var añadirCarritoBoton = document.getElementById("añadirboton");


añadirCarritoBoton.onclick = (añadirCarrito);
botonVaciarCarro.onclick = (vaciarCarrito);
var enCarrito = false;

function añadirCarrito() {

  if (enCarrito == false) {
    carritoPedido = carritoPedido + 1;
    pedidos.innerHTML = carritoPedido; 
    añadirCarritoBoton.innerHTML = "Quitar del carrito";
    añadirCarritoBoton.style.backgroundColor = "var(--logo-azul)";

    enCarrito = true;
  }

  else if (enCarrito == true) {
    carritoPedido = carritoPedido - 1;
    pedidos.innerHTML = carritoPedido;
    añadirCarritoBoton.innerHTML = "Añadir del carrito";
    añadirCarritoBoton.style.backgroundColor = "var(--logo-naranja)";

    enCarrito = false;
  }
}

function vaciarCarrito() {
  enCarrito = true;
  añadirCarrito();
  carritoPedido = 0;
  pedidos.innerHTML = carritoPedido;
}