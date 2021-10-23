
var request = require('request');

var client_id = '4f62261bf9ec402d867aa525f1284ba8';
var client_secret = '90d7056a358e47b184c225d9349d7b3d';

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + ('NGY2MjI2MWJmOWVjNDAyZDg2N2FhNTI1ZjEyODRiYTg6OTBkNzA1NmEzNThlNDdiMTg0YzIyNWQ5MzQ5ZDdiM2Q=')
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};
console.log(authOptions);


request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {

    // use the access token to access the Spotify Web API
    var token = body.access_token;
    console.log("Token:"+token);
    var options = {
      url: 'https://api.spotify.com/v1/users/jmperezperez',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      json: true
    };
    request.get(options, function(error, response, body) {
      console.log(body);
    });
  }
});
