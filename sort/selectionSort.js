// The Selection Sort is a sort algorithm with O(n) space complexity and O(n^2) time complexity.  It is also often equated to the most
// common way of sorting that a human would do. Unfortunately, it's also a slow way to sort.

function selectionSort(inputArray){
  
  var n = inputArray.length; // n will be the length of the input list or array
  
  // start our loop with the counter index as currentIndex and increase it until the loop has gone through all the elements in the array.
  for (var currentIndex = 0; currentIndex < n; currentIndex++){  
    // set the currentIndex into a variable for the smallestIndex. 
    var smallestIndex = currentIndex;
    // This will get updated in the following loop.
    for (var findMinIndex = currentIndex+1; findMinIndex <= n; findMinIndex++){ 
    // findMinIndex will always go to the next index, until there are none left
      if(inputArray[findMinIndex] < inputArray[smallestIndex]){ 
      // if the current element of the inputArray is smaller than the previously set smallestIndex,
        smallestIndex = findMinIndex;  // update smallestIndex to have findMinIndex's index value
      }
    }
    // after smallestIndex has/hasn't been updated,  
    // let's swap the smallest currentIndex with the smallest Index from inputArray.
    swap(inputArray, currentIndex, smallestIndex); 
  }
  // once all sorting has been performed, let us return what the sorted array is.
  return inputArray;
} 

// the swap function is basically shuffling the element a and element b in the inputArray
function swap(inputArray,a,b){
  var temp = inputArray[a];
  inputArray[a] = inputArray[b];
  inputArray[b] = temp;
}

// TESTS: (Remove left-most comment tags on lines 36-38 to make tests available).
// selectionSort([99,79,84,80,92]) // Should return [79,80,80,92,99]
// selectionSort([5,3,1,2,4])      // Should return [1,2,3,4,5]
// selectionSort([45,38,-10,2,99]) // Should return [-10, 2,45,38,99]
