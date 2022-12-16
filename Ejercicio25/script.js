function ejecutar() {
    nombre = document.getElementById("input_01").value
    apellido = document.getElementById("input_02").value

    document.getElementById("p_01").textContent = `Su nombre es ${nombre} y su apellido es ${apellido}`
}
