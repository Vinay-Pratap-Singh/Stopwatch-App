// Accessing the required html elements
let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let millisecond = document.getElementById("millisecond");

let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn");

// Id to capture the interval id to stop it
let id;
console.log(id);
let flag = false;

// Function to start the timer
startBtn.addEventListener("click", ()=>{
    if(flag === false){
        id = setInterval(() => {
            flag = true;
            let hr = Number(hour.innerText);
            let min = Number(minute.innerText);
            let sec = Number(second.innerText);
            let msec = Number(millisecond.innerText);
    
            msec++;
            // Calculating the exact value of time
            if(msec > 99){
                sec++;
                msec = 0;
            }
    
            if(sec > 59){
                min++;
                sec = 0;
            }
    
            if(min > 59){
                hr++;
                min = 0;
            }
    
            if(hr > 23){
                hr = 0;
            }
    
            // Making it double digit to look good
            if(hr < 10){
                hr = "0" + hr;
            }
            if(min < 10){
                min = "0" + min;
            }
            if(sec < 10){
                sec = "0" + sec;
            }
            if(msec < 10){
                msec = "0" + msec;
            }
    
            // Displaying the final calculation 
            hour.innerText = hr;
            minute.innerText = min;
            second.innerText = sec;
            millisecond.innerText = msec;
    
            // Changing the background of the elements
            startBtn.style.backgroundColor = "#eeeee4";
            pauseBtn.style.backgroundColor = "white";
            resetBtn.style.backgroundColor = "white";
        }, );
    }
})

// Creating the pause functioning
pauseBtn.addEventListener("click", ()=>{
    clearInterval(id);
    flag = false;

    // Changing the background of the elements
    startBtn.style.backgroundColor = "white";
    pauseBtn.style.backgroundColor = "#eeeee4";
    resetBtn.style.backgroundColor = "white";
})

// Reset functioning to reset every value
resetBtn.addEventListener("click", ()=>{
    clearInterval(id);
    flag = false;
    hour.innerText = "00";
    minute.innerText = "00";
    second.innerText = "00";
    millisecond.innerText = "00";

    startBtn.style.backgroundColor = "white";
    pauseBtn.style.backgroundColor = "white";
    resetBtn.style.backgroundColor = "#eeeee4";
})