/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]

Let min = 0 and max = n-1.
If max < min, then stop: target is not present in array. Return -1.
Compute guess as the average of max and min, rounded down (so that it is an integer).
If array[guess] equals target, then stop. You found it! Return guess.
If the guess was too low, that is, array[guess] < target, then set min = guess + 1.
Otherwise, the guess was too high. Set max = guess - 1.
Go back to step 2.

 */


var binarySearch = function (array, target) {
  var min, max, guess;
  min = 0, max = array.length-1;

  do {
    guess = Math.floor((min+max)/2);

    if (array[guess] === target)
      return guess;

    if (array[guess] < target)
      min = guess + 1;
    else
      max = guess - 1;

  } while (array[guess] !== target)
};

