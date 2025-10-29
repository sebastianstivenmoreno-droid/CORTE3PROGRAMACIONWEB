
// Array global vacío para guardar los productos
let productos = [];

// Función principal que se ejecuta al dar click en "Guardar"
function genericFunction() {
  try {
    // 1 Capturar los datos del formulario
    const id = document.getElementById("id_input_id").value.trim();
    const nombre = document.getElementById("id_input_nombre").value.trim();
    const telefono = document.getElementById("id_input_Telefono").value.trim();
     const Direccion = document.getElementById("id_input_Direccion").value.trim();
    const producto = document.getElementById("id_input_Informacion_Basica").value.trim();
    const precio = document.getElementById("id_input_$").value.trim();
    const email = document.getElementById("id_input_nombre_E-mail").value.trim();

    // 2Validaciones con Swal.fire
    if (!id || !nombre || !telefono || !producto || !precio|| !email) {
      Swal.fire({
        icon: "error",
        title: "Campos vacíos",
        text: "Por favor completa todos los campos del formulario."
      });
      return;
    }

    // Mostrar en consola cada dato
    console.log("ID:", id);
    console.log("Nombre:", nombre);
    console.log("Teléfono:", telefono);
    console.log("producto:", producto);
    console.log("Direccion");
    console.log("precio:", precio);
    console.log("Email:", email);

    // Crear el objeto y agregarlo al array
    const nuevoProducto = {
      id,
      nombre,
      telefono,
      producto,
      Direccion,
      precio,
      email
    };

    productos.push(nuevoProducto);

    // Mostrar el array en consola
    console.log("Array actualizado:", productos);

    // Llamar la arrow function de éxito
    mensajeEnvio();

  } catch (error) {
    console.error(error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Ocurrió un problema al guardar los datos."
    });
  }
}

// Arrow function para mostrar mensaje de éxito
const mensajeEnvio = () => {
  Swal.fire({
    icon: "success",
    title: "Datos guardados correctamente",
    text: "El producto se agregó al array con éxito."
  });
};
