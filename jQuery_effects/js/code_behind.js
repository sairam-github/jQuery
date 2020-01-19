$(document).ready(on_ready);

function on_ready() {
    $('#btn1').on('click', btn1_click);
    $('#btn2').on('click', btn2_click);
    $('#btn3').on('click', btn3_click);
}

function btn1_click() {
    // $('#firstdiv').hide();
    //$('#firstdiv').toggle();
    // $('#firstdiv').toggle(2000);
    // $('#firstdiv').fadeOut(2000);
    // $('#firstdiv').fadeToggle(2000);
    $('#firstdiv').slideUp();
}

function btn2_click() {
    // $('#firstdiv').show();
    // $('#firstdiv').fadeIn(2000);
    $('#firstdiv').slideDown();
}

function btn3_click() {
    $('#firstdiv').slideToggle();
}