class Node{
    constructor(data){
        this.head={
            value:data,
            previous:null,
            next:null,
        }
    }
}
class Dll{
    constructor(data){
        const d=new Node(data);
        this.head=d;
        this.previous=d.head;
        this.tail=null;
    }
}
const d1=new Dll();
console.log(10);
console.log(20);
console.log(30);