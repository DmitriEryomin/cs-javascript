class Node {
  #data;
  #next;

  constructor(data) {
    this.#data = data;
    this.#next = null;
  }
  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.#next = node;
    } else {
      throw new Error('node should be Node or null');
    }
  }

  get data() {
    return this.#data;
  }

  get next() {
    return this.#next;
  }
}

module.exports = Node;
