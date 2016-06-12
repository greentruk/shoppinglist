$(document).ready(function() {
    $('#userinput').submit(function(event) {
        event.preventDefault();
        var something = $('#inputBox').val();
        // if user inputs nothing and hits enter, alert will pop up and nothing is appended
        if (something === "") {
            alert('You forgot to add an item')
        }
        //otherwise, text is appended as a li to the shopping list
        else {
            $('.allitems ul').append("<li class='currentitem'> <img class='checked' src='checkbox.png'/>" + " " + something + " " + "<img src='trashcan.png'/ class='trash'></li>");   
        }
        // resets the textbox after item is entered
        $('#userinput')[0].reset();
    });

});

//functions to delete and strikethrough code when checkbox and trashcan are clicked
assignlisteners();
function assignlisteners() {
    $('ul').on('click', '.trash', function(event){
        console.log('trash clicked');
        $(this).closest('li').remove();
    }); 
    $('ul').on('click', '.checked', function(event) {
        $(this).closest('li').toggleClass('currentitem-linethrough');
        console.log('check clicked');
    });
}