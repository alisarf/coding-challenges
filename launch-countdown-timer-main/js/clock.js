let days = document.querySelectorAll(".days");
let hours = document.querySelectorAll(".hours");
let minutes = document.querySelectorAll(".minutes");
let seconds  = document.querySelectorAll(".seconds");






function getDays(event){
    var newDate = new Date;
    const eventDate = new Date('2021-09-15T16:30:45');
    //TESTING DATE
    //const newDate = new Date('2021-09-01T14:10:00')

    const diffTime = eventDate.getTime() - newDate.getTime(); //milliseconds
    //Days
    const diffDaysAverage = (diffTime/(1000 * 3600 *24));
    const diffDays = Math.floor(diffDaysAverage); //seconds away total
    const diffDaysRemainder = diffDaysAverage % 1;
    //Hours
    const diffHours = Math.floor(diffDaysRemainder * 24);
    const diffHoursRemainder = (diffDaysRemainder * 24) % 1;

    //Minutes 
    const diffMinutes = Math.floor(diffHoursRemainder * 60);
    const diffMinutesRemainder = (diffHoursRemainder * 60) % 1;

    //Seconds
    const diffSeconds = Math.floor(diffMinutesRemainder * 60);
    const diffSecondsRemainder = (diffMinutesRemainder * 60) % 1;

    /*  TESTING LOGS
    //console.log(diffTime);
    console.log("days : " + diffDays);//yes!
    //console.log(diffSeconds);
    console.log("seconds : " + diffSeconds);
    //console.log(diffMinutesRemainder);
    console.log("minutes : " + diffMinutes);
    //console.log(diffHoursRemainder);
    console.log("hours : " + diffHours);
    */

    function updateDays(days) {
        for (let i= 0; i < days.length; i++){
            days[i].textContent = diffDays;
        }
    }
    function updateHours(hours){
        for (let i= 0; i < hours.length; i++){
            hours[i].textContent = diffHours;
        }
    }
    function updateMinutes(minutes){
        for (let i= 0; i < minutes.length; i++){
            minutes[i].textContent = diffMinutes;
        }
    }
    function updateSeconds(seconds){
        for (let i= 0; i < seconds.length; i++){
            seconds[i].textContent = diffSeconds;
        }
    }
    updateDays(days);
    updateHours(hours);
    updateMinutes(minutes);
    updateSeconds(seconds);

}
//Call fxn every second
setInterval(getDays, 1000);


