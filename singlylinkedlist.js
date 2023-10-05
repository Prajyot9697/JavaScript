class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class singlylinkedlist {
    constructor(data) {
        const newNode = new node(data);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    push(data) {
        const newNode = new node(data);
        if (!this.length) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        
        if (this.length == 1) {
            let temp = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return temp;
        }
        else {
            let temp = this.head;
            let pre = this.head;
            while (temp.next){
                pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        return temp;
           }

        // if (this.length === 1) {
        //     let temp = this.head;
        //     this.head = null;
        //     this.tail = null;
        //     this.length--;
        //     return temp;
        // } else {
        //     let temp = this.head;
        //     let prev = this.head;
        //     while (temp.next) {
        //         prev = temp;
        //         temp = temp.next;
        //     }
        //     this.tail = prev;
        //     this.tail.next = null;
        //     this.length--;
        //     return temp;
        // }
    }
}
    const mylist = new singlylinkedlist(10);
mylist.push(20);
mylist.push(30);
mylist.push(40); 
mylist.push(50);
console.log(JSON.stringify(mylist));

//console.log(mylist);
mylist.pop();
mylist.pop();
console.log(JSON.stringify(mylist));