// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require("./stack");

class Queue {
  constructor() {
    this.mainStack = new Stack();
    this.offStack = new Stack();
  }

  add(value) {
    this.mainStack.push(value);
  }

  remove() {
    while (this.mainStack.peek()) {
      this.offStack.push(this.mainStack.pop());
    }

    const result = this.offStack.pop();

    while (this.offStack.peek()) {
      this.mainStack.push(this.offStack.pop());
    }

    return result;
  }
  peek() {
    while (this.mainStack.peek()) {
      this.offStack.push(this.mainStack.pop());
    }

    const peek = this.offStack.peek();

    while (this.offStack.peek()) {
      this.mainStack.push(this.offStack.pop());
    }

    return peek;
  }
}

module.exports = Queue;
