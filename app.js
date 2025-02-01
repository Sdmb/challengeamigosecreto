// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaNombresAmigos = [];
const ulLista = document.querySelector("#listaAmigos");

//CREO FUNCION QUE PERMITE AGREGAR EL NOMBRE A UNA LISTA
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;
  if (nombreAmigo == "") {
    alert("Por favor ingrese un nombre valido");
  } else {
    listaNombresAmigos.push(nombreAmigo);
    limpiarCaja();
    muestraElementoCreandoLi(nombreAmigo);
  }
}

//FUNCION Q SORTEA EL NOMBRE DEL AMIGO ELEGIDO

function sortearAmigo() {
  if (listaNombresAmigos.length > 0) {
    let posicion = generaNumero(listaNombresAmigos);
    muestraElemento(
      "resultado",
      `El amigo secreto sorteado es : ${listaNombresAmigos[posicion]}`
    );
    condicionesIniciales();
  } else {
    muestraElemento("ul", "Usted no ingreso ningun amigo");
  }
}

function limpiarCaja() {
  document.querySelector("#amigo").value = "";
}

function muestraElemento(elemento, texto) {
  let elementoHtml = document.getElementById(elemento);
  elementoHtml.innerHTML = texto;
}

function generaNumero(lista) {
  let numeroGenerado = Math.floor(Math.random() * lista.length);
  return numeroGenerado;
}

function condicionesIniciales() {
  limpiarCaja();
  listaAmigos = [];
  eliminaLI();
}

function muestraElementoCreandoLi(nombre) {
  //Creamos un elemento de tipo <li>
  let li = document.createElement("li");
  li.innerHTML = nombre;
  ulLista.appendChild(li);
}

function eliminaLI() {
  //Elimino los elementos de tipo <li> hijos de ul
  while (ulLista.firstChild) {
    ulLista.removeChild(ulLista.firstChild);
  }
}
