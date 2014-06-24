//$(document).ready(function(){

var num = 100;
$(function fizzBuzz(num) { 
  //var fizzCount = 0;
for (var i = 1; i <= num; i += num) {
  if ($(num % 3) === 0 && (num % 5) !== 0) {
    $('#output').append('<p>Fizz</p>');
//return ("Fizz");
  } else if 
  ($(num % 5) === 0 && (num % 3) !== 0) {
    $('#output').append('<p>Buzz</p>');
  //  return("Buzz");
  } else {
  ($(num % 3) === 0 && (num % 5) === 0){
    $('#output').append('<p>FizzBuzz<p>');
    //return("FizzBuzz");
}
}
}

//function addOutput(){
  //$('')
//}

    $(function(){
      $('form').on('submit',fizzBuzz);
    });
  });
});