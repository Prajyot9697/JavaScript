class Node {
    constructor(data) {
        {
            value= data,
            previous= null,
            next= null
        }
    }
}
class Dll {
    constructor(data) {
        // const d = new Node(data);

        
            this.temp = null;
            this.d = head;
        
        while (d != null) {
            temp = d.prev;
            d.prev = d.next;
            d.next = temp;
            d = d.prev;
        }
        if(temp!=null){
            head=temp.prev;
        }
    }

}
function push(n)
{
    const n1= new Dll();
    {
        n1.next=null;
    }
    if(head!=null)
    {
        head.next=n1;
    } head=n1;

}
push(10);
push (20);
push(30);
