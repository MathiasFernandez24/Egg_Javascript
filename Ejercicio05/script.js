function calcular() {
    var num1 = parseInt(document.getElementById("input1").value);
    var num2 = parseInt(document.getElementById("input2").value);
    var letra = document.getElementById("input3").value.toLowerCase();
    var resultado = 0
    switch (letra) {
        case "s":
            resultado = num1 + num2
            break;
        case "r":
            resultado = num1 - num2
            break;
        case "m":
            resultado = num1 * num2
            break;
        case "d":
            resultado = num1 / num2
            break;

        default:
            resultado = "imposible de calcular, hay datos mal ingresados"
            break;
    }

    document.getElementById("resultado").textContent = `El resultado es ${resultado}`

}


document.getElementById("boton1").onclick = calcular;