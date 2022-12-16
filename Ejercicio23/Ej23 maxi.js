var flag = true;
const textoOriginal = document.getElementById("parrafo").textContent;
function mostrarMensaje() {
    const parrafo = document.getElementById("parrafo");
    // const div=document.getElementById("div");
    var texto = parrafo.textContent;
    if (flag) {
        pintarAmarillo();
    } else {
        parrafo.textContent = textoOriginal;
        flag = true;
    }

    function pintarAmarillo() {
        var textoArray = texto.split(" ");
        var remplazoTexto = "";
        // console.log(textoArray);
        // console.log(textoArray.toString());

        for (let i = 0; i < textoArray.length; i++) {
            let element = textoArray[i];
            if (element.length >= 8) {
                element = `<span style="background-color: yellow;">${element}</span> `;
            }
            element += " ";
            textoArray[i] = element;
            // console.log(i);
        }
        // console.log(textoArray.toString());
        textoArray.forEach(palabra => {
            remplazoTexto += palabra;
        });
        // console.log(remplazoTexto);
        parrafo.textContent = "";
        parrafo.innerHTML = remplazoTexto;
        flag = false;
    }
}

document.getElementById("botton").onclick = mostrarMensaje;