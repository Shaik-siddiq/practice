let a;
let date;
let time;
//const options = {weekday:'long', year:'numeric', month:'long', day:'numeric'};
setInterval(() => {
    a = new Date();
     time = + a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
     //date = a.toLocalDateString( undefined, options);
    document.getElementById('timedate').innerHTML = time;
    
}, 1000)