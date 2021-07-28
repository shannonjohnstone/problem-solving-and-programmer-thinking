class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Binary {
  constructor(Node) {
    this.root = null;
    this.node = Node;
  }
  
  insertBulk(integers = []) {
    const [integer, ...rest] = integers;

    if (rest.length === 0) return;
    
    this.insert(integer);
    this.insertBulk(rest)
  }

  insert(data) {
    const newNode = new this.node(data);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insetNode(this.root, newNode);
    }
  }

  insetNode(node, newNode) {
    // if newNode data is less then current node data, place into left position
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        // newNode to be placed in null position, if current nodes left position is taken
        // check the left position of that node
        this.insetNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        // newNode to be placed in null position, if current nodes right position is taken
        // check the right position of that node
        this.insetNode(node.right, newNode)
      }
    }
  }

  /**
   * Find lowest number recursively
   */
  findLowestInteger(node = this.root) {
    if (node.left === null) {
      return node.data;
    }

    if (node.data > node.left.data) {
      return this.findLowestInteger(node.left)
    }
  }

  /**
   * Find largest number recursively
   */
  findLargestInteger(node = this.root) {
    if (node.right === null) {
      return node.data;
    }

    if (node.data < node.right.data) {
      return this.findLargestInteger(node.right)
    }
  }
}

const BinaryTree = new Binary(Node);
BinaryTree.insertBulk([12,10,40,1,99,100,43]);

// console.log(BinaryTree)
console.log(BinaryTree.findLargestInteger())
console.log(BinaryTree.findLowestInteger())