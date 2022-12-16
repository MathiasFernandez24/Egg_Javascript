var libros = []
function agregar() {
    var isbn = document.getElementById("input_isbn").value
    var titulo = document.getElementById("input_titulo").value
    var autor = document.getElementById("input_autor").value
    if (isbn != "" && titulo != "" && autor != "") {
        var libro = {
            isbn: isbn,
            titulo: titulo,
            autor: autor
        }
        libros.push(libro)
        document.getElementById("p_01").textContent = "Libro agregado Exitosamente!"

        //agregar los datos a la lista
        let tablaDatos = document.getElementById("tabla_01").insertRow();
        let col1 = tablaDatos.insertCell(0);
        let col2 = tablaDatos.insertCell(1);
        let col3 = tablaDatos.insertCell(2);

        col1.innerHTML = isbn
        col2.innerHTML = titulo
        col3.innerHTML = autor

        //limpio los input
        document.getElementById("input_isbn").value = ""
        document.getElementById("input_titulo").value = ""
        document.getElementById("input_autor").value = ""

    } else {
        document.getElementById("p_01").textContent = "Datos incompletos, ingresar correctamente"
    }
    console.log(libros);
}
