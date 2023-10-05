class Node {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
    }
}
class Sll {
    constructor(data) {
        const s = new Node(data);
        this.head = s;
        this.tail = s;
    }
}
const s1=new Sll(10);
console.log(Sll);

class Dll {
    constructor(data) {
        const d = new Node(data);
        this.head = d;
        this.tail = d;
    }
}
const d2 = new Dll(20);
console.log(Dll)
