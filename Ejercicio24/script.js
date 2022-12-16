var form_1 = document.getElementById("form1")
function calcular() {
    var numero = document.getElementById("input_01").value
    numero = numero / 2
    document.getElementById("p_01").textContent = `Radio del circulo ->  ${numero}`
}