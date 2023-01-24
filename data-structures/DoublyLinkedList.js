const BidirectionalNode = require('./BidirectionalNode');
const LinkedList = require('./LinkedList');

class DoublyLinkedList {
  /** @type {(BidirectionalNode | null)} */
  #tail;

  /** @type {(BidirectionalNode | null)} */
  #head;

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  addToHead(data) {
    const newHead = new BidirectionalNode(data);
    if (this.#head === null) {
      this.#head = newHead;
      this.#tail = newHead;
      return;
    }

    const currentHead = this.#head;
    newHead.setNextNode(currentHead);
    currentHead.setPreviousNode(newHead);
    this.#head = newHead;
  }

  addToTail(data) {
    const newTail = new BidirectionalNode(data);
    if (this.#tail === null) {
      this.#tail = newTail;
      this.#head = newTail;
      return;
    }

    const currentTail = this.#tail;
    currentTail.setNextNode(newTail);
    newTail.setPreviousNode(currentTail);
    this.#tail = newTail;
  }

  get head() {
    return this.#head.data;
  }

  get tail() {
    return this.#tail.data;
  }
}

const list = new DoublyLinkedList();
list.addToTail(2);
list.addToTail(6);
console.log('head', list.head);
console.log('tail', list.tail);
list.addToTail(4);
console.log('head', list.head);
console.log('tail', list.tail);
