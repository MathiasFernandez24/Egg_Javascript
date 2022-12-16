var matriz = [[3], [6], [9], [12], [15]]

function ejecutar() {
    document.getElementById("p_01").textContent = `Matriz: ${matriz}`
    console.log("matriz-> ", matriz);

    var vector = matriz.flat(1)

    document.getElementById("p_02").textContent = `Vector: ${vector}`
    console.log("vector-> ", vector);

}