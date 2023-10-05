class node {
    constructor(data) {
        this.left = null;
        this.data = data;
        this.right = null;
    }
}
class binarysearchtree {
    constructor() {
        this.root = null;
    }
    insertNode(data) {
        var newNode = new node(data);
        if (this.root == null) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode);
        }
    }
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left == null) {
                node.left = newNode;
            }
            else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right == null) {
                node.right = newNode;
            }
            else {
                this.insertNode(node.right, newNode);
            }

        }
    }
}
search(node,data)
{
    if(node==null)
        return false;
    
    else if(data<node.data)
    return this.search(node.left,data);
    
    else if(data>node.data)
    return this.search(node.right,data);
    else
    return node;
}

const BST= new binarysearchtree();
BST.insert (1);
BST.insert (2);
BST.insert (3);
BST.insert (2);
BST.insert (5);
BST.insert (4);
console.log(BST);