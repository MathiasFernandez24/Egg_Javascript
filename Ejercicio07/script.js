var flagNumeroMaximo = true
var flagValidador = false
var numeroMaximo = 0;
var numeroUsuario = 0;

function ingresar() {
    var numeroInput = parseInt(document.getElementById("input_numero_maximo").value);
    console.log(numeroInput);
    console.log(typeof numeroInput);
    if (flagNumeroMaximo && numeroInput > 0) {
        numeroMaximo = numeroInput;
        document.getElementById("text_numero_maximo").textContent = `Su numero elegido es ${numeroMaximo}`;
        document.getElementById("p_encabezado").textContent = "Ahora ingrese numero hasta alcanzar su maximo";
        flagNumeroMaximo = false
        flagValidador = true
    } else {
        if (flagValidador) {
            numeroUsuario += numeroInput
            document.getElementById("text_numero_usuario").textContent = `Numeros acumulado: ${numeroUsuario}`
            if (numeroUsuario >= numeroMaximo) {
                document.getElementById("p_encabezado").textContent = `Tu numero acumulado es igual o mayor que tu
                numero inicial`;
                document.getElementById("input_numero_maximo").style.display = 'none'
                document.getElementById("boton_numero_maximo").style.display = 'none'
                document.getElementById("text_numero_maximo").textContent = `Num Max ${numeroMaximo}`;
                document.getElementById("text_numero_usuario").textContent = `Num Acum: ${numeroUsuario}`;
            }
        }
    }
}

document.getElementById("boton_numero_maximo").onclick = ingresar