class BinarySearchTree {
    constructor() {
        this.rootNode = null;
    }

    insertNode(data, left = null, right = null) {

        let Node = {
            left,
            right,
            data
        };
        let currentNode;

        if(!this.rootNode) {
            this.rootNode = Node;
            this.data = data;
        } else {
            currentNode = this.rootNode;
            while(currentNode) {
                if (data < currentNode.data) {
                    if(!currentNode.left) {
                        currentNode.left = Node;
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else {
                    if(!currentNode.right) {
                        currentNode.right = Node;
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }
}

let BSTtest = new BinarySearchTree();

//tests

BSTtest.insertNode(10);

BSTtest.insertNode(7);

BSTtest.insertNode(14);

BSTtest.insertNode(5);

BSTtest.insertNode(13);

BSTtest.insertNode(8);

BSTtest.insertNode(18);

BSTtest.insertNode(15);

BSTtest.insertNode(6);

console.log(JSON.stringify(BSTtest));
// BSTtest
