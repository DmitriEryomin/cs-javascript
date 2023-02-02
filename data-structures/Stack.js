class Stack {
  #stack;

  #maxSize;

  constructor(maxSize = Infinity) {
    this.#stack = [];
    this.#maxSize = maxSize;
  }

  get isEmpty() {
    return this.#stack.length === 0;
  }

  get hasSpace() {
    return this.#stack.length < this.#maxSize;
  }

  peek() {
    if (this.isEmpty) {
      return null;
    }

    return this.#stack.at(-1);
  }

  push(data) {
    if (!this.hasSpace) {
      throw new Error('Stack overflow');
    }
    this.#stack.push(data);
  }

  pop() {
    if (this.isEmpty) {
      throw new Error('Stack underflow');
    }
    return this.#stack.pop();
  }
}
