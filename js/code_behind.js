$(document).ready(on_ready);

function on_ready() {
    $('#btn1').on('click', btn_click);
}

function btn_click() {
  $("#heading1").fadeToggle(5000);
}
