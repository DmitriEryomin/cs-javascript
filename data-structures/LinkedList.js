const Node = require('./Node');

class LinkedList {
  /** @type {(Node | null)} */
  #head;

  constructor() {
    this.#head = null;
  }

  get head() {
    return this.#head;
  }

  addToHead(data) {
    if (this.#head === null) {
      this.#head = new Node(data);
      return;
    }

    const newHead = new Node(data);
    const oldHead = this.#head;
    newHead.setNextNode(oldHead);
    this.#head = newHead;
  }

  addToTail(data) {
    if (this.#head === null) {
      this.#head = new Node(data);
      return;
    }

    let currentNode = this.#head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.setNextNode(new Node(data));
  }

  removeHead() {
    if (this.#head === null) {
      return;
    }

    const oldHead = this.#head;
    const newHead = this.#head.next;
    this.#head = newHead;

    return oldHead;
  }

  insertAfter(nodeData, data) {
    let currentNode = this.#head;
    while (currentNode.data !== nodeData) {
      if (currentNode.next === null) {
        throw new Error(`node with data ${nodeData} doesn't exist`);
      }
      currentNode = currentNode.next;
    }

    const newNode = new Node(data);
    newNode.setNextNode(currentNode.next);
    currentNode.setNextNode(newNode);
  }

  insertBefore(nodeData, data) {
    let currentNode = this.#head;
    const newNode = new Node(data);

    if (currentNode.data === nodeData) {
      newNode.setNextNode(currentNode);
      this.#head = newNode;
      return;
    }

    while (currentNode.next.data !== nodeData) {
      if (currentNode.next === null) {
        throw new Error(`node with data ${nodeData} doesn't exist`);
      }
      currentNode = currentNode.next;
    }

    newNode.setNextNode(currentNode.next);
    currentNode.setNextNode(newNode);
  }

  print() {
    let currentNode = this.#head;
    let output = '<head> ';
    while (currentNode !== null) {
      output += `${currentNode.data} `;
      currentNode = currentNode.next;
    }
    output += '<tail>';

    console.log(output);
    return output;
  }
}

module.exports = LinkedList;
