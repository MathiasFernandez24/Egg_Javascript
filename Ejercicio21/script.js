objeto = {
    nombre: "Mathias",
    edad: 29,
    apellido: "Fernandez",
    muerto: false
}

function ejecutar() {
    var array = Object.keys(objeto)
    console.log(array);
    var array = Object.values(objeto)
    console.log(array);
}