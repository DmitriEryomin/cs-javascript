class Queue {
  #queue;
  #maxSize;

  constructor(maxSize = Infinity) {
    this.#queue = [];
    this.#maxSize = maxSize;
  }

  enqueue(data) {
    if (this.#queue.length === this.#maxSize) {
      throw new Error('Queue is full');
    }

    this.#queue.push(data);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }

    return this.#queue.shift();
  }

  isEmpty() {
    return this.#queue.length === 0;
  }

  print() {
    const message = this.#queue.reduce((acc, data, ind) => {
      if (ind === this.#queue.length - 1) {
        acc += `${data}<tail>`;
      } else {
        acc += `${data}, `;
      }
      return acc;
    }, '<head>');

    console.log(message);
  }
}

module.exports = Queue;
