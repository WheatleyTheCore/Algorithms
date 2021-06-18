function merge(left, right) {
  var result = [];
  var leftIndex = 0;
  var rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  while(leftIndex < left.length){
      result.push(left[leftIndex]);
      leftIndex++;
  }
  while(rightIndex < right.length){
      result.push(right[rightIndex]);
      rightIndex++;
  }


  return result;
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  var mid = parseInt(array.length / 2);

  var leftHalf = array.slice(0, mid);
  var rightHalf = array.slice(mid);

  return merge(mergeSort(leftHalf), mergeSort(rightHalf));

}

var array = [1, 3, 2, 5, 4, 7, 6, 345, 876, 1094, 432, 3, 2, 1];
console.log(mergeSort(array));
