$(document).ready(function() {

  function addEntry() {
  var entry = $('#number-entry').val();
  $('#number-entry').val('');
event.preventDefault();
}

// Integrate user input into the loop
//
for (i = 1; i <= 100; i+=1) {
  if ( i % 3 === 0) {
    $('#output').append('<p>Fizz</p>');
  } else if (i % 5 === 0) {
    $('#output').append('<p>Buzz</p>');
  } else if ( i % 3 && i % 5 === 0) {
    $('#output').append('<p>FizzBuzz</p>');
  } else {
    $('#output').append('<p></p>'+i+'<p></p>');
  }
}
});

$(function(){
$('#number-entry').on('submit', addEntry);
document.forms["fizzBust"].reset();
});



//var num = 100;
//$(function fizzBuzz(num) { 
  //var fizzCount = 0;
//for (var i = 1; i <= num; i += num) {
  //if ($(num % 3) === 0 && (num % 5) !== 0) {
    //$('#output').append('<p>Fizz</p>');
//return ("Fizz");
  // } else if 
  // ($(num % 5) === 0 && (num % 3) !== 0) {
    // $('#output').append('<p>Buzz</p>');
  //  return("Buzz");
  // } else {
  // ($(num % 3) === 0 && (num % 5) === 0){
    // $('#output').append('<p>FizzBuzz<p>');
    //return("FizzBuzz");
// }
// }
// }

//function addOutput(){
  //$('')
//}

   // $(function(){
     // $('form').on('submit',fizzBuzz);
   // });
  // });
// });