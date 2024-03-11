class Queue {
  constructor(data) {
    this.data = data ?? [];
  }

  enqueue(element) {
    this.data.push(element);
  }

  dequeue() {
    return this.data.shift();
  }

  isEmpty() {
    return this.size() == 0;
  }

  print() {
    console.log(this.data);
  }

  size() {
    return this.data.length;
  }
}

module.exports = Queue;
