class linkedlist{
    constructor(data){
        this.head={
            value:data,
            next:null
        }
        this.tail=this.head
        this.length=1
    }
    append(data)
    {
        const newnode={
            value:data,
            next:null
        }
        this.tail.next=newnode
        this.tail=newnode
        this.length++
    }
}const mylist=new linkedlist(10)
mylist.append(20)
mylist.append(30)
console.log(mylist)