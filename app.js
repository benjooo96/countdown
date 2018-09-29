// Set the date 
var countDownDate = new Date("Jan 1, 2019 00:00:00").getTime();

// Update countdown every 1 second
var x = setInterval(function() {

    // Get date-time
    var now = new Date().getTime();
    
    // distance between now-then
    var distance = countDownDate - now;
    
    // Time-calc d-h-min-sec
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    //  get id 
    document.getElementById("countd").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
}, 1000);