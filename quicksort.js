function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function qSort(arr, start = 0, end = arr.length) {
  if (start >= end) {
    return arr;
  }
  const middle = partition(arr, start, end);
  arr = qSort(arr, start, middle);
  arr = qSort(arr, middle + 1, end);
  return arr;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}
// [14, 2, 5, 6, 1, 12, 7]
//  j   i
// [2, 14, 5, 6, 1, 12, 7]
//      j  i
// [2, 5, 14, 6, 1, 12, 7]
// [2, 5, 6, 1, 14, 12, 7]
//               j      i
// [2, 5, 6, 1, 7, 12, 14]
//              j
// [1, 2, 5, 6, 7, 12, 14]
