#!/usr/bin/node
//prints the number of movies where the character “Wedge Antilles” is present


const request = require('request');


const url = 'https://swapi-api.hbtn.io/api/people/18';


request(url, (error, response, body) => {
  if (response && response.statusCode === 200) {
    console.log(JSON.parse(body).films.length);
  } else {
    console.error(`${error}`)
  }
});
