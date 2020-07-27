const url_string = 'https://api.openweathermap.org/data/2.5/weather?q=kolkata&appid=b1d4ae4de248a2bd1dd8f6fc57931244';

var request = new XMLHttpRequest()
request.open('GET',url_string , true)
request.send();
request.onload = function() {
  var data = JSON.parse(this.response)
  console.log(data);
}