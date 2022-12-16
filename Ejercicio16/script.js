function crearAleatoreo() {
    let min = parseInt(document.getElementById("input_01").value);
    let max = parseInt(document.getElementById("input_02").value);
    if (min != "" && max != "") {
        var array1 = []
        var array2 = []
        for (let i = 0; i < 5; i++) {
            var array2
            array1[i] = (Math.random() * (max - min) + min).toFixed(0);
            array2[i] = (Math.random() * (max - min) + min).toFixed(0);
        }
        document.getElementById("p_01").textContent = array1.join(" - ");
        document.getElementById("p_02").textContent = array2.join(" - ");
    } else {
        alert("Ingresa los datos antes de presionar 'CREAR'")
    }
}