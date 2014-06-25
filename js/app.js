$(document).ready(function () {

    function addEntry(event) {
            var entry = $('#number-entry').val();
            $('#output').append('<div>'+entry+'</div>');
            $('#number-entry').val('');
            event.preventDefault();
        }
        //jsbeautifier for addEntry http://jsbeautifier.org/
        // lookup jQuery event variable

    //put loop inside of a function and take a variable and take in a number (100)

    // Integrate user input into the loop
    //

    var limit = 100;
   function fizzBuzz(limit) {
        for (i = 1; i <= limit; i += 1) {
            if (i % 3 === 0 && i % 5 === 0) {
                $('#output').append('<p>FizzBuzz</p>');
            } else if (i % 3 === 0) {
                $('#output').append('<p>Fizz</p>');
            } else if (i % 5 === 0) {
                $('#output').append('<p>Buzz</p>');
            } else {
                $('#output').append('<p>' + i + '</p>'); //'<p>'
            }
        }
    }
});

// if (i % 3 == 0 && i % 5 === 0) {
//$('#output').append('<p>FizzBuzz</p>')

// 



$(function () {
    $('form').on(fizzBuzz,'submit', addEntry);
        document.forms["fizzBust"].reset();
});


//$('#number-entry').closest('form')
//var limit = 100;
//$(function fizzBuzz(num) { 
//var fizzCount = 0;
//for (var i = limit; i <= limit; i += 1) {
//if ($(num % 3) === 0 && (num % 5) !== 0) {
//$('#output').append('<p>Fizz</p>');
//return ("Fizz");
// } else if 
// ($(i % 5) === 0 && (i % 3) !== 0) {
// $('#output').append('<p>Buzz</p>');
//  return("Buzz");
// } else {
// ($(i % 3) === 0 && (i % 5) === 0){
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