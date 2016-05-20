function mergeSort(arr) {
  if(arr.length <=1) {
    return arr;
  }
  var midpoint = Math.floor(arr.length/2);
  var leftArr = arr.slice(0, midpoint);
  var rightArr = arr.slice(midpoint);
  var sortedLeft = mergeSort(leftArr);
  var sortedRight = mergeSort(rightArr);
  return merge(sortedLeft, sortedRight);
}



function merge(arr1, arr2) {
  var sorted = [];
  var leftIndex = 0;
  var rightIndex = 0;
  while(leftIndex < arr1.length && rightIndex < arr2.length) {
    if(arr1[leftIndex] < arr2[rightIndex]) {
      sorted.push(arr1[leftIndex]);
      leftIndex++;
    } else {
      sorted.push(arr2[rightIndex]);
      rightIndex++;
    }
  }
  sorted.concat(arr1.slice(leftIndex));
  sorted.concat(arr2.slice(rightIndex));
  return sorted;
}
