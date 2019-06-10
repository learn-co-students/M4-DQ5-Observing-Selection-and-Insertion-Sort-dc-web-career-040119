function insertionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j-1] > arr[j]; j--) {
      let temp = arr[j-1]
      arr[j-1] = arr[j]
      arr[j] = temp
    }
  }
  return arr
}
