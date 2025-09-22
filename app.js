// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos =[];

function asignarElementoTexto(elemento, texto) {
    let elementoHTML= document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}

//función agregar amigo a la lista
// Mostrar la lista final
function agregarAmigo(){
    let nombresAñadidos = document.getElementById("amigo").value;
    if (nombresAñadidos==""){
        alert("Por favor, inserte un nombre");
    } else {
    amigos.push(nombresAñadidos);
    limpiarCampo();
    mostrarLista();
   // asignarElementoTexto ("listaAmigos", `${amigos}`);
    }
}

//Función limpiar caja de texto
function limpiarCampo(){
    let valorCaja= document.getElementById("amigo");
    valorCaja.value="";
}

// Función para mostrar la lista de amigos con <li>
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    // limpiar la lista antes de mostrar
    lista.innerHTML = ""; 
    //recorre la lista
    for (let posición = 0; posición < amigos.length; posición++) {
        lista.innerHTML =lista.innerHTML + `<li>${amigos[posición]}</li>`;
    }
}

//Función sorteo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agregue al menos un amigo.");
    }
//selecciona una posición de la lista
    let posiciónAleatoria = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[posiciónAleatoria];

    asignarElementoTexto("resultado", `El amigo secreto es: ${amigoSecreto}`);
}