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
  var flag, parens, opening, closing;

  flag = true;

  opening = ['[','{', '('];
  closing = [']', '}', ')'];

  parens = input.match(/\[|\(|\{|\]|\)|\}/g);


};

// check to see whether any parens or brackets have any other parens or brackets on the inside

//set a variable to hold the temporary parens, a flag, and opening and closing brackets
//set a flag to true

//...

  //return flag

