$(document).ready(on_ready);

function on_ready() {
    $('#btnToggle').on('click', btnToggle_click);
}

function btnToggle_click() {
    // $('#firstdiv').fadeToggle(5000, function() {
    //     alert("division is faded");
    // });

    $('#firstdiv').slideUp().slideDown().fadeOut().fadeIn();
}