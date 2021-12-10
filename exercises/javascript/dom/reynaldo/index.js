'use strict'

//creando las constantes 
const entrada = document.getElementById('todoInput');
const boton = document.getElementById('addToDo');
const lista = document.querySelector('#container > ul');

//Función para insertar la palabra 
const crearToDo = function () {
  const palabra = entrada.value;
  if( entrada.value ) {
    lista.innerHTML = `<li><span><i class="fa fa-trash"></i></span> ${ palabra }</li>` + lista.innerHTML;
  }
  else{
      alert("El campo está vacío, escribe algo!!")
  }

}

boton.addEventListener('click', () => { crearToDo() })

lista.addEventListener('click', (e) => {
  if( e.target.classList.contains('fa-trash') ) {
    e.target.parentNode.parentNode.remove();
  }
})