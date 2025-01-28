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
    // llamar a la función para actualizar la lista de amigos
    actualizarListaDeAmigos();
  }
}

function actualizarListaDeAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos
    nombresDeAmigos.forEach(function(nombre) {
    // Crear un nuevo elemento <li>
    let li = document.createElement("li");
    // Establecer el contenido de texto del <li> al nombre actual
    li.textContent = nombre;
      
    // Agregar el <li> a la lista HTML
    lista.appendChild(li);
    });
}