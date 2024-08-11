let arr = [1, 0, 1, 0, 1, 0, 1, 0];
let p0 = 0; // start pointer
let p1 = arr.length-1; // end pointer

while (p0 <= p1) {
  if (arr[p0] === 0) p0++;
  else {
    // swap
    [arr[p0], arr[p1]] = [arr[p1], arr[p0]];
    p1--;
  }
}
