function selectionSort(arr) {
  // debugger
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  let i, j, minVal
  let arrLen= arr.length

  for(i = 0; i < arrLen-1; i++){
    minVal = i
  }

  for(j=i+1; j < arrLen; j++){
    if(arr[j] < arr[minVal]){
      minVal = j
    }
  }

  if(minVal != i){
    swapVal(arr[i], arr[minVal])
  }
  // debugger

}


function swapVal(a,b){
  let temp
  temp = a
  a = b
  b = temp
  return [a,b]
}
