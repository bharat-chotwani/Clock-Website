var quotation = document.querySelector('#quote');

function updateClock(){
    var now = new Date();
    console.log(now);
}

function initClock(){
    updateClock();
    window.setInterval(updateClock, 1000);
}