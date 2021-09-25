var http = require("https");

var options = {
  "method": "GET",
  "hostname": "freegeoip.app",
  "port": null,
  "path": "/json/",
  "headers": {
    "accept": "application/json",
    "content-type": "application/json"
  }
};

console.log('yo');

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();