/*
 * Given a sorted array that has been rotated some number of items right or
 * left, i.e. [0, 1, 2, 3, 4, 5, 6, 7] might become [4, 5, 6, 7, 0, 1, 2, 3]
 * how can you efficiently find an element? For simplicity, you can assume
 * that there are no duplicate elements in the array.
 *
 * rotatedArraySearch should return the index of the element if it is in the
 * array and should return null otherwise.
 *
 * For instance:
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2) === 5
 *
 * rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100) === null
 *
 * Target time complexity: O(log(array.length))
 */

//create an object out of array values
  //assign index as key, value as element
//if key exists, return it
//otherwise, return null

var rotatedArraySearch = function (rotated, target) {
  var max, min, guess;
  max = rotated.length - 1 , min = 0;

  do {
    guess = ~~((min + max) / 2);

    if (rotated[guess] === target) {
      return rotated[guess];
    }

    if (rotated[guess] > target) {
      max = guess + 1;
    } else {
      min = guess - 1;
    }

  } while (rotated[guess] !== target);
}
