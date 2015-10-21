/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */


// combine all strings
// create an empty hash table

// iterate over characters in string
  // if character exists in hash table,
    // set value to true
  // assign each char to hash table with value false

//iterate over hash table for keys with values === true
  //push keyname to result array

// return result

var commonCharacters = function(string1, string2) {

  var args = Array.prototype.slice.call(arguments);
  var mS = args.join('');
  var dict = {};

  var find_dups = function(string) {
    duplicates = [];

    for ( c = 0; c < string.length; c++ ){

      var ch = string.charAt(c);
      var re = new RegExp(ch,"gi");

      if ( string.match(re).length > 1 && duplicates.indexOf(ch) === -1 ){
        duplicates.push( string.charAt(c) );
      }
    }
    return duplicates;
  };
  
  return find_dups(mS);
};
