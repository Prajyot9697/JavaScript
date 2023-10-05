class node{
    constructor(data){
            this.value=data;
            this.pre=null;
            this.next=null;
        }
    }
class Doublylinkedlist {
 constructor(value) {
    const newnode = new node(value);
    //initialize head and tail
    this.head = newnode;
    this.tail = newnode;
    this.length = 1;
    }
    push(value) {
    const newnode = new node(value);
    // adding a node to an empty linkedlist
    if (!this.length) {
    this.head = newnode;
    this.tail = newnode;
    } else {
    this.tail.next = newnode;
    newnode.pre = this.tail;
    this.tail = newnode;
    }
    this.length++;
    return this;
}
}
   
const mynode=new Doublylinkedlist(10);
console.log(mynode);
mynode.push(20);
mynode.push(30);
mynode.push(40);
mynode.push(50);
mynode.push(60);
console.log(mynode);