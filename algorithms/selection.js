var array = [3, 1, 2, 4, 5, 6, 7, 8, 9, 10, 12, 11];

function swap(first, second) {
  var v = array[first];
  array[first] = array[second];
  array[second] = v;
}

function selectionSort(array) {
  for (var i = 0; i < array.length; i++) {
    var smallest = i;
    for (var j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallest]) {
        smallest = j;
      }
    }
    swap(smallest, i);
  }
  return array;
}


console.log(selectionSort(array));
