// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let size = 0;
    let currentNode = this.head;

    while (currentNode) {
      size++;
      currentNode = currentNode.next;
    }

    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;

    let currentNode = this.head;

    while (currentNode) {
      if (!currentNode.next) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }

    return currentNode;
  }
  getLastV1() {
    let currentNode = this.head;

    if (this.size() === 1) return currentNode;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let currentNode = this.head;
    let next = this.head.next;

    while (next.next) {
      currentNode = next;
      next = next.next;
    }

    currentNode.next = null;
  }

  removeLastV1() {
    let currentNode = this.head;
    if (!currentNode) return;
    if (!currentNode.next) this.head = null;
    const size = this.size();

    for (let index = 1; index < size - 1; index++) {
      currentNode = currentNode.next;
    }

    currentNode.next = null;
  }

  insertLast(data) {
    const lastNode = this.getLast();

    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  insertLastV1(data) {
    const newNode = new Node(data);
    let currentNode = this.head;

    if (!currentNode) {
      this.head = newNode;
      return;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  getAt(index) {
    if (!this.head) return null;

    let currentIndex = 0;
    let currentNode = this.head;

    while (currentNode) {
      if (currentIndex === index) return currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    return null;
  }

  getAtV1(integer) {
    let currentNode = this.head;
    if (!currentNode || this.size() < integer || integer < 0) return null;
    if (this.size() && integer === 0) return this.head;

    for (let index = 0; index < integer; index++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
  removeAt(index) {
    if (!this.head) return;

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previousNode = this.getAt(index - 1);
    if (!previousNode || !previousNode.next) return;

    previousNode.next = previousNode.next.next;

    // previousNode.next = null;
  }

  removeAtV1(integer) {
    if (integer < 0 || integer > this.size()) return;
    let currentNode = this.head;
    if (!currentNode) return;
    if (!currentNode.next) return currentNode;
    // if (integer === 0) return this.removeFirst();

    let next = currentNode.next;
    let previousNode = null;

    for (let index = 0; index < integer; index++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      next = currentNode.next;
    }

    if (previousNode) {
      previousNode.next = next;
    } else {
      this.head = next;
    }

    currentNode = null;
  }

  insertAt(data, integer) {
    if (integer < 0) return this.insertFirst(data);
    if (integer > this.size()) return this.insertLast(data);

    const currentNode = this.getAt(integer);
    const previousNode = this.getAt(integer - 1);

    if (previousNode) {
      previousNode.next = new Node(data, currentNode);
    } else {
      this.head = new Node(data, this.head);
    }
  }

  insertAtV1(data, integer) {
    if (integer < 0) return this.insertFirst(data);
    if (integer > this.size()) return this.insertLast(data);

    const newNode = new Node(data);
    let currentNode = this.head;
    let previousNode;

    for (let index = 0; index < integer; index++) {
      previousNode = currentNode;
      currentNode = currentNode?.next;
    }

    if (previousNode) {
      previousNode.next = newNode;
      newNode.next = currentNode;
    } else {
      this.head = newNode;
      newNode.next = currentNode;
    }
  }

  forEach(func) {
    if (!this.head) return;

    let currentNode = this.head;

    while (currentNode) {
      func(currentNode);
      currentNode = currentNode.next;
    }
  }
}

module.exports = { Node, LinkedList };
