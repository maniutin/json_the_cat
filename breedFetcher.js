const request = require("request");
const args = process.argv.slice(2);

request(
  `https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`,
  (error, response, body) => {
    if (error !== null) {
      console.log("Purrror:", error); // Print the error if one occurred
    }
    // console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    // console.log("body:", body); // Print the HTML for the Google homepage.
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log("No breed found, kitty.");
    } else {
      console.log(data[0].description);
    }
  }
);
