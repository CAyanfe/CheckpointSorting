/* 
Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands. 
Each time we take a new card we put it in the right place in our hand. 

- Each time work only with the first i-1 element from of the array
- Pick element arr[i] and insert it into sorted sequence in the array from 0 to i-1.

*/

/*
STEPS:
 Start with the second element in the array (index 1), considering it as the current element to be inserted into the sorted subarray.
Compare the current element with the elements in the sorted subarray (from index 0 to i-1), moving elements greater than the current element one position to the right.
Insert the current element into its correct position in the sorted subarray.
Repeat steps 1-3 until all elements in the array are part of the sorted subarray.


Example:
Let's sort the following array using insertion sort: [5, 2, 9, 1, 5, 6]

Start with the second element (index 1) 2.

Compare 2 with the first element 5, and since 2 is smaller, move 5 one position to the right.
The array becomes: [2, 5, 9, 1, 5, 6].
Consider the third element (index 2) 9.

Compare 9 with 5 and 2, and since 9 is greater, it remains in its position.
Consider the fourth element (index 3) 1.

Compare 1 with 9, 5, and 2. Move 9, 5, and 2 one position to the right to make space for 1.
The array becomes: [1, 2, 5, 9, 5, 6].
Consider the fifth element (index 4) 5.

Compare 5 with 9 and 5. Move 9 one position to the right to make space for 5.
The array becomes: [1, 2, 5, 5, 9, 6].
Consider the sixth element (index 5) 6.

Compare 6 with 9. Move 9 one position to the right to make space for 6.
The array becomes: [1, 2, 5, 5, 6, 9].
Now, the array is sorted in ascending order: [1, 2, 5, 5, 6, 9].
 */

// CODE
function insertionSort(arr) {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    let currentElement = arr[i];
    let j = i - 1;

    // Move elements greater than the current element to the right
    while (j >= 0 && arr[j] > currentElement) {
      arr[j + 1] = arr[j];
      j--;
    }

    // Insert the current element at the correct position
    arr[j + 1] = currentElement;
  }

  return arr;
}

// Example usage:
const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]
