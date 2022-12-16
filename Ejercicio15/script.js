var circulo = {
    radio: "",
}

function area() {
    circulo.radio = parseFloat(document.getElementById("input_01").value)
    document.getElementById("p_01").textContent = (Math.PI * circulo.radio ** 2).toFixed(2)
}

function perimetro() {
    circulo.radio = parseFloat(document.getElementById("input_01").value)
    document.getElementById("p_01").textContent = (Math.PI * circulo.radio * 2).toFixed(2)

}