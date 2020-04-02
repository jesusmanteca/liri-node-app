// if correct word is typed, reach out to the internet
var axios = require("axios");
var command = process.argv[2];
// console.log(command);

if (command === "users") {
    console.log("You're on the right path")
} else {
    console.log("try typing 'users'")
}
axios.get("https://jsonplaceholder.typicode.com/users")
.then(function (response) {
    // handle success
    for (let index = 0; index < response.data.length; index++) {
    console.log(response.data[index].name + ", email: " + response.data[index].email);

    }
  })