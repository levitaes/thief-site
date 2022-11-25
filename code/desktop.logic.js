function timeTimer(){
    setTimeout('getTime()',1000);
}

function getTime() {
    let date = new Date();
    let minutes = date.getMinutes().toString();
    if (minutes.length <=1) minutes = '0' + minutes;
    document.getElementById("livetime").innerHTML = date.getHours()+":"+minutes; timeTimer();
}
