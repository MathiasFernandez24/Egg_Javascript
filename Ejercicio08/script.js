var numeroMaximo = 0
var numeroMinimo = 0
var sumaDeNumeros = 0
var cantidadDeNumeros = 0
var input

function presionar() {
    input = parseInt(document.getElementById("input_1").value);
    if (input === 0) {
        document.getElementById("texto_1").textContent = `Numero Maximo ingresado: ${numeroMaximo}`;
        document.getElementById("texto_2").textContent = `Numero Minimo ingresado: ${numeroMinimo}`;
        document.getElementById("texto_3").textContent = `Promedio: ${sumaDeNumeros / cantidadDeNumeros}`;
        document.getElementById("titulo_1").textContent = `Programa Finalizado`;
        document.getElementById("input_1").style.display = 'none';
        document.getElementById("boton_1").style.display = 'none';
    } else {
        if (numeroMinimo === 0) {
            numeroMinimo = input;
        }
        cantidadDeNumeros++;
        input > numeroMaximo ? numeroMaximo = input : numeroMaximo;
        input < numeroMinimo ? numeroMinimo = input : numeroMinimo;
        sumaDeNumeros += input;
        document.getElementById("input_1").value = 0;
    }
}

document.getElementById("boton_1").onclick = presionar;