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
  // Obtener el elemento de la lista de amigos por su ID
  let lista = document.getElementById("listaAmigos");
  // Limpiar la lista antes de agregar nuevos elementos
  lista.innerHTML = "";
  // Iterar sobre cada nombre en la lista de nombres de amigos
  nombresDeAmigos.forEach(function(nombre) {
      // Crear un nuevo elemento <li> para cada nombre
      let li = document.createElement("li");
      // Establecer el contenido de texto del <li> al nombre actual
      li.textContent = nombre;
      // Agregar el <li> a la lista HTML
      lista.appendChild(li);
  });
}

// Función para seleccionar un amigo aleatorio de la lista
function sortearAmigo() {
  // Verificar si la lista de amigos está vacía
  if (nombresDeAmigos.length === 0) {
    alert("No hay amigos en la lista para seleccionar.");
    return;
  } 
  // Obtener un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * nombresDeAmigos.length);
  
  // Seleccionar el nombre correspondiente al índice aleatorio
  let amigoAleatorio = nombresDeAmigos[indiceAleatorio];
  
  // Mostrar el nombre del amigo seleccionado
document.getElementById("resultado").innerHTML = "Amigo seleccionado: " + amigoAleatorio;
}