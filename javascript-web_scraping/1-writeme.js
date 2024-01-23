#!/usr/bin/node
/* eslint-disable no-undef */

const fs = require('fs');

const path = process.argv[2];
const string = process.argv[3];

fs.writeFile(path, string, 'utf-8', (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
