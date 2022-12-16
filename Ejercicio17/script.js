function hacerSuGracia() {
    var input = document.getElementById("input_1").value;
    var textoParaMostrar1 = input.split("").join("-");
    var textoParaMostrar2 = input.split("");
    textoParaMostrar2.splice(-2)

    document.getElementById("texto_1").textContent = `texto original:    ${textoParaMostrar1}`;
    document.getElementById("texto_2").textContent = `texto modificado:    ${textoParaMostrar2.join("-")}`;
}


document.getElementById("input_1").onchange = hacerSuGracia;