const BidirectionalNode = require('./BidirectionalNode');
const LinkedList = require('./LinkedList');

class Test {
  test() {
    console.log('test');
  }
}

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
    if (this.#head === null) {
      this.#head = new BidirectionalNode(data);
      return;
    }

    const newHead = new BidirectionalNode(data);
    const oldHead = this.#head;
    newHead.setNextNode(oldHead);
    oldHead.setPreviousNode(newHead);
    this.#head = newHead;
  }
}
