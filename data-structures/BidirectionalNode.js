const Node = require('./Node');

class BidirectionalNode extends Node {
  #previous;

  constructor(data) {
    super(data);
    this.#previous = null;
  }

  setNextNode(node) {
    if (node instanceof BidirectionalNode) {
      super.setNextNode(node);
    } else {
      throw new Error('node should be BidirectionalNode or null');
    }
  }

  setPreviousNode(node) {
    if (node instanceof BidirectionalNode || node === null) {
      this.#previous = node;
    } else {
      throw new Error('node should be Node or null');
    }
  }

  get previous() {
    return this.#previous;
  }
}

module.exports = BidirectionalNode;
