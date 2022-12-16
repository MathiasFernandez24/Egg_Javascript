function hacerGracia() {
    var input = document.getElementById("input_01").value
    var arrayPalabras = input.split(" ")
    console.log(arrayPalabras);
    var palabraMasLarga = ""
    arrayPalabras.forEach(p => {
        if (p.length > palabraMasLarga.length) {
            palabraMasLarga = p;
        }
    });
    document.getElementById("p_01").textContent = palabraMasLarga;
}

document.getElementById("input_01").onchange = hacerGracia