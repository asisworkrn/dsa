class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(val, priority) {
    this.heap.push({ val, priority });
    this.heapifyUp;
  }

  heapifyUp() {
    let index = this.heap.length;
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.heap[index].priority <= this.heap[parent].priority) break;
      this.swap(index, parent);
      index = parent;
    }
  }

  dequeue() {
    if (this.heap.length == 0) return null;
    const max = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.heapifyDown();
    }
  }

  heapifyDown() {
    let index = 0;
    let length = this.heap.length;

    while (true) {
      let left = 2 * index + 1;
      let right = 2 * index + 2;
      let largest = index;
      if (
        left < length &&
        this.heap[left].priority > this.heap[largest].priority
      ) {
        largest = left;
      }
      if (
        right < length &&
        this.heap[right].priority > this.heap[largest].priority
      ) {
        largest = right;
      }

      if (largest == index) break;
      this.swap(index, largest);
      index = largest;
    }
  }

  front() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length == 0;
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
}

//2.Kth largest elemnet in array
//approach we create a min heap because we will add upto K+1 elemnt in heap
//then remove the top most to keep element equals to k in heap
//by doin this once we traverse through full array
//we will have the topmost element as our answer
var findKthLargest = function (nums, k) {
  let pq = new MinPriorityQueue();
  for (let i = 0; i < nums.length; i++) {
    pq.enqueue(nums[i]);
    if (pq.size() > k) {
      pq.dequeue();
    }
  }

  return pq.front();
};
