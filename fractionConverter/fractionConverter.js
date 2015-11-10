/**
 * Write a function that takes a number as its argument and 
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 * 
 * Whole numbers and mixed fractions should be returned as irregular fractions
 * 
 * Example: toFraction(3.0) === '3/1'
 * 
 * Example: toFraction(2.5) === '5/2'

 1. store the whole number 
 2. store decimals
 3. generate number based on decimal length (i.e. 0.23 gives 100)
 4. find common divisor, if any between decimals and number
      If a<b, exchange a and b.
      Divide a by b and get the remainder, r. If r=0, report b as the GCD of a and b.
      Replace a by b and replace b by r. Return to the previous step.
 5. multiply generated number by whole number and add top number
 6. convert to string and return

 *
 */

var toFraction = function(number) {
  var w, d, g;
  w = ~~(number), d = number - w, g = 1;

  // Generate denominator
  for (var n = 0; n < d.toString().length; n++){
    g = g * 10;
  }

  var findGCD = function (num1, num2, r) {
    var a,b,r;

    r = r || 0;
    a = num1 > num2 ? num1 : num2;
    b = num1 > num2 ? num2 : num1;

    // If GCD is found, return it
    if (r === 0) {
      return b;
    }

    // Fill out rest of Euclidian formula
    // Call recursively
  }

  // 

};
