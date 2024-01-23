#!/usr/bin/node
/* eslint-disable no-undef */

const request = require('request');
const url = `https://swapi-api.hbtn.io/api/films/${process.argv[2]}`;

request.get(url, (error, response, body) => {
  if (error) {
    console.error(`Error: ${error}`);
  } else {
    console.log(JSON.parse(body).title);
  }
});
