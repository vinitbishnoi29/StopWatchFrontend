// variable to store the hour part 
let hr =0;
// variable to store the minute part
let min = 0;
// variable to store the second part
let sec = 0;
// variable to display the 100th part of second
let count =0;

// variable that say that timer is on or off
// initiallly flase
let timer = false;

// onclick start function
function start(){ 
    // when user is clicking on the start button we are setting the timer as true;
    timer = true;
    // and calling out main logic stopwatch function
    stopwatch();
}

// onclick stop function
function stop(){ 
    // when user clicks on stop button we are setting the timer as false;
    timer = false;
}

// onclick  reset function
function reset(){ 
      timer = false;
      hr =0;
      min =0;
      sec =0;
      count =0; 
      document.getElementById("hr").innerHTML = "00";
      document.getElementById("min").innerHTML = "00";
      document.getElementById("sec").innerHTML = "00";
      document.getElementById("count").innerHTML = "00";
}

// main stopwatch function

function stopwatch(){ 
    // If timer is true 
    if(timer == true){ 
        //  we start with increasing count after every 10 milli seconds 

        count = count +1;
        // if count is equal to 100 then it will be equal to 1 sec
        if(count == 100){ 
            // increasing the second and resetting the count size to zero
            sec = sec +1;
            count = 0; 
        }
         
        // if second == 60 it is equal to 1 minute 
        if(sec == 60){ 
            min = min +1;
            sec = 0;
        }
        // 60 mints equals to 1 hour
        if(min == 60){ 
            hr = hr +1;
            sec =0;
            min =0;
        }
        
        // recreating hour, mint, second variables to display them in two digits
        var hrString = hr;
        var minString = min;
        var secString = sec;
        if(hr < 10){ 
            hrString = "0" + hr;
        }
        if(min < 10){ 
            minString = "0" + min;
        }
        if(sec < 10 ){ 
            secString = "0" + sec;
        }
        // getting the elements by their IDs
        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("count").innerHTML = count;
        // calling the stopwatch function after every 10 milliseconds as we are checking for
        // 100th part of second only
        setTimeout("stopwatch()",10);
    }
}