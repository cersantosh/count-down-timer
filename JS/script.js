let hr = document.querySelector(".hour")
let min = document.querySelector(".min")
let sec = document.querySelector(".sec")

let minute = 0;
let second = 0; 
let hour = 5;

// keep in mind 5 hours is 4 hours 59 minutes and 60 seconds

function countdown(){
    if(hour == 0 && minute == 0 && second == 0){
        return;
    }
    // when this if statement is runs then second is set to 60 so another if statement will not execute if upper if statement is runs
   if(minute == 0 && hour != 0 && second == 0){

            hour--;
            minute = 59;
            second = 60;
    }
    if(second == 0 && minute != 0){
            second = 60;

            minute--;
    }
    // second is the frequently changing value so always decrement it
    second--;
    hr.textContent = `${hour} : Hour`;
    min.textContent = `${minute} : Minutes`;
    sec.textContent = `${second} : Seconds`;
    setTimeout(countdown, 1000);
}

countdown();