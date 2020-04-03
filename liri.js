// this is using the package dotenv to hide sensitive information
require("dotenv").config();
// this is requiring axios to get information, moment to put dates in order
var axios = require("axios");
var moment = require("moment");
// making a variable to require the information/data from the js file keys
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

// *** || *** \\

var command = process.argv[2]

if (command === "concert-this"){
    console.log("You have chosen Concert-This.")
    // this is where the concert command goes
    var artist = process.argv[3];
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function (response) {
        // handle success
        for (let index = 0; index < response.data.length; index++) {
        console.log("Name of the venue: " + response.data[index].venue.name);
        console.log("Venue location: " + response.data[index].venue.city);
        console.log("Date of the Event: " + moment(response.data[index].datetime).format("MM/DD/YYYY"));
// ??????? - How do I separate the three console logs from the next three console logs???? \\
    
        }
      })





} else if (command === "spotify-this-song") {
    console.log("**********You have chosen to Spotify the song.**********")
    // this is where the Spotify command goes
    spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
      console.log(data); 
      });
} else if (command === "movie-this") {
    console.log("You have chosen to find data about the movie.")
// this is where the Movie command goes
} else if (command === "do-what-it-says") {
    console.log("You have chosen to do what it says.")
}