//step one: make a max heap.
//move the largest item to the end
//continue, but add next largest to index end - 1, then end - 2, etc.

function maxHeapify(arr, length, parent) {
  var largest = parent;
  var leftChild = 2 * parent + 1;
  var rightChild = 2 * parent + 2;

  if (leftChild < length && arr[leftChild] > arr[largest]) {
    largest = leftChild;
  }

  if (rightChild < length && arr[rightChild] > arr[largest]) {
    largest = rightChild;
  }

  if (largest != parent) {
    var temp = arr[largest];
    arr[largest] = arr[parent];
    arr[parent] = temp;

    maxHeapify(arr, length, largest);
  }
}

function heapSort(arr) {
  var length = arr.length;

  //sort the tree
  for (var i = parseInt((length / 2) - 1); i >= 0; i--) {
    maxHeapify(arr, length, i);
  }

  for (i = length - 1; i >= 0; i--) {
    var temp = arr[i];
    arr[i] = arr[0];
    arr[0] = temp;

    maxHeapify(arr, i, 0);
  }

}

var array = [5, 3, 6, 4, 5, 7, 23, 1234, 543, 6534, 5];
heapSort(array);
console.log(array);
