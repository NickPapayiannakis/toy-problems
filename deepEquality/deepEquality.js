/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.

OVERVIEW

1. compare both objects
2. determine whether each property of both objects is an identical match
3. if any properties aren't, return false
4. otherwise return true


  */
var deepEquals = function(apple, orange){
  var count1, count2 = 0;
  var obj1 = JSON.stringify(apple);
  var obj2 = JSON.stringify(orange)

  for (var i = 0; i < obj1.length; i++){
    count1 += obj1.charCodeAt(i);
  }

  for (var e = 0; e < obj2.length; e++){
    count2 += obj2.charCodeAt(e);
  }

  return count1 === count2 ? true : false;

};
