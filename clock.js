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

        if(hour == 0){
            hour = 12;
            quotation.innerText = " An early-morning walk is a blessing for the whole day. – Henry David Thoreau"
        } if(hour > 12){
            hour = hour - 12;
            per = "PM" ;
            
        }
        if (per === 'AM'){
            quotation.innerText = " An early-morning walk is a blessing for the whole day. – Henry David Thoreau"
        } else if(per === 'PM'){
            quotation.innerText = "Each night, when I go to sleep, I die. And the next morning, when I wake up, I am reborn.― Mahatma Gandhi"
        }

        Number.prototype.pad = function(digits){
            for(var n = this.toString(); n.length < digits; n = 0 + n);
            return n;
        }

        var months = ["January", "February", "March", "Aprill", "May", "June", "July", "August", "September", "October", "November", "December"];
        var weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var ids = ["dayname","month","daynum","year","hour","mint","secnd","period"];
        var values = [weeks[dateName],months[mo],dnum.pad(2),yr,hour.pad(2),mint.pad(2),sec.pad(2),per];

    for(let i=0; i<ids.length; i++){
    document.getElementById(ids[i]).firstChild.nodeValue = values[i] ;
    }
}

function initClock(){
    updateClock();
    window.setInterval("updateClock()", 1);
}