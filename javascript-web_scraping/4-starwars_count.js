#!/usr/bin/node
//prints the number of movies where the character “Wedge Antilles” is present


const request = require('request');


const url = 'https://swapi-api.hbtn.io/api/people/18';


request(url, { json: true }, (error, response, body) => {
    if (response && response.statusCode === 200) {
      console.log(body.films.length);
    } else if (error) {
      console.error('Error:', error);
    } else {
        console.error('code:', response.statusCode);
        return;
      }
});
