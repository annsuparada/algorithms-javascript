function insertNodeAtPosition(head, data, position) {
    let newNode = new SinglyLinkedListNode(data)
    let pre = null;
    let current = head;
    let index = 0;
    while (true){
        if (index === position){
            let temporary = current
            pre.next = newNode
            newNode.next = temporary
            break;
        }
        pre = current
        current = current.next

        index++
    }
    return head
}