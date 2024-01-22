#!/usr/bin/node
//prints the title of a Star Wars movie where the episode number matches


const request = require('request');

const id = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${id}/`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error(`${error}`)
  } else if (response.statusCode !== 200) {
    console.error('Unexpected status code:', response.statusCode);
  } else {
    console.log(`${JSON.parse(body).title}`);
  }
});
