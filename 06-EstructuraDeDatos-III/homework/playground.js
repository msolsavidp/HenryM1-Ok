function BinarySearchTree(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
  
  BinarySearchTree.prototype.size = function (){
    var count = 0;
    //si no existe ningun nodo
    if (this.value === null) return null;
    //Si solo tiene raiz
    if (this.value!== null) 
    count ++;
    //Si tiene a la derecha pero no a la izquierda
    if (this.left === null && this.right !== null){
      count++;
      this.right.size();
    }
    //Si tiene a la izquierda pero no a la derecha
    if (this.right === null && this.left !== null){
      count++;
      this.left.size();
    }
    return count
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
      if (this.left === value) {return true}
      else {
        this.left.contains(value);
      }  
    }
      else if (this.right === value) {return true}
      else { this.right.contains(value)}
     }
  
  
  BinarySearchTree.prototype.depthFirstForEach = function (){
    
  }
  
  BinarySearchTree.prototype.breadthFirstForEach = function (){
    
  }