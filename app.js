// Declarar un array vacío para almacenar los nombres de los amigos
let nombresDeAmigos = [];

// Definir la función para agregar un amigo
function agregarAmigo() {
  // Obtener el valor del campo de entrada con id "amigo"
  let nombre = document.getElementById("amigo").value;
  
  // Verificar si el campo de entrada está vacío
  if (nombre == '') {
    // Mostrar una alerta si el campo está vacío
    alert("No se puede agregar un amigo sin nombre");
  } else {
    // Agregar el nombre al array de amigos
    nombresDeAmigos.push(nombre);
    // Limpiar el campo de entrada
    document.getElementById("amigo").value = "";

  }
}