#!/usr/bin/node
/* eslint-disable no-undef */

const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.error(`Error : ${error}`);
  } else {
    const todosData = JSON.parse(body);
    const completedTasksByUser = {};
    todosData.forEach((todo) => {
      if (todo.completed) {
        if (completedTasksByUser[todo.userId]) {
          completedTasksByUser[todo.userId]++;
        } else {
          completedTasksByUser[todo.userId] = 1;
        }
      }
    });

    console.log(completedTasksByUser);
  }
});

