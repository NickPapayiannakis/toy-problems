/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 1. grab each run
 */

var longestRun = function (string) {
  var match, result, c, values, accum, index;
  match = {}, result = [], values = [], acum = '', c = string.charAt(i);

  // Iterate over input string
  for ( var i = 0; i < string.length; i++ ) {
    // Add chars to match
    match[c] += c;
  }

  for ( var key in match ) {
    values.push( match[key] );
  }

  for ( var g = 0; g < values.length; g++ ){
    if ( values[g].length > accum.length ) {
      accum = values[g];
    }
  }

  index = /accum/.exec(string).index;
  result.push(index);
  result.push(index + accum.length);
};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = "";
  var possible = "abcdefghijklmnopqrstuvwxyz";

  for(var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
