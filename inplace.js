// while loop
function shuffle(arr) {
  let current = arr.length;
  let temp;
  let random;
  while (current !== 0) {
    random = Math.floor(Math.random() * current);
    current--;

    temp = arr[current];
    arr[current] = arr[random];
    arr[random] = temp;
  }
  return arr;
}
// for loop
function shuffle2(arr) {
  let temp;
  let random;
  for (let i = arr.length - 1; i > 0; i--) {
    random = Math.floor(Math.random() * i + 1);

    temp = arr[i];
    arr[i] = arr[random];
    arr[random] = temp;
  }
  return arr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8]
console.log(shuffle(arr));