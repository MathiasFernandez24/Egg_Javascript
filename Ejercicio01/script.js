const respuesta = prompt("Como está el dia?");
const texto = document.createElement("p")
texto.textContent = "El dia está " + respuesta
document.body.appendChild(texto)