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
 *@param {[]} listado - Arreglo donde se almacenan los objetos. Cada objeto es una tarea
 *@param {""} opcion - String el cual proporciona la petición del usuario para que se realice un proceso 
 *@description función que muestra el menú, las posibles opciones a escojer representadas del 1 al 4
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

/** 
 *@function evaluarArreglo
 *@param {[]} listado - Arreglo donde se almacenan los objetos. Cada objeto es una tarea
 *@param {""} opcion - String el cual proporciona la petición del usuario para que se realice un proceso 
 *@description función que evalúa si el arreglo está vacío, en caso de que se quiera realizar una consulta
*/
function evaluarArreglo(listado, opcion) {
  if (listado.length === 0) {
    alert("¡No existe ninguna tarea!");
    pedirOpcion(listado, opcion);
  } 
  else {
    imprimir(listado, opcion);
  } 
}

/** 
 *@function repetirProceso
 *@param {[]} listado - Arreglo donde se almacenan los objetos. Cada objeto es una tarea
 *@param {""} opcion - String el cual proporciona la petición del usuario para que se realice un proceso 
 *@description Pregunta al usuario si desea repetir el proceso anterior
*/
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

/** 
 *@function agregarTarea
 *@param {[]} listado - Arreglo donde se almacenan los objetos. Cada objeto es una tarea
 *@param {""} opcion - String el cual proporciona la petición del usuario para que se realice un proceso 
 *@description función que agrega a Listado un objeto con la propiedad: deber. El valor a asignar es la variable tarea pedida al usuario por medio de un promt
*/
function agregarTarea(listado, opcion){
  let tarea = prompt("Por favor, Ingrese el nombre de la nueva tarea");
  listado.push({deber:tarea.toLowerCase()});
  alert("¡Se ha registrado su Tarea con Exito!");
  repetirProceso(listado, opcion);
}

/** 
 *@function eliminarTarea
 *@param {[]} listado - Arreglo donde se almacenan los objetos. Cada objeto es una tarea
 *@param {""} opcion - String el cual proporciona la petición del usuario para que se realice un proceso 
 *@param {""} tarea - String que contiene el valor de la tarea que se desea eliminar
 *@description Elimina el objeto en el que se encuentra la tarea a eliminar escrita por el usuario anteriormente
*/
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

/** 
 *@function marcarCompletado
 *@param {[]} listado - Arreglo donde se almacenan los objetos. Cada objeto es una tarea
 *@param {""} opcion - String el cual proporciona la petición del usuario para que se realice un proceso 
 *@param {""} tarea - String que contiene el valor de la tarea que se desea marcar como completada
 *@description si la tarea existe entones añade una nueva propiedad al objeto: completado = true
*/
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

/** 
 *@function imprimir
 *@param {[]} listado - Arreglo donde se almacenan los objetos. Cada objeto es una tarea
 *@param {""} opcion - String el cual proporciona la petición del usuario para que se realice un proceso 
 *@description Generae imprime un listado de todas las tareas, también de las pendientes y las realizadas. también evalúa que cada listado contenga algún valor antes de mostrarse de lo contrario avisa que no existe tarea con las caracteristicas proporcionadas
*/
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
  let tarea = "";
  switch (opcion){
    case "2":
      tarea = prompt("Escriba alguna de las tareas siguientes que desee eliminar \n" + imprimirListado); 
      eliminarTarea(listado, opcion, tarea.toLowerCase());
      break;
    case "3":
      tarea = prompt("Escriba alguna de las tareas siguientes que ha completado \n" + imprimirPendientes);
      marcarCompletado(listado, opcion, tarea.toLowerCase());
    case "4":
      tarea = prompt("Escoja que listado de  tareas desea ver: \n1.  Tareas Completadas \n2.  Tareas Incompletas \n3.  Todas las Tareas");
      switch (tarea){
        case "1":
          if (imprimirCompletados.length > 0) {
            alert("Su lista de Tareas Realizadas: \n" + imprimirCompletados);
          }
          else {
            alert("¡No tiene Tareas Completadas!");
          }
          break;
        case "2":
          if (imprimirPendientes.length > 0) {
            alert("Su lista de Tareas pendientes: \n" + imprimirPendientes);
          }
          else {
            alert("¡No tiene Tareas Incompletas!");
          }
          break;
        case "3":
          alert("Su lista de Tareas: \n" + imprimirListado);
          break;
      }
      repetirProceso(listado, opcion);
  } 
}

empezar();

