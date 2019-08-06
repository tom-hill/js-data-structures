import Node from "./Node";

export default class LinkedList {
  // Private variables to the class
  #head = null;
  #tail = null;
  #size = 0;

  /**
   * Get the head node of the List.
   *
   * @returns {Node} The node object in the head position
   */
  get head() {
    return this.#head;
  }

  /**
   * Get the tail node of the list.
   *
   * @returns {Node} The node object in the tail position
   */
  get tail() {
    return this.#tail;
  }

  /**
   * Returns the number of Nodes in the list.
   *
   * @returns {number} The number of nodes in the list
   */
  get length() {
    return this.#size;
  }

  /**
   * Print the LinkedList as a string from head to tail or tail to head.
   *
   * @param reverseOrder
   * @returns {string}  A string representation of the linked list.
   */
  toString(reverseOrder = false) {
    const dir = reverseOrder ? 'prev' : 'next';
    let currentNode = reverseOrder ? this.#tail : this.#head;

    let output = '';

    while(currentNode) {
      output += JSON.stringify(currentNode);
      if (currentNode[dir]) output += ' => ';
      currentNode = currentNode[dir];
    }

    return output;
  }

  /**
   * Add a new node to the start of the list, and make it the head.
   *
   * @param value
   * @returns {*} The value set on the new node
   */
  shift(value) {
    const newNode = new Node(value, this.#head);

    if (this.#head) {
      this.#head.prev = newNode;
    } else {
      this.#tail = newNode;
    }

    this.#head = newNode;
    this.#size += 1;
    return this.#head.value;
  }

  /**
   * Add a new node to the end of the list, and make it the tail.
   *
   * @param value
   * @returns {*} The value set on the new node
   */
  push(value) {
    const newNode = new Node(value, this.#tail);

    if (this.#tail) {
      this.#tail.next = newNode;
    } else {
      this.#head = newNode;
    }

    this.#tail = newNode;
    this.#size += 1;
    return this.#tail.value;
  }

  /**
   * Insert a new Node with value at the given index. Or append to the end of the list if the index is greater than list length.
   *
   * @param value
   * @param index
   * @returns {Node}  The new Node that was just inserted
   */
  insertAt(value, index) {
    if (this.#size -1 < index) return this.push(value);
    let count = 0;
    let currentNode = this.#head;

    while(count < index) {
      currentNode = currentNode.next;
      count++;
    }

    currentNode = new Node(value, currentNode, currentNode.prev);

    return currentNode.value;
  }

  /**
   * Remove the head (first item) from the list.
   *
   * @returns {*} The value of the head Node that was removed
   */
  unshift() {
    if (!this.#head) return null;

    const value = this.#head.value;
    this.#head = this.#head.next;

    if (this.#head) {
      this.#head.prev = null;
    } else {
      this.#tail = null;
    }

    this.#size -= 1;
    return value;
  }

  /**
   * Remove the tail (last item) from the list.
   *
   * @returns {*} The valie of the tail Node that was removed
   */
  pop() {
    if (!this.#tail) return null;

    const value = this.#tail.value;
    this.#tail = this.#tail.prev;

    if (this.#tail) {
      this.#tail.next = null;
    } else {
      this.#head = null;
    }

    this.#size -= 1;
    return value;
  }

  /**
   * Remove the node at the given index in the list
   *
   * @param index
   * @returns {*} the value of removed Node
   */
  removeAt(index) {
    if (this.#size -1 < index) return null;
    let count = 0;
    let currentNode = this.#head;

    while(count < index) {
      currentNode = currentNode.next;
      count++;
    }

    const value = currentNode.value;

    if (currentNode.prev) currentNode.prev.next = currentNode.next;
    if (currentNode.next) currentNode.next.prev = currentNode.prev;

    return value;
  }

  /**
   * Check if a value is stored in the list.
   *
   * @param value
   * @returns {bool} Boolean representation of if the value was found
   */
  contains(value) {
    const result = LinkedList._search(value);
    return result.value === value;
  }

  /**
   * Find a specific value in the list.
   *
   * @param value
   * @returns {null|Node} The Node if found else null
   */
  find(value) {
    return LinkedList._search(value);
  }

  /**
   * Find all nodes with the specified value.
   *
   * @param value
   * @returns {Node|number} An object with index keys containing all matching nodes, or -1 if no matches
   */
  findAll(value) {
    const nodeList = {};
    let currentIndex = 0;
    let currentNode = this.head;

    while(currentNode) {
      if (currentNode.value === value) nodeList[currentIndex] = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    return nodeList.length ? nodeList : -1;
  }

  /**
   * Search the node list for a given value.
   *
   * @param value
   * @returns {Node|null} Returns the matching node or null if not found
   * @private
   */
  static _search(value) {
    let currentNode = this.#head;

    while (currentNode) {
      if (currentNode.value === value) return currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }

  /**
   * Get the index(s) of Nodes in the list that contain the specified value.
   *
   * @param value
   * @returns {Array|Number} An array of indexes that match the result or -1 if not found
   */
  indexOf(value) {
    const indexes = [];
    let currentIndex = 0;
    let currentNode = this.head;
    while(currentNode) {
      if (currentNode.value === value) indexes.push(currentIndex);
      currentNode = currentNode.next;
      currentIndex++;
    }

    return indexes.length ? indexes : -1;
  }

  /**
   * Get the Node at the given Index.
   *
   * @param index
   * @returns {Node|null} The Node at the given index or null
   */
  getAt(index) {
    if (this.#size -1 < index) return null;
    let count = 0;
    let currentNode = this.#head;

    while(currentNode) {
      if (count === index) return currentNode;
      currentNode = currentNode.next;
      count++;
    }

    return null;
  }
}
