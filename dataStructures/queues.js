class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queues {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode
        }
        this.size ++;
        return this;
    }

    dequeue() {
        if (this.size === 0) return null;
        const temp = this.first;
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        } else {
            this.first = this.first.next;
        }
        this.size --;
        return temp.value;
    }
}

const q = new Queues()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.dequeue()
q.dequeue()
q.dequeue()
console.log(q)