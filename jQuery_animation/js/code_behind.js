$(document).ready(on_ready);

function on_ready() {
    $('#btn1').on('click', btn1_click);
    $('#btn2').on('click', btn2_click);
    $('#btn3').on('click', btn3_click);
}

function btn1_click() {

}

function btn2_click() {

}

function btn3_click() {
    $('#cube').animate({
        left:'150px',
        opacity:'0.8',
        width:'100px',
        height:'100px'
    }, 3000);
}