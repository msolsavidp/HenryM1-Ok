'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length < 1) return [];
  //Elijo el número random que sirve de pivot
  //Esta formula me da el indice del valor
  var max = array.length;
  var x = Math.floor(Math.random() * max);
 // let value = Math.floor(Math.random()*array.length);
  //tomo del valor
  let randomValue = array[x];
  //creo los arrays vacíos para rellenarlos
  let arrMayores = [];
  let arrMenores = [];

  //recorro el array para comparar sus valores con mi pivot
  for (let i=0; i<array.length; i++){
    //comparo los valores con mi pivot
    //si es menor lo pusheo al array de menores
    if (array[i]<=randomValue && i !== x){
      arrMenores.push(array[i])
    } 
    
    if (array[i]>randomValue && i !== x){
      //si es mayor lo pusheo al array de mayores
      arrMayores.push(array[i]);
    }
  }
  //recursion de la función sobre los arrays de los menores y luego de los mayores, luego los uno
  return [].concat(quickSort(arrMenores), randomValue, quickSort(arrMayores));
}


function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  function unir (arr1, arr2){
    let newArr = [];
    while (arr1.length || arr2.length) {
        if (!arr1.length) newArr.push(arr2.shift());
        else if (!arr2.length) newArr.push(arr1.shift());

        else if (arr1[0]>arr2[0]){
            newArr.push(arr2.shift())
        } else {newArr.push(arr1.shift())}
    }
    return newArr
}

  if (array.length<=1) return array;

  //Divido el array en dos mitades iguales
  let mitad = Math.floor(array.length/2);
  let inicio = array.slice(0, mitad);
  let final = array.slice (mitad);

  return unir(mergeSort(inicio), mergeSort(final))
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
