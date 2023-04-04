const data = [
    {
        nombre: "Javier Retamal",
        id: 1,
        clave: 1234,
        saldo: 1503502
    },
    {
        nombre: "Valentina Aliquintui",
        id: 2,
        clave: 2902,
        saldo: 999980
    },
    {
        nombre: "Maria Fontannaz",
        id: 3,
        clave: 1410,
        saldo: 1478908
    },
    {
        nombre: "Pia Aliquintui",
        id: 4,
        clave: 9922,
        saldo: 8700987
    },
    {
        nombre: "Marco Aliquintui",
        id: 5,
        clave: 6556,
        saldo: 4005081
    }
]

function comprobacionId(idUsuario) {
    data.find((usuario) => {
        if (usuario.id === idUsuario) {
            return true;
        }
    })
}

function app() {
  let saludo = alert("Bienvenido a Banca en Linea");
  let idUsuario = parseInt(prompt("Ingrese su ID"));



  data.find((usuario) => {
    if (usuario.id === idUsuario) {
      let claveUsuario = parseInt(prompt("Ingrese su Clave"));
      data.find((usuario) => {
        if (usuario.clave === claveUsuario) {
          let saludUsuario = alert(`Bienvenid@ ${usuario.nombre}.`);
          let seleccion = parseInt(
            prompt(
              `Seleccione que desea hacer:
              1.- Ver saldo.
              2.- Realizar giro.
              3.- Realizar deposito
              4.- Salir.`
            )
          );
        } else {
            alert("Clave incorrecta")
        }
      });
    } else {
        alert("ID de usuario no existe")
        app()
    }
  });
}

app();
