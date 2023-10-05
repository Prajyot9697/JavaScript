class linkedlist{
    constructor(data){
        this.head={
            value:data,
            next:null
        }
        this.tail=this.head
    }
}
const mylist=new linkedlist(10)
console.log(mylist)