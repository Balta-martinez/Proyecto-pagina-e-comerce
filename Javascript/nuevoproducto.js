// Array para almacenar los productos
let productos = JSON.parse(localStorage.getItem("productos")) || [];

// Función para agregar un nuevo producto
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const nuevoProducto = {
    id: document.getElementById("numero-ID").value,
    nombre: document.getElementById("nombre-producto").value,
    descripcion: document.getElementById("descripcion-producto").value,
    imagen: document.getElementById("imagen-producto").value,
    stock: document.getElementById("stock-producto").value,
    categoria: document.getElementById("categoria-producto").value,
  };
  
  // Agrega el nuevo producto al array
  productos.push(nuevoProducto);
  
  // Guarda el array en localStorage
  localStorage.setItem("productos", JSON.stringify(productos));
  
  // Limpia el formulario
  document.getElementById("form").reset();

  // Redirige al catálogo de productos
  window.location.href = "../Html/productos.html";
});
