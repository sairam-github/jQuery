$(document).ready(on_ready);

function on_ready() {
    $('#btn1').on('click', btn1_click);
}

function btn1_click() {
    // var txt = $('#p1').text();
    // var txt = $('#p1').html();
    // $('#p1').text('Hello World!');
    // alert(txt);
    // $('#p1').html("This is first <b>paragraph</b> in <i>first</i> division");

    // attr() method to access attributes of an element
    // css() method to access style parameters
    alert($('.mydivs').css("border"));
}