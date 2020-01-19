$(document).ready(on_ready);

function on_ready() {
    $('#btn1').on('click', btn_click);
}

function btn_click() {
  // $("#firstdiv").fadeToggle(1000);
  // $("p:odd").fadeToggle(1000);
  setBorder();
}

function setBorder() {
  $("#firstdiv").css({"border-color": "red"});
  $("#seconddiv").css({"border-color": "green"});
  $("#thirddiv").css({"border-color": "yellow"});
}