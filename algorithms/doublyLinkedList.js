class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    };
};

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let newNode = new Node(value)
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length += 1;
        return this
    }

    pop() {
        if (this.head === null) return undefined;
        let removedNode = this.tail
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = removedNode.prev;
            this.tail.next = null;
            removedNode.prev = null;
        };
        this.length -= 1;
        return removedNode;
    }

    shift() {
        if (this.length === 0) return undefined;
        let removedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = removedNode.next;
            this.head.prev = null;
            removedNode.next = null;
        };
        this.length -= 1;
        return removedNode;
    }

    unshift(value) {
        let newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        };
        this.length += 1;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let middle = Math.floor(this.length / 2);
        let count, current;
        if (index <= middle) {
            current = this.head;
            count = 0;
            while (count !== index) {
                current = current.next;
                count ++;
            }
        } else {
            current = this.tail;
            count = this.length -1;
            while (count !== index) {
                current = current.prev;
                count--;
            };
        };
        return current;
    }

    set(index, value) {
        let oldNode = this.get(index);
        if (oldNode) {
            oldNode.value = value;
            return true;
        }
        return false;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.unshift(value)
        if (index === this.length) return !!this.push(value);
        let newNode = new Node(value);
        let prevNode = this.get(index -1);
        let nextNode = prevNode.next;

        prevNode.next = newNode;
        newNode.prev = prevNode;
        newNode.next = nextNode;
        nextNode.prev = newNode;
        this.length += 1;

        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length -1) return this.pop();

        let removedNode = this.get(index);
        let removedNodePrev = removedNode.prev;
        let removedNodeNext = removedNode.next;
        removedNodePrev.next = removedNodeNext;
        removedNodeNext.prev = removedNodePrev;
        removedNode.prev = null;
        removedNode.next = null;

        this.length -= 1;
        return removedNode;
    }

    reverse() {
        //create current in var 
        // swap head and tail
        // loop through list and set current.next and current.prev
        // return list
        let current = this.head;
        this.head = this.tail;
        this.tail = current;
        let next, prev;

        for (let i = 0; i < this.length; i++) {
            next = current.next;
            prev = current.prev;
            
        }
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

let list = new DoublyLinkedList()
list.push(0)
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)
list.push(8)

console.log(list.remove(5))
console.log(list.get(4))
console.log(list.print())
