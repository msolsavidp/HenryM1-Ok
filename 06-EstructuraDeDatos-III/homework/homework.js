"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.size = function (){
  //si no existe ningun nodo
  if (this.value === null) return null;
  //Si solo tiene raiz
  if (this.right=== null && this.left === null) 
  return 1;
  //Si tiene a la derecha pero no a la izquierda
  if (this.left === null && this.right !== null){
   return 1 +  this.right.size();
  }
  //Si tiene a la izquierda pero no a la derecha
  if (this.right === null && this.left !== null){
    return 1 + this.left.size();
  }

  //Si tiene de los dos lados
return 1 + this.right.size() + this.left.size();
}

BinarySearchTree.prototype.insert = function (value){
  //Los mayores van a la derecha
  if (value > this.value){
    if (this.right === null) {
      this.right = new BinarySearchTree(value)}
      else {
    this.right.insert (value);}
  } 
    //Los menores al root van a la izquierda
    if (value < this.value){
      if (this.left===null) {
        this.left = new BinarySearchTree(value)}
      else {
        this.left.insert (value)}
  }
}

BinarySearchTree.prototype.contains = function (value){
  //Si el valor esta en la root
  if (value === this.value) return true;
  //Si el valor está a la izquierda
  if (value < this.value) {
    if (this.left === null) return false;
    return this.left.contains(value);}  
  
  if (this.right === null) return false;
    return this.right.contains(value)
   }


BinarySearchTree.prototype.depthFirstForEach = function (cb, order){
  //Pre-order --> root - izq - der
  if (order === "pre-order"){
    cb (this.value);
    if (this.left!== null) this.left.depthFirstForEach(cb,order);
    if (this.right!== null) this.right.depthFirstForEach(cb,order);
  }

  //Post-order--> izq - der - root

  else if (order === "post-order"){
    if (this.left !== null) this.left.depthFirstForEach(cb, order);
    if (this.right !== null) this.right.depthFirstForEach(cb, order);
    cb (this.value);
  }
  else {
  //In-order --> por defecto izq - root - der
  if (this.left!==null) this.left.depthFirstForEach(cb,order);
  cb (this.value);
  if (this.right!==null) this.right.depthFirstForEach(cb,order);
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, arr= []){
  if (this.left) arr.push(this.left);
  if (this.right) arr.push (this.right);
  cb(this.value);

  if (arr.length !== 0){
    arr.shift().breadthFirstForEach(cb, arr)
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
