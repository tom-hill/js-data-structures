export default class Node {
  constructor(value, nextNode, previousNode) {
    this.value = value;
    this.next = nextNode;
    this.prev = previousNode;
  }

  get isHeadNode() {
    return !!(this.prev);
  }

  get isTailNode() {
    return !!(this.next);
  }
}
