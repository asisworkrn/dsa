//Heap sort
//1. create max heap of arr
//2. swap first & last value in max heap arr
//3. reduce the size of heap
//4. do heapify heap down
//5. repeat 2-5 until sort arr

//For max heap we will start from end and heapfy down every node
//we can also ignore leaf nodes

function HeapSort(arr) {
  let n = arr.length;

  //create max heap
  for (let i = n - 1; i >= 0; i--) {
    heapifyDown(arr, i, n);
  }

  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapifyDown(arr, 0, i);
  }
}

function heapifyDown(arr, i, n) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest != i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapifyDown(arr, largest, n);
  }
}
