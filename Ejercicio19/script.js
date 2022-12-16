function ejecutar() {
    var array1 = []
    for (let i = 0; i < 50; i++) {
        array1[i] = Math.floor(Math.random() * 100)
    }
    document.getElementById("p_01").textContent = array1
    array1.sort()
    var array2 = []
    for (let i = 0; i < 20; i++) {
        if (i < 10) {
            array2.push(array1[i]);
        } else {
            array2.push(0.5)
        }
    }
    document.getElementById("p_02").textContent = array2
}

