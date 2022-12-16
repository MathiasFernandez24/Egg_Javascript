function hacerGracia() {
    texto = document.getElementById("input_01").value
    document.getElementById("h1_01").textContent = `Type: ${typeof texto}`
    document.getElementById("input_01").value = ""
}
function hacerGracia2() {
    texto = parseInt((document.getElementById("input_02").value))
    document.getElementById("h1_01").textContent = `Type: ${typeof texto}`
    document.getElementById("input_02").value = ""
}


document.getElementById("input_01").onchange = hacerGracia;
document.getElementById("input_02").onchange = hacerGracia2;