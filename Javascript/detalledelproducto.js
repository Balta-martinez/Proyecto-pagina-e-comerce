const productos = [
    {
      id: 1,
      nombre: "Steyr Challenge E",
      precio: 4399.90,
      imagen: "../Assets/Ilustrator/steyr_challenge_e.jpg",
      descripcion: "La Steyr Challenge E es una carabina de alta precisión con tecnología avanzada para los tiradores más exigentes.",
      marca: "Steyr",
      stock: 3,
      categoria: "Armas de Aire",
    },
    {
      id: 2,
      nombre: "Steyr Evo-10 E",
      precio: 2440.90,
      imagen: "../Assets/Ilustrator/evo10.jpg",
      descripcion: "La Steyr Evo-10 E es una pistola de aire diseñada para precisión en competiciones, a su vez cuenta con sistema de tiro en seco.",
      marca: "Steyr",
      stock: 3,
      categoria: "Pistolas de Aire",
    },
    {
      id: 3,
      nombre: "Walther LG500 iTec E",
      precio: 4899.90,
      imagen: "../Assets/Ilustrator/LG500 itec E _A.jpg",
      descripcion: "La Walther LG500 iTec E es una carabina de aire de alta precisión diseñada para los tiradores más exigentes. Fabricada con materiales de primera calidad y equipada con tecnología avanzada, ofrece unrendimiento excepcional en competiciones de tiro deportivo.",
      marca: "Walther",
      stock: 2,
      categoria: "Armas de Aire",
    },
    {
      id: 4,
      nombre: "Diabolo RWS-R10 Match Premium Line",
      precio: 17.99,
      imagen: "../Assets/Ilustrator/rws r10.jpg",
      descripcion: "Los RWS-R10 son diábolos de precisión diseñados para competiciones de tiro deportivo. Ofrecen una excelente resistencia y rendimiento, lo que los convierte en una opción perfecta para aquellos que buscan calidad en sus tiros",
      marca: "RWS",
      stock: 54,
      categoria: "Municiones",
    },
    {
      id: 5,
      nombre: "Diabolo JSB Match Middle Weight",
      precio: 17.20,
      imagen: "../Assets/Ilustrator/jsbmatch.jpg",
      descripcion: "Los JSB Match son diábolos de peso medio ideales para entrenamientos y competencias. Ofrecen un excelente rendimiento, lo que los convierte en una opción perfecta para aquellos que buscan calidad en sus tiros",
      marca: "JSB",
      stock: 37,
      categoria: "Municiones",
    },
    {
      id: 6,
      nombre: "Kit Equipo Sauer Sport Advantege",
      precio: 950.00,
      imagen: "../Assets/Ilustrator/sauer.jpg",
      descripcion: "Este Kit Sauer es ideal para aquellos que buscan buena estabilidad y rendimiento. Es de alta calidad, fabricado en Alemania",
      marca: "Sauer",
      stock: 2,
      categoria: "Equipamiento",
    },
    {
      id: 7,
      nombre: "Trípode TEC-HRO 3.0 carbono",
      precio: 179.99,
      imagen: "../Assets/Ilustrator/tec-hro-stativ-30-carbon-el-nuevo-trípode-rifle.jpg",
      descripcion: "El nuevo trípode TEC-HRO 3.0 es una opción perfecta para aquellos que buscan un tripode como liviano, y a la vez estable. Ofrece una excelente durabilidad y rendimiento",
      marca: "TEC-HRO",
      stock: 8,
      categoria: "Accesorios",
    },
    {
      id: 8,
      nombre: "SCATT MX-W2 Wi-Fi Inalambrico",
      precio: 1990.00,
      imagen: "../Assets/Ilustrator/scatt-mx-w2-wi-fi-.jpg",
      descripcion: "Sistema de entrenamiento SCATT MX-W2 con conexión Wi-Fi. Capta tus movimientos por mas pequeños que sean y te los muestra por pantalla a travez de tu computadora. Recomendado para tiradores de alto nivel",
      marca: "SCATT",
      stock: 6,
      categoria: "Entrenamiento",
    },
    {
      id: 9,
      nombre: "Culata aluminio TEC-HRO",
      precio: 1150.99,
      imagen: "../Assets/Ilustrator/tec-hro-fanático-banco-descanso-aluminio-rifle-stock (1).jpg",
      descripcion: "Culata de aluminio TEC-HRO para rifles .22. Ofrece una comodiad optima para tiradores de Rifle 3 posiciones",
      marca: "TEC-HRO",
      stock: 2,
      categoria: "Accesorios",
    },
  ];
  
 
  function cargarProducto() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get("id"));
  
    
    const producto = productos.find((p) => p.id === productId);
  
   
    if (producto) {
      document.querySelector(".product-image img").src = producto.imagen;
      document.querySelector(".product-image img").alt = producto.nombre;
      document.querySelector(".product-info h2").textContent = producto.nombre;
      document.querySelector(".product-info p").textContent = producto.descripcion;
      document.querySelector(".product-details-list").innerHTML = `
        <li><strong>Marca:</strong> ${producto.marca}</li>
        <li><strong>Stock:</strong> ${producto.stock} unidades</li>
        <li><strong>Categoría:</strong> ${producto.categoria}</li>
      `;
      document.querySelector(".product-price").textContent = `US$${producto.precio}`;
    } else {
      document.querySelector(".product-info").innerHTML = "<p>Producto no encontrado.</p>";
    }
  }
  
  
  document.addEventListener("DOMContentLoaded", cargarProducto);
  