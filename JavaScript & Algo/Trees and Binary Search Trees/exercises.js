
class BSNode {
    constructor(value) {
        this.value = value;
        this.leftChild;
        this.rightChild;
    }
      insertNode(newVal) {
        if (!this.value) {
            this.value = newVal
        }
        else if (newVal > this.value && this.rightChild) {
            this.rightChild.insertNode(newVal)
        }
        else if(newVal <= this.value && this.leftChild) {
            this.leftChild.insertNode(newVal)
        }
        else if (newVal <= this.value) {
            this.leftChild = new BSNode(newVal)
        }
        else {
            this.rightChild = new BSNode(newVal)
        }
    }

    findMaxValue() {
    return this.rightChild ? this.rightChild.findMaxValue() : this.value;
             }


    findNode(value) {
        if (this.value === value) return true;
        if (value <= this.value && this.leftChild) return this.leftChild.findNode(value);
        if (value > this.value && this.rightChild) return this.rightChild.findNode(value);
        return false;
    }
  findCommonParent(value1, value2) {
    if (value1 < this.value && value2 < this.value && this.leftChild) {
        return this.leftChild.findCommonParent(value1, value2);
    }
    if (value1 > this.value && value2 > this.value && this.rightChild) {
        return this.rightChild.findCommonParent(value1, value2);
    }
    return this.value;
    }
    
     removeNode(value, parent = null) {
    if (value < this.value && this.leftChild) {
        return this.leftChild.removeNode(value, this);
    }
    if (value > this.value && this.rightChild) {
        return this.rightChild.removeNode(value, this);
    }
    if (value < this.value || value > this.value) {
        return false;
    }

    if (!this.leftChild && !this.rightChild) {
        if (!parent) {
            this.value = null;
            return true;
        }
        if (parent.leftChild === this) parent.leftChild = null;
        else parent.rightChild = null;
        return true;
    }

    if (!this.leftChild && this.rightChild) {
        if (!parent) {
            this.value = this.rightChild.value;
            this.leftChild = this.rightChild.leftChild;
            this.rightChild = this.rightChild.rightChild;
            return true;
        }
        if (parent.leftChild === this) parent.leftChild = this.rightChild;
        else parent.rightChild = this.rightChild;
        return true;
    }

    if (this.leftChild && !this.rightChild) {
        if (!parent) {
            this.value = this.leftChild.value;
            this.rightChild = this.leftChild.rightChild;
            this.leftChild = this.leftChild.leftChild;
            return true;
        }
        if (parent.leftChild === this) parent.leftChild = this.leftChild;
        else parent.rightChild = this.leftChild;
        return true;
    }

   this.value = this.leftChild.findMaxValue();
    this.leftChild.removeNode(this.value, this);
   return true;
}

    printTree(prefix = "", isLeft = true) {
    if (this.rightChild) {
        this.rightChild.printTree(prefix + (isLeft ? "│   " : "    "), false);
    }

    console.log(prefix + (isLeft ? "└── " : "┌── ") + this.value);

    if (this.leftChild) {
        this.leftChild.printTree(prefix + (isLeft ? "    " : "│   "), true);
    }
}

}
function ex2()
{
    const letters = ["J","H","R","E","S","P","G","B","L","Y","I"];
    const bSTree = new BSNode(letters[0]);

    for (let i = 1; i < letters.length; i++) {
        bSTree.insertNode(letters[i]);
    }
      console.log(bSTree.findCommonParent("B", "I")) //should return "H"
         console.log(bSTree.findCommonParent("B", "G")) //should return "E"
           console.log(bSTree.findCommonParent("B", "L")) //should return "J"
           console.log(bSTree.findCommonParent("L", "Y")) //should return "R"
          console.log(bSTree.findCommonParent("E", "H")) //should return "J"
}

function ex3()
{
const numbers = [8, 9, 12, 3, 5, 1, 11, 4];
let nodeWithOneChild = new BSNode();
numbers.forEach(n => nodeWithOneChild.insertNode(n));
console.log("Base tree:");
nodeWithOneChild.printTree();
console.log(nodeWithOneChild.removeNode(9)) ; // will return tree like the first image (the 9 will be deletied) 
  console.log("New Tree:");
    nodeWithOneChild.printTree();
let nodeWithTwoChildren = new BSNode();
numbers.forEach(n => nodeWithTwoChildren.insertNode(n));
console.log("Base tree:");
nodeWithTwoChildren.printTree();
console.log(nodeWithTwoChildren.removeNode(8)); // will return tree like the second image (the root will be 5) 
console.log("New Tree:");
    nodeWithTwoChildren.printTree();
}

function ex1()
{
    const letters = ["H","E","S","G","L","Y","I"];
    const bSTree = new BSNode(letters[0]);

    for (let i = 1; i < letters.length; i++) {
        bSTree.insertNode(letters[i]);
    }
    console.log(bSTree.findNode("H")) // should print true
  console.log(bSTree.findNode("G")) // should print true
   console.log(bSTree.findNode("Z") )// should print false
   console.log(bSTree.findNode("F")) // should print false
    console.log(bSTree.findNode("y")) // should print false - we didn't make the tree case sensitive!
}

function main()
{
    console.log("EX1 results: ")
    ex1();
    console.log("EX2 results: ")
    ex2();
    console.log("EX3 results: ")
    ex3();

}



main()