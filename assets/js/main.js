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

clientes.map(cliente => {
  console.log(cliente.nombre)
})

function buscarUsuario(idUsuario) {
  clientes.map(cliente => {
    if (cliente.id === idUsuario) {
      return ingresarClave()
    } else {
      return buscarUsuario(idUsuario)
    }
  })
}

function ingresarClave(idUsuario) {
  const clave = parseInt(prompt("Ingrese su Clave"));
  clientes.map(cliente => {
    if (cliente.id === idUsuario) {
      clientes.map(cliente => {
       if (cliente.clave === clave) {
        const saludUsuario = alert(`Bienvenid@ ${cliente.nombre}}.`)
        return menuAcciones()
       } else {
        return ingresarClave(idUsuario)
       }
      })
    }
  })
}

function menuAcciones() {
  const seleccion = parseInt(
    prompt(
      `Seleccione que desea hacer:
      1.- Ver saldo.
      2.- Realizar giro.
      3.- Realizar deposito
      4.- Salir.`
    )
  );
  const saldo = data.map(usuario => {
    if (usuario.id === id) {
      return usuario.saldo
    } else {
      return 0
    }
  })

  switch (seleccion) {
    case 1:
      alert(`Su saldo actual es: $${saldo} pesos.`);
      break;
    case 2:
      const giro = parseInt(prompt(
        `
        Su saldo actual es: $${saldo} pesos.
        Ingrese el monto que desea girar
        `
      ))
      saldo -= giro
      break;
    case 3:
      const deposito = parseInt(prompt(
        `
        Su saldo actual es: $${saldo} pesos.
        Ingrese el monto que desea depositar
        `
      ))
      saldo += deposito
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
  buscarUsuario(idUsuario)
  ingresarClave(idUsuario)  
  menuAcciones()
}

app();
