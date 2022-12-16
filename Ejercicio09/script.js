function hacerSuGracia() {
    var input = document.getElementById("input_1").value;
    var textoParaMostrar = input.split("").join(" ");
    console.log(textoParaMostrar);
    document.getElementById("texto_1").textContent = textoParaMostrar;
}


document.getElementById("input_1").onchange = hacerSuGracia;