class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SingltLinkedLists {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    push(val) {
        var newNode = new Node(val);
        //if list is empty 
        if (!this.head) {
            //set head to new node 
            this.head = newNode;
            // set tail to heat too bc we only have one value
            this.tail = this.head;
        } else {
            //set next property on the tail to node
            this.tail.next = newNode;
            // set the tail to new created node
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) { return undefined }

        var current = this.head; //start form the begining 
        var newTail = current;
        // loop until tail
        while (current.next) {
            //set the newTail to current 
            newTail = current;
            //set current to next property, newTail become prev property 
            current = current.next;
        }
        //set new tail to tail
        this.tail = newTail;
        this.tail.next = null; //delete the last property
        this.length--;
        //if we delete everything 
        if (this.length === 0) {
            //set head and tail to null
            this.head = null;
            this.tail = null;
        }
        return current
    }

}

var list = new SingltLinkedLists()
list.push('hi')
list.push('you')
list.push('test')
// list.pop()
// list.pop()

console.log(list)
