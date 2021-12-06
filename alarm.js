const setAlarm = document.getElementById("setAlarm");

var soundObj = new Audio("https://www.freespecialeffects.co.uk/soundfx/animals/duck1.wav") 

function alarmBell(){
  soundObj.play();
}

function startAlarm(){
    var alarm = document.getElementById('alarm');
    var userValue = alarm.value;
    alarmDate = new Date(userValue);
    now = new Date()
    let diffMS = alarmDate - now ;
    console.log(diffMS);
    if(diffMS >= 0){
        setTimeout(() => {
            alarmBell()
        }, diffMS);
    }
}

setAlarm.addEventListener("click", startAlarm );
