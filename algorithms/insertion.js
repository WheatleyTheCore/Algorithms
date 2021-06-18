var array = [2, 3, 6, 5, 4, 1, 8, 7, 9, 23, 12, 7, 5, 3]

function swap(first, second) {
  var v = array[first];
  array[first] = array[second];
  array[second] = v;
}

function insertion(array) {
  for(var i = 1; i < array.length; i++) {
    var val = array[i];
    var j = i;

    while (array[j - 1] > val) {
      array[j] = array[j-1];
      j--;
    }

    array[j] = val;
  }
}

insertion(array);

console.log(array);
