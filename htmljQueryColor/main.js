/*
select the inner html of p tags
use regexp to match words inside of p tags
wrap each matched word in span tag
*/

  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  // TODO: your code here!


  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second

  // TODO: your code here!

$(function(){
  var spanify = function (match) {
    return '<span>' + match + '</span>';
  }

  var x = $('p').html().replace(/(\w+)/g, spanify);
  $('p').empty().append(x);

});