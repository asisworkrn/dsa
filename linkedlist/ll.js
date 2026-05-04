//Node -creating LL Node
//[value,refToNext]

//This is how you create a node
function Node(value) {
  this.val = value;
  this.next = null;
}

let newNode = new Node(5);

//Intianlize my linked list
var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

// 1 -> 2 -> 3 -> 4 -> 5

//add at index
//create a new Node
//Now reach at index-1 where you want to add this at any index
//Now first link newNode.next=curr.next
//Now curr.next=newNode

//corner cases if index at 0 or index at last

//size++

// ["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]
// [[],[1],[3],[1,2],[1],[1],[1]]

// 1 -> null

// 1 -> 3 -> null

//SOLUTION

var Node = function (val) {
  this.val = val;
  this.next = null;
};
var MyLinkedList = function () {
  this.head = null;
  this.size = 0;
};

/**
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;
  let curr = this.head;
  for (let i = 0; i < index; i++) {
    curr = curr.next;
  }

  return curr.val;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

/**
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let curr = this.head;
  if (this.head == null) {
    let newNode = new Node(val);
    this.head = newNode;
  } else {
    while (curr.next != null) {
      curr = curr.next;
    }

    let newNode = new Node(val);
    curr.next = newNode;
  }

  this.size++;
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;
  let newNode = new Node(val);
  let curr = this.head;
  if (index == 0) {
    this.addAtHead(val);
    return;
  } else if (index == this.size) {
    this.addAtTail(val);
    return;
  } else {
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    newNode.next = curr.next;
    curr.next = newNode;
  }
  this.size++;
};

/**
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index == 0) {
    this.head = this.head.next;
  } else {
    let curr = this.head;
    for (let i = 0; i < index - 1; i++) {
      curr = curr.next;
    }
    curr.next = curr.next.next;
  }
  this.size--;
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
