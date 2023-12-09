//Declaracion del set de peliculas inicial
var listaPeliculas = ["Cinema paradiso","The Hobbit", "Kill Bill"];

//Mostrar el set de peliculas inicial
document.getElementById("listapelis").innerHTML=listaPeliculas.toString();

//Funcion para agregar la pelicula ingresada por el usuario
function agregarPelicula(){
  listaPeliculas.push(document.getElementById('peliAgregada').value); //Agrego la pelicula ingresada por el usuario
  document.getElementById("listapelis").innerHTML=listaPeliculas.toString(); //Muestro la lista de peliculas modificadas
}
//Funcion para eliminar del array la pelicula ingresada por el usuario
function eliminarPelicula(){
  var indexPeliaBorrar =listaPeliculas.indexOf(document.getElementById('peliEliminada').value); // Guardo en una variable el resultado del indexOf para verificar si la pelicula ingresada por el usuario existe en el array. Si no existe por defecto devuelve -1
  if (indexPeliaBorrar != -1) //Solo borra la pelicula si el resultado es distinto a -1
   listaPeliculas.splice(listaPeliculas.indexOf(document.getElementById('peliEliminada').value),1);
  
  document.getElementById("listapelis").innerHTML=listaPeliculas.toString();}