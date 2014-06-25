$(document).ready(function () {

    function addEntry(event) {
            var entry = $('#number-entry').val(); 
            fizzBuzz(entry);
           $('#output').append('<body>'+entry+'</body>');
            $('#number-entry').val('');
            event.preventDefault();     
}
      
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

// Run on submit
$(function () {
    $('form').on('submit', addEntry);
        document.forms["fizzBust"].reset();
    });
});

//June 25th - RICK