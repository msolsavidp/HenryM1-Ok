function Node(value) {
    this.value = value;
    this.next = null;
  }
  
  function LinkedList() {
    this.head = null;
  }
  
  LinkedList.prototype.add = function (value){
  var node = new Node (value);
  var current = this.head;
  if (this.head !== null) {
      while (current.next !== null){
        current = current.next;
        }  
          current.next = node
        
      } else { this.head = node
    } 
  }
  
  LinkedList.prototype.remove = function (){
    var current = this.head;
    var deletedNode = null;
    //No hay list
    if (this.head === null) return null;
      //Tiene un nodo
    if (this.head.next === null){
      deletedNode = this.head.value;
        this.head=null;
        return deletedNode
        //puedo usar un while tambien --> while (current.next.next !== null) {current = current.next}
      } else { while (current.next.next!==null){
        //Tiene varios nodos y busco el último
        current = current.next;
      }  
        deletedNode = current.next.value;
        current.next = null;
        return deletedNode
      }
    }
  
  
  
  
    LinkedList.prototype.search = function (data){
        let current = this.head;
        while (current!== null ){
          if (typeof data === "function"){
            var a = data(current.value);
            }
            if (current.value === data || a) return current.value;
            current = current.next; 
          }
          
              return null;
          }
    


    let linkedList = new LinkedList ();

    linkedList.add('one');
    console.log(linkedList)
    linkedList.add('two');
    console.log(linkedList)
    linkedList.add('three');
    console.log(linkedList)
    linkedList.add('four');
    console.log(linkedList)

    console.log(linkedList.search('two')) //'two');
    console.log(linkedList.search('sdd')) //null);
    console.log(linkedList.search('one')) //'one');
    console.log(linkedList.search('four')) //'four');

    linkedList.remove()
    console.log(linkedList)
    linkedList.remove()
    console.log(linkedList)