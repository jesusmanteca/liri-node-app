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
    var artist = process.argv[3];
    console.log("__________________________________________________")
    console.log(" ")
    console.log("You have chosen information about " + artist + ":")
    console.log("__________________________________________________")
    console.log(" ")
    // this is where the concert command goes
   
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function (response) {
        // handle success
        for (let index = 0; index < response.data.length; index++) {
        console.log("Name of the venue: " + response.data[index].venue.name);
        console.log("Venue location: " + response.data[index].venue.city);
        console.log("Date of the Event: " + moment(response.data[index].datetime).format("MM/DD/YYYY"));
        console.log(" ")
        console.log("***********")
        console.log(" ")
        }
        console.log("__________________________________________________")
      })

} else if (command === "spotify-this-song") {
    var query = process.argv[3];

    console.log(" ")
    console.log("**********You have chosen to Spotify the song.**********")
    console.log(" ")
    
    // this is where the Spotify command goes
    spotify.search({ type: 'track', query: query }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
    //   console.log(data.tracks.items[0]); 
      console.log(" ")
      console.log("***************")
      console.log("Artist: " + data.tracks.items[0].artists[0].name);
      console.log("Song Title: " + data.tracks.items[0].name);
      console.log("Album Name: " + data.tracks.items[0].album.name);
      console.log(" ")
      console.log("Link: " + data.tracks.items[0].external_urls.spotify);
      console.log("***************")
      console.log(" ")
      });
    //
    
   
      
    "The Sign"


} else if (command === "movie-this") {
    var movieName = process.argv[3];
    if (movieName === undefined) {
        movieName = "Mr. Nobody";
    }
    console.log(" ")
    console.log("You have chosen to find data about the movie.")
    console.log(" ")
// this is where the Movie command goes
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

axios.get(queryUrl).then(
  function(response) {
    console.log(" ")
    console.log("***********")
    console.log(" ")
    console.log("Title: " + response.data.Title);
    console.log("Year: " + response.data.Year);
    console.log(" ")
    console.log("*** Ratings ***");
    console.log("IMDB Rating: " + response.data.Ratings[0].Value);
    console.log("Rotten Tomatoes Rating of the movie: " + response.data.Ratings[1].Value);
    console.log(" ")
    console.log("*** Country/Language ***");
    console.log("Country: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log(" ")
    console.log("*** Plot ***");
    console.log(response.data.Plot);
    console.log(" ")
    console.log("*** Actors ***");
    console.log(response.data.Actors);
    console.log(" ")
    console.log("***********")
    console.log(" ")
  })
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });



} else if (command === "do-what-it-says") {
    console.log("You have chosen to do what it says.")
}