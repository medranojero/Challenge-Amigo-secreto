// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos =[];

function asignarElementoTexto(elemento, texto) {
    let elementoHTML= document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}

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

function limpiarCampo(){
    let valorCaja= document.getElementById("amigo");
    valorCaja.value="";
}


function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    // limpiar la lista antes de mostrar
    lista.innerHTML = ""; 

    for (let posición = 0; posición < amigos.length; posición++) {
        lista.innerHTML =lista.innerHTML + `<li>${amigos[posición]}</li>`;
    }
}
