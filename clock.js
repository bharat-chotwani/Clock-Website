var quotation = document.querySelector('#quote');

function updateClock(){
    var now = new Date();
    var dateName = now.getDay(),
        mo = now.getMonth(),
        dnum = now.getDate(),
        yr = now.getFullYear()
        hour = now.getHours(),
        mint = now.getMinutes(),
        sec = now.getSeconds(),
        per = "AM";

        var months = ["January", "February", "March", "Aprill", "May", "June", "July", "August", "September", "October", "November", "December"];
        var weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["datetime","date","dayname","month","daynum","year","time","hour","mint","period"];
        var values = [weeks[dateName],months[mo],dnum,yr,hour,mint,sec,per];

    for(let i=0; i<ids.length; i++){
    document.getElementById(ids[i]).firstChild.nodeValue = values[i] ;
    }
}

function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}