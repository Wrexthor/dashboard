timer();

function timer(){
 var now     = new Date,
     hours   = now.getHours(),
     ampm    = hours<12 ? ' AM' : ' PM',
     minutes = now.getMinutes(),
     seconds = now.getSeconds(),
     t_str   = [hours-12, //otherwise: what's the use of AM/PM?
                (minutes < 10 ? "0" + minutes : minutes),
                (seconds < 10 ? "0" + seconds : seconds)]
                 .join(':') + ampm;
 document.getElementById('time_span').innerHTML = t_str;
 setTimeout(timer,1000);
}