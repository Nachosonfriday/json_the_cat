const fs = require('fs')
const request = require('request');
// const url = "https://api.thecatapi.com/v1/breeds/search?q=sib"
const reqBreed = process.argv[2]
const url = `https://api.thecatapi.com/v1/breeds/search?q=${reqBreed}`

if (!reqBreed){
  console.log("No params were given")
}
  request(url, (error, response, body) => {
    if (error) {
      console.log(`Request Error:`, error)
    } 
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.}
        const data = JSON.parse(body); //now becomes an object
        if (data.length === 0) {
          console.log("Breed not found")
        } else {
        console.log(data[0].description)    
        }
});
