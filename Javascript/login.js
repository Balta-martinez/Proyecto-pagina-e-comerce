const formulario = document.querySelector("#login-form");

const nombreUsuario = "aimprogear"
const passwordUsuario = "123456"

formulario.onsubmit = function loginUsuario(evento) {
  evento.preventDefault();
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  if (nombreUsuario === username && passwordUsuario === password) {
    alert("Bienvenido, has ingresado correctamente")
    window.location.href = "nuevoproducto.html"
} else{
    alert("Nombre de usuario y/o contraseña incorrectos")
}
};
