function verificar() {
    var letra = document.getElementById("input1").value.toLowerCase();
    console.log(typeof letra);
    if (letra === "n" || letra === "s") {
        document.getElementById("input1").value = "";
        document.getElementById("p1").textContent = "Presionaste N o S  !"
    } else {
        document.getElementById("input1").value = "burro";
        document.getElementById("p1").textContent = "Presionaste cualquier tecla menos N o S"
    }

}
document.getElementById("boton1").onclick = verificar;