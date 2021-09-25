$(document).ready(
    $.ajax({
      async: true,
      url: "https://freegeoip.app/json/",
      success: function(data) {

        locationheader = document.getElementById('location');
        locationheader.innerHTML = 'in ' + data.city + ', ' + data.region_code;
      }
    })
);

