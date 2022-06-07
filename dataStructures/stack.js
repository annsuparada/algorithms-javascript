class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let tempFirst = this.first;
            this.first = newNode;
            this.first.next = tempFirst;
        }
        this.size ++;
        return this;
    }

    pop() {
        if (this.size === 0) return null;
        if (this.size === 1) {
            this.last = null;
        }
        let tempFirst = this.first;
        this.first = this.first.next;
        this.size --;
        return tempFirst;
    }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
console.log(stack)
stack.pop()
console.log(stack)
