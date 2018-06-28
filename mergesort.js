function mSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  left = mSort(left);
  right = mSort(right);
  return merge(left, right, arr);
}
// [5, 6, 2, 12, 7, 1, 4]
// [5, 6, 2], [12, 7, 1, 4]
// [5], [6], [2], [12], [7], [1], [4]
// [5, 6], [2, 12]
// [2, 5, 6, 12]
function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
};

const arr = [12, 15, 22, 2, 13, 1, 7, 10, 6, 5, 8, 9];
console.log(mSort(arr));