var texto = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
document.getElementById("p_01").textContent = texto
var texto_view = document.getElementById("p_01")

function resaltar() {
    var array_texto = texto.split(" ")
    var texto_subrayado = ``
    console.log(array_texto);

    var largo = document.getElementById("input_01").value
    array_texto.forEach(element => {
        if (element.length >= largo) {
            texto_subrayado += `<mark>${element}</mark> `
        } else {
            texto_subrayado += `${element} `
        }
    });

    texto_view.innerHTML = texto_subrayado
    console.log(document.getElementById("p_01").textContent);
}

function quitar_resaltar() {
    document.getElementById("p_01").textContent = document.getElementById("p_01").textContent
}