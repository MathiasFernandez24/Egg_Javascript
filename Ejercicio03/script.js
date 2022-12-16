function saberSiEsMayor() {
    num = document.getElementById("input1").value
    num = parseInt(num)
    if (num >= 18) {
        document.getElementById("p1").textContent = `Eres mayor de edad, ya tienes ${num} años!`
    } else {
        document.getElementById("p1").textContent = `Eres menor de edad, tan solo tienes ${num} años..`
    }
}

document.getElementById("boton1").onclick = saberSiEsMayor;