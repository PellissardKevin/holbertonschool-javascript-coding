#!/usr/bin/node
//prints the number of movies where the character “Wedge Antilles” is present

const request = require('request');

const url = process.argv[2];

request.get(url, (error, response, body) => {
  if (error) {
    console.error(`${error}`)
  } else if (response && response.statusCode === 200) {
    const movieData = JSON.parse(body).results;
    const wedgeAntillesMovies = movieData.filter((film) =>
      film.characters.includes('https://swapi-api.hbtn.io/api/people/18/')
    );

    console.log(`${wedgeAntillesMovies.length}`);
  }
});
