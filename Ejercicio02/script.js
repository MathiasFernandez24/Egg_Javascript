function calcular() {
    var num = document.getElementById("input1").value
    let area = document.getElementById("p1")
    let perimetro = document.getElementById("p2")
    area.textContent = `el area es ${Math.PI * Math.pow(num, 2)} cm2`
    perimetro.textContent = `el perimetro es ${Math.PI * num * 2} cm`
}
document.getElementById("boton1").onclick = calcular;

