var min = 00;
var sec = 00;
var  msec = 00;
var minHeading = document.getElementById("min")
var secHeading = document.getElementById("sec")
var msecHeading = document.getElementById("msec")
var interval;
document.getElementById("start").disabled = false;
document.getElementById("stop").disabled = true;
document.getElementById("repeat").disabled = true;

function timer(){
    document.getElementById("start").disabled = true;
document.getElementById("stop").disabled = false;
document.getElementById("repeat").disabled = false;
    msec++
    msecHeading.innerHTML = msec;
    if(
        msec >= 99 ){
            sec++
            secHeading.innerHTML = sec
            msec = 0;
    }
    else if(sec >= 59){
        min++
        minHeading.innerHTML = min
        sec = 0;
    }
    var startbtn = document.getElementById("start")

}
function start(){
    interval = setInterval(timer,10)

}

function stop(){
    document.getElementById("start").disabled = false;
document.getElementById("stop").disabled = true;
document.getElementById("repeat").disabled = false;
    clearInterval(interval)
}
function reset(){
    document.getElementById("start").disabled = false;
document.getElementById("stop").disabled = true;
document.getElementById("repeat").disabled = true;
   
    min = 00;
    sec = 00;
    msec = 00;
minHeading.innerHTML = min
secHeading.innerHTML = sec
msecHeading.innerHTML = msec


}
