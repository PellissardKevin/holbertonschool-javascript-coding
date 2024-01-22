#!/usr/bin/node
//prints the number of movies where the character “Wedge Antilles” is present


const request = require('request');


const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('code:', response.statusCode);
    return;
  } else {
    const movieData = JSON.parse(body).results;
    const wedgeAntillesMovies = movieData.filter((film) =>
      film.characters.includes('https://swapi-api.hbtn.io/api/people/18/')
    );

    console.log(`${wedgeAntillesMovies.length}`);
  }
});
