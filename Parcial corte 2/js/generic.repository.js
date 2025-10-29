/* Este es un ejemplo de la estrucutra esperada del array de objetos */
/* const productos = [
  {
    id: 1,
    nombre: "Producto A",
    precio: 50,
    categoria: "Categoría 1",
    proveedor: {
      nombre: "Proveedor 1",
      entrega: "2025-09-30",
    },
    inventario: {
      disponible: 300,
      reservado: 50,
      total: 350,
    },
    estado: "activo",
  },
  {
    id: 2,
    nombre: "Producto B",
    precio: 120,
    categoria: "Categoría 2",
    proveedor: {
      nombre: "Proveedor 2",
      entrega: "2025-10-08",
    },
    inventario: {
      disponible: 450,
      reservado: 150,
      total: 600,
    },
    estado: "inactivo",
  }, ... + otros 3 objetos
]; */

/* declaro la variable a la cual le agregaremos los valores capturados */
let arrayProductos = [];

/*...que luego paso a una función genérica (arrow function)  */

const genericFunction = () => {
  /* Esta función se encarga de capturar los datos de cada input y luego los va mostrando en consola */

  let id = document.getElementById("id_input_id").value;
  console.log("🚀 ~ genericFunction ~ id:", id);
  /* debe validar si la variable contiene o no datos para mostrar un Swal fire
  ejemplo: 
  if(!id){Swal.fire({icon:'error', title: 'Debe ingresar el Id del producto', text:'Valor obligatorio'});return;} */

  let nombreProducto = document.getElementById("id_input_nombre").value;
  console.log("🚀 ~ genericFunction ~ nombreProducto:", nombreProducto);
  let precio = document.getElementById("id_input_precio").value;
  console.log("🚀 ~ genericFunction ~ precio:", precio);
  let categoria = document.getElementById("id_input_categoria").value;
  console.log("🚀 ~ genericFunction ~ categoria:", categoria);
  let proveedor = document.getElementById("id_input_nombre_proveedor").value;
  console.log("🚀 ~ genericFunction ~ proveedor:", proveedor);
  let fechaEntrega = document.getElementById("id_input_entrega").value;
  console.log("🚀 ~ genericFunction ~ fechaEntrega:", fechaEntrega);
  let disponible = document.getElementById("id_input_disponible").value;
  console.log("🚀 ~ genericFunction ~ disponible:", disponible);
  let reservado = document.getElementById("id_input_reservado").value;
  console.log("🚀 ~ genericFunction ~ reservado:", reservado);
  let total = document.getElementById("id_input_total").value;
  console.log("🚀 ~ genericFunction ~ total:", total);

  /* acá se invoca a la función crear objeto y se le pasan los parámetros (cada variable creada) */
  const rta = crearArray(
    id,
    nombreProducto,
    precio,
    categoria,
    proveedor,
    fechaEntrega,
    disponible,
    reservado,
    total
  );

  /* este console muestra la respuesta de la función crearObjeto. 
  Si la rta es diferente de vacío, se puede usar un operador ternario o una condicional para mostrar error o para invocar a la siguiente función; mensajeEnvio() 
  
  ejemplo operador ternario ---> 
  
  condición ? se ejecuta esto si la condición es true                                                         : se ejecuta esto si la condición el false; 
  
  !rta      ? Swal.fire({icon:'error',title:"Error", text:'Parece que el array de objetos contiene errores!}) : mensajeEnvio();
  
  */

  //console.log("🚀 ~ genericFunction ~ rta:", rta);
};

/* esta es la función de crearObjetos, recibe todos los parámetros pasados desde el callback function */
function crearArray(
  id,
  nombreProducto,
  precio,
  categoria,
  proveedor,
  fechaEntrega,
  disponible,
  reservado,
  total
) {
  /* dentro del bloque de la función se crea el objeto, asignando el valor recibida a cada propiedad del objeto */
  arrayProductos.push(
    {
      id,
      nombreProducto,
      precio,
      categoria,
      proveedor: { proveedor, fechaEntrega },
      inventario: { disponible, reservado, total },
    } /* {}, {}, {}, {} ...acá sigue agregando cada objeto */
  );

  /* al final, se retorna el objeto creado, el cual se recibirá en el punto donde fue invocada la función */
  return arrayProductos;
}
