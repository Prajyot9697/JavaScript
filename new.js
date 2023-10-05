class Singlelist{
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
    
}const mylist=new Singlelist(255)
mylist.append(256)
mylist.append(257)
mylist.append(258)
mylist.append(259)
mylist.append(260)
console.log(mylist)