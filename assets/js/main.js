function NuevoCliente(nombre, id, clave, saldo) {
  this.nombre = nombre;
  this.id = id;
  this.clave = clave;
  this.saldo = saldo;
}

const cliente1 = new NuevoCliente('Javier', 1, 1234, 15035502)
const cliente2 = new NuevoCliente('Valentina', 2, 2902, 15035502)
const cliente3 = new NuevoCliente('Maria', 3, 1410, 15035502)
const cliente4 = new NuevoCliente('Pia', 4, 4321, 15035502)
const cliente5 = new NuevoCliente('Marco', 5, 5678, 15035502)

const clientes = [cliente1, cliente2, cliente3, cliente4, cliente5]

let clienteValido = {}
let esValido = false


function validarUsuario(id, clave) {
  clientes.filter(cliente => {
    if (cliente.id === id && cliente.clave === clave){
      esValido = true
      clienteValido = cliente
      console.log(clienteValido)
      alert(`Bienvenid@ ${clienteValido.nombre}.`)
    } else {
      console.log(esValido)
      console.log(clienteValido)
    }
  })
}

function menuAcciones() {
  const saldo = clienteValido.saldo
  const seleccion = parseInt(
    prompt(
      `Seleccione que desea hacer:
      1.- Ver saldo.
      2.- Realizar giro.
      3.- Realizar deposito
      4.- Salir.`
    )
  );

  switch (seleccion) {
    case 1:
      alert(`Su saldo actual es: $${saldo} pesos.`);
      break;
    case 2:
      parseInt(prompt(
        `
        Su saldo actual es: $${saldo} pesos.
        Ingrese el monto que desea girar
        `
      ))
      clienteValido.saldo -= giro
      break;
    case 3:
        parseInt(prompt(
        `
        Su saldo actual es: $${saldo} pesos.
        Ingrese el monto que desea depositar
        `
      ))
      clienteValido.saldo += deposito
      break;
    case 4:
      console.log('Muchas gracias, lo esperamos prontamente');
      break;
    default:
      console.log('Opcion invalida, intente nuevamente');
  }
}

function app() {
  const saludo = alert("Bienvenido a Banca en Linea");
  const idUsuario = parseInt(prompt("Ingrese su ID"));
  const clave = parseInt(prompt("Ingrese su Clave"));
  validarUsuario(idUsuario, clave)
  if (esValido) {
      menuAcciones
    } 
    
  }


app();
