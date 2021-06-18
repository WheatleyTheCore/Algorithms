/*
 * so essentially, just loop up through the array, swap elements so that the larger is towards the right, and repeat until no swaps are needed for an entire iteration through the array.
 */
var array = [2, 3, 5, 4, 7, 6, 9, 234, 54, 7456, 21, 34, 1]


function swap(first, second) {
  var v = array[first];
  array[first] = array[second];
  array[second] = v;
}

function bubble(array) {
  var counter;
  while (true) {
    counter = 0;
    for (var i = 1; i < array.length; i++) {
        if (array[i - 1] > array[i]) {
          swap(i-1, i);
          counter++;
        }
      }
    if (counter === 0) {
      break;
    }
  }
}

bubble(array);

console.log(array);
