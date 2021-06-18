function swap(arr, one, two) {
  var temp = arr[one];
  arr[one] = array[two];
  array[two] = temp;
}

function partition(arr, left, right) {
  var pivot = arr[right];
  var pivotIndex = left;

  for(var i = left; i <= right; i++) {
    if (arr[i] < pivot) {
      swap(arr, pivotIndex, i);
      pivotIndex++;
    }

  }
  swap(arr, pivotIndex, right);
  return pivotIndex;
}

function quickSort(arr, left, right) {
  if (left >= right) {
    return;
  }

  var pivot = partition(arr, left, right);

  quickSort(arr, left, pivot - 1);
  quickSort(arr, pivot + 1, right);
}

var array = [2, 4, 5, 6, 3, 6, 12, 43, 32];
quickSort(array, 0, array.length - 1);
console.log(array);
