/*
  Proyecto 1: Lista de Tareas (To-Do List)
  Crea una aplicación de lista de tareas que permita al usuario agregar, eliminar, marcar como completadas y listar tareas.
*/

/** 
 *@function empezar
 *@description función utilizada para inicializar el programa, imprime la bienvenida
 *@author Josue Carreño
*/
function empezar() {
  alert("Bienvenido a su Lista de Tareas");
  pedirOpcion();
}

/** 
 *@function pedirOpcion
 *@description función que muestra el menú, las posibles opciones a escojer representadas del 1 al 4
 *@author Josue Carreño
*/
function pedirOpcion(listado = [], opcion = "") {
  opcion = prompt("MENÚ: \n\nSeleccione alguna de las siguientes opciones por medio de un número: \n\n1.  Agregar Tarea \n2.  Eliminar Tarea \n3.  Marcar Tarea como Realizada \n4.  Listar Tareas");
  if (opcion == "1"){
      agregarTarea(listado, opcion);
  } else if (opcion == "2" || opcion == "3" || opcion == "4"){
      evaluarArreglo(listado, opcion);
  } else {
      alert("Por Favor ingrese una opción válida por medio de un número del 1 al 4");
      pedirOpcion();
  }
}

function evaluarArreglo(listado, opcion) {
  if (listado.length === 0) {
    alert("¡No existe ninguna tarea!");
    pedirOpcion(listado, opcion);
  } 
  else {
    imprimir(listado, opcion);
  } 
}


function agregarTarea(listado, opcion){
  let tarea = prompt("Por favor, Ingrese el nombre de la nueva tarea");
  listado.push({deber:tarea.toLowerCase()});
  alert("¡Se ha registrado su Tarea con Exito!");
  repetirProceso(listado, opcion);
}

function repetirProceso(listado, opcion) {
  let repetir = prompt("¿Desea repetir el proceso anterior? S/N");
  repetir.toLowerCase();
  if (repetir === "s" && opcion == "1"){
      agregarTarea(listado, opcion);
    }
  if (repetir === "s") {
        imprimir(listado, opcion);
    }
  if (repetir === "n") {
    pedirOpcion(listado);
  } else{
    alert("Por Favor ingrese una Opción válida");
    repetirProceso(listado, opcion);
  }
}

function eliminarTarea(listado, opcion, tarea) {
  listado.map(
    (lista) => {
      if (lista.deber == tarea) {
        listado.splice(listado.indexOf(lista), 1);
        alert("¡Se ha eliminado la Tarea con Exito!");
        repetirProceso(listado, opcion);
      }
    }
  );
  alert("La tarea que ha seleccionado no existe");
  repetirProceso(listado, opcion);
}  


function marcarCompletado(listado, opcion, tarea) {
  listado.map(
    (lista) => {
      if (lista.deber == tarea) {
        lista.completado = true
        alert("¡Se ha marcado como completada la Tarea con Exito!");
        repetirProceso(listado, opcion);
      }
    }
  );
  alert("La tarea que ha seleccionado no existe");
  repetirProceso(listado, opcion);
}

function listarTareas(listado, imprimirListado){
  alert("Su lista de Tareas: \n" + imprimirListado);
  pedirOpcion(listado);
}

function imprimir(listado, opcion) {
  let imprimirListado = "";
  let imprimirCompletados = "";
  let imprimirPendientes = "";
  listado.map(
    (lista) => {
      imprimirListado = imprimirListado + lista.deber + "\n"; 
      if (lista.completado === true) {
        imprimirCompletados += lista.deber + "\n";
      } else {
        imprimirPendientes += lista.deber + "\n";
      }
    }
  );
  if (opcion == "2") {
    let tarea = prompt("Escriba alguna de las tareas siguientes que desee eliminar \n\n" + imprimirListado); 
    eliminarTarea(listado, opcion, tarea.toLowerCase());
  }
  if (opcion == "3") {
    let tarea = prompt("Escriba alguna de las tareas siguientes que ha completado \n\n" + imprimirPendientes);
    marcarCompletado(listado, opcion, tarea.toLowerCase());
  }
  if (opcion == "4") {
    let tarea = prompt("Escoja que listado de  tareas desea ver: \n1.  Tareas Completadas \n2.  Tareas Incompletas \n3.  Todas las Tareas");
    if (tarea == "1" && imprimirCompletados.length == 0) {
      alert("¡No tiene Tareas Completadas!");
    } 
    else if (tarea == "1" && imprimirCompletados.length > 0) {
      alert("Su lista de Tareas Realizadas: \n" + imprimirCompletados);
    }
    else if (tarea == "2" && imprimirPendientes.length == 0) {
      alert("¡No tiene Tareas Icompletas!");
    } 
    else if (tarea == "2" && imprimirPendientes.length > 0) {
      alert("Su lista de Tareas pendientes: \n" + imprimirPendientes);
    }
    else if (tarea == "3") {
        alert("Su lista de Tareas: \n" + imprimirListado);
    }
    repetirProceso(listado, opcion);
  } 
}

empezar();

