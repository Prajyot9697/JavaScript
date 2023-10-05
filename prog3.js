class Datastructure{
    constructor(data){
        this.head={
            value:data,
            next:null
        }

    }prepend(data){
        const newnode={
            value:data,
            next:null
        } 
        this.newnode.next=this.head
        this.head=this.newnode
    }
} const ds=new Datastructure(10)
     ds.prepend(20)
     ds.prepend(30)
     console.log(ds)
