function calcular() {
    var num1 = parseInt(document.getElementById("input1").value);
    var respuesta;
    console.log(num1);
    if (num1 == 0) {
        respuesta = "El numero no es par ni impar"
    } else {
        num1 = num1 % 2
        switch (num1) {
            case 0:
                respuesta = "El numero es par"
                break;
            case 1:
            case -1:
                respuesta = "El numero es impar"
                break;
            default:
                respuesta = "no deberia mostrarse esto"
                break;
        }
    }

    document.getElementById("resultado").textContent = respuesta;
}
document.getElementById("boton1").onclick = calcular;