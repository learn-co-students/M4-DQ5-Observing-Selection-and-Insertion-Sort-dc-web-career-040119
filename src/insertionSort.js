function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
//   i ← 1
// while i < length(A)
//     j ← i
//     while j > 0 and A[j-1] > A[j]
//         swap A[j] and A[j-1]
//         j ← j - 1
//     end while
//     i ← i + 1
// end while
// debugger

let i = 1, j
while(i < arr.length-1){
   j = 1
  while(j > 0 && arr[j-1] > arr[j]){
    swapVal(arr[j], arr[j-1])
    j = j - 1
  }
  i = i + 1
}

}

function swapVal(a,b){
  let temp
  temp = a
  a = b
  b = temp
  return [a,b]
}
