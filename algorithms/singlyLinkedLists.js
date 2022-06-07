class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let counter = 0;
    while (index !== counter) {
      current = current.next;
      counter += 1;
    }
    return current;
  }

  set(index, value) {
    let node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index > this.length || index < 0) return false;
    if (index === this.length) {
      this.push(value);
    } else if (index === 0) {
      this.unshift(value);
    } else {
      let prevNode = this.get(index -1);
      let tempNode = prevNode.next;
      let newNode = new Node(value)
      prevNode.next = newNode;
      prevNode.next.next = tempNode;
    }
    this.length += 1;
    return true
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length -1) return this.pop()
    if (index === 0) return this.shift() 
    let prevNode = this.get(index -1);
    let removed = prevNode.next
    prevNode.next = removed.next
    this.length -= 1;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value)
      current = current.next
    }
    console.log(arr)
  }
}

let list = new SinglyLinkedList();
list.push(0);
list.push(1);
list.push(2);

console.log(list.print());
list.reverse()
console.log(list.print())
console.log(list)
