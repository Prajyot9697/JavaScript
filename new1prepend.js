class Singlelist {
    constructor(data) {
        this.head = {
            value: data,
            next: null
        }
        this.tail=this.head
         this.length=1
    } 
    prepend(data) 
    {
        const newnode = {
            value: data,
            next: null
        }
        
        
        newnode.next=this.tail
        this.tail=newnode
        this.length++
    }
    
}const sl=new Singlelist(260)
       sl.prepend(259)
       sl.prepend(258)
       sl.prepend(257)
       sl.prepend(256)
       console.log(sl)