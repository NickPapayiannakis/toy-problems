/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

// INPUT: String
// OUTPUT: A single character

//Overview

// 1. go through each character in the input string
// 2. check whether a regexp returns true for more than one character
// 3. if it doesn't return the character.

//PSEUDO-CODE

//declare a variable to hold an empty array
//declare a variable to hold current character

//loop through each character in the string
  //loop through string
    //if array length > 1
      //return the character
    //push any regexp matches to array

var firstNonRepeatedCharacter = function(string) {
  //loop through each character in the string
  for (c = 0; c < string.length; c++){
    var re = new RegExp(string.charAt(c),"gi");
    if (string.match(re).length === 1){
      return string.charAt(c);
    }
  }
};
