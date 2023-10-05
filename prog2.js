class Datastructure{
    constructor(data){
        this.head={
            value:data,
            next:null
        }
    }
    append(data){
        const newnode={
            value:data,
            next:null
        }
        

        this.tail.next=newnode
        this.tail=newnode
        this.length++
    }
}  
const ds=new Datastructure(10)
ds.append(20)
ds.append(30)
console.log(ds)

     