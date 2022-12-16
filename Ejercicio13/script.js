var persona = {}
function hacerGracia1() {
    persona.nombre = document.getElementById("input_nombre").value
    document.getElementById("input_nombre").value = ""
    document.getElementById("p_01").textContent = JSON.stringify(persona);
}
function hacerGracia2() {
    persona.edad = document.getElementById("input_edad").value
    document.getElementById("input_edad").value = ""
    document.getElementById("p_01").textContent = JSON.stringify(persona);
}
function hacerGracia3() {
    persona.sexo = document.getElementById("input_sexo").value
    document.getElementById("input_sexo").value = ""
    document.getElementById("p_01").textContent = JSON.stringify(persona);
}

document.getElementById("input_nombre").onchange = hacerGracia1;
document.getElementById("input_edad").onchange = hacerGracia2;
document.getElementById("input_sexo").onchange = hacerGracia3;