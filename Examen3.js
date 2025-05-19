function agregarTarea() {
  var tareaTexto = document.getElementById("nuevaTarea").value;

  if (tareaTexto === "") {
    alert("Escribe una tarea antes de agregar.");
    return;
  }

  var li = document.createElement("li");
  li.innerText = tareaTexto;

  var boton = document.createElement("input");
  boton.type = "button";
  boton.value = "Ok";

  boton.onclick = function () {
    li.remove();
  };

  li.appendChild(boton);

  var lista = document.getElementById("listaTareas");
  lista.appendChild(li);

  document.getElementById("nuevaTarea").value = "";
}
