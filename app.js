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
    asignarElementoTexto ("listaAmigos", `${amigos}`);
    }
}

function limpiarCampo(){
    let valorCaja= document.getElementById("amigo");
    valorCaja.value="";
}

