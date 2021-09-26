$(document).ready(
  $.ajax({
    async: true,
    url: "https://worldtimeapi.org/api/ip",
      beforeSend: function() { $('#loadscreen').show(); },
      complete: function() { $('#loadscreen').fadeOut(800); },
      success: function(result) {
      
      //Declare variables  
      var timeformatted, timeformattedsliced, timeformattedhour;
      var currentTimeDiv, dayOfYearStringDiv, dayOfWeekStringDiv, incrementforzero;
      var weekOfYearStringDiv, abbreviationTZ, timeofday;

      //time of day
      timeformatted = result.datetime.slice(11, 16);
      timeformattedsliced = result.datetime.slice(11, 13);
      timeformattedhour = Number(timeformattedsliced);

      currentTimeDiv = document.getElementById('current-timezone');
      currentTimeDiv.innerHTML = result.timezone;

      dayOfYearStringDiv = document.getElementById('day-of-year');
      dayOfYearStringDiv.innerHTML = result.day_of_year;

      dayOfWeekStringDiv = document.getElementById('day-of-week');
      incrementforzero = (result.day_of_week + 1);
      console.log(incrementforzero)
      dayOfWeekStringDiv.innerHTML = incrementforzero;

      weekOfYearStringDiv = document.getElementById('week-of-year');
      weekOfYearStringDiv.innerHTML = result.week_number;

      abbreviationTZ = document.getElementById('abbreviation');
      abbreviationTZ.innerHTML = result.abbreviation;

      timeofday = document.getElementById('timeofday');
      timeofday.innerHTML = timeformatted;

      console.log(timeformattedhour)
      
      //set day and night
      var greetings = document.getElementById('greetings');
      
      if((timeformattedhour >= 5) && (timeformattedhour < 12 )) {
        greetings.innerHTML = "Good Morning";
        document.body.className = 'daytime';
      } else if ((timeformattedhour >= 12) && (timeformattedhour < 18 )) {
        greetings.innerHTML = "Good Afternoon";
        document.body.className = 'daytime';
      } else if ((timeformattedhour >= 18) || (timeformattedhour < 5 )) {
        greetings.innerHTML = "Good Evening";
        document.body.className = 'nighttime';
      } else {
        greetings.innerHTML = "Greetings";
        document.body.className = 'daytime';
      };
    }

  })
);



