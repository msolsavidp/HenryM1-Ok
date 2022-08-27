function quickSort(array){
    //Mientras en el array haya más de un elemento --> condición de corte
if(array.length <=1 ) return array;
console.log(array)

let value = Math.floor(Math.random()*array.length)
console.log(value)
let randomValue = array[value]
console.log(randomValue)

let arrMayores = [];
let arrMenores = [];

for (let i=0; i<array.length; i++){
    if (array[i]<randomValue){
      arrMenores.push(array[i])
    } else {
      arrMayores.push(array[i])
    }
  }

  console.log(arrMayores)
  console.log(arrMenores)

 return quickSort(arrMenores).concat(quickSort(arrMayores));
}


console.log(quickSort ([89,5,-8,9,10,54,45,78,3]))


/*function mergeSort(array) {

    if (array.length<=1) return array;

    let mitad = Math.floor(array.length/2);
    console.log(mitad)

    let inicio = array.slice(0, mitad);
    let newInicio = [];
    let min = Math.min(inicio)
    var index = array.indexOf(min);
    newInicio.push(min);
    inicio.splice(index, min);

    mergeSort(inicio);
    console.log(newInicio)

    let final = array.slice (mitad);
    let newFinal = [];
    let min2 = Math.min(final)
    var index2 = array.indexOf(min2);
    newFinal.push(min2);
    final.splice(index2, min2);

    mergeSort(inicio);
    mergeSort(final);
    console.log(final);

    return quickSort(newInicio).concat(quickSort(newFinal))
}

console.log(mergeSort([5, 1, 4, 2, 8]))*/

function mergeSort(array) {
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

    let mitad = Math.floor(array.length/2);
    //console.log(mitad)

    let inicio = array.slice(0, mitad);
    //console.log(inicio)

    /*for (let i=0; i<inicio.length; i++){
        if (inicio[i]>inicio[i+1]){
            let temp = inicio[i];
            inicio[i] = inicio[i+1];
            inicio[i+1] = temp
            }
        }*/

    //mergeSort(inicio);
    //console.log(inicio)

    let final = array.slice (mitad);
    //console.log(final);

    // for (let i=0; i<final.length; i++){
    //     if (final[i]>final[i+1]){
    //         let temp = final[i];
    //         final[i] = final[i+1];
    //         final[i+1] = temp
    //         }
    //     }
    //mergeSort(final);
    //console.log(final);

    return unir(mergeSort(inicio), mergeSort(final))
}

console.log(mergeSort([5, 1, 4, 2, 8, 87, 88, 88]))

/*function mergeSort(array) {

    if (array.length<=1) return array;
    let mitad = Math.floor(array.length/2);
    console.log(mitad)

    let inicio = [];
    let final = [];

}

mergeSort([10, -2, -7, 4])*/