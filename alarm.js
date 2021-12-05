const setAlarm = document.getElementById("setAlarm");

function startAlarm(){
    var userValue = alarm.value ;
    console.log(userValue);
    const now = new Date(userValue);
    console.log(now);
    var diffMS = userValue - now ;
    console.log(diffMS);
}

setAlarm.addEventListener("click", startAlarm );
