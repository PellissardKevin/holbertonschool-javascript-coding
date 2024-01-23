#!/usr/bin/node
/* eslint-disable no-undef */

const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const filmData = JSON.parse(body).results;
    let numberApparition = 0;

    for (const film of filmData) {
      for (const character of film.characters) {
        if (character.includes('/18/')) {
          numberApparition += 1;
        }
      }
    }
    console.log(numberApparition);
  }
});
