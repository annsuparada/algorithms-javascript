class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (current.value === newNode.value) return undefined;
        if (newNode.value > current.value) {
          if (current.right !== null) {
            current = current.right;
          } else {
            current.right = newNode;
            return this;
          }
        } else {
          if (current.left !== null) {
            current = current.left;
          } else {
            current.left = newNode;
            return this;
          }
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    
    while (current) {
        if (value < current.value) {
            current = current.left;
        } else if (value > current.value) {
            current = current.right;
        } else {
            return true;
        }
    }
    return false;
  }

  BFS() {
    let node = this.root;
    let visited = [];
    let queue = [];
    queue.push(node);

    while(queue.length) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return visited;
  }
}

const tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(5);
tree.root.right = new Node(12);
// console.log(tree)
tree.insert(3)
tree.insert(4)
tree.insert(6)
tree.insert(11)
// console.log(tree)
console.log(tree.BFS())
