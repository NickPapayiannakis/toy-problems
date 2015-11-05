/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input){
  var flag, parens;

  falg = true;
  parens = input.match(/\[|\(|\{|\]|\)|\}/g);
  console.log(parens);
};

// check to see whether any parens or brackets have any other parens or brackets on the inside

//set a variable to hold the temporary parens
//set a flag to true
//each time a paren is encountered, add it to the an array and set current to current paren
  //if the current paren's opposite is the last item in the array
    //pop it
  //otherwise flagg false

  //return flag

