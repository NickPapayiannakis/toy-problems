/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that both
 * arrays will contain only strings.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain any value,
 * including non-strings.
*/

//Problem: check whether an array is included in the input array.

//Variables: context array, input array

//Constraints: 
  //both arrays will only contain strings,
  //disregard duplicates

//Overview
  //compare elements in subset array to input array
  //if all elements in subset array are present at all in input array return true
  //if not, return false

//pseudo-code

//declare a flag to true;
//pass subset array into a variable


//interate over context array
  //if flag is false
    //break
  //if match for current element not in array obj
    //set flag to false
//return flag
//=============================================
Array.prototype.isSubsetOf = function(array){
  var subset = this;
  var input = {};
  var flag = true;

  //pass input array into object for constant time access
  for (var i = 0; i < array.length; i++){
    //debugger;
    input[array[i]] = array[i];
  }

  //interate over context array
  for (var e = 0; e < subset.length; e++){
    //if flag is false
    if (!flag){
      break;
    } else if (!input.hasOwnProperty(subset[e])){
      //set flag to false
      flag = false;
    }
  }
  //return flag
  return flag;
};
