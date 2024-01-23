#!/usr/bin/node
/* eslint-disable no-undef */

const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
  } else if (response.statusCode !== 200) {
    console.error('code:', response.statusCode);
    return;
  } else {
    const todosData = JSON.parse(body);
    const completedTasks = todosData.filter(task => task.completed);

    const completedTasksByUser = completedTasks.reduce((acc, task) => {
      const userId = task.userId.toString();
      acc[userId] = (acc[userId] || 0) + 1;
      return acc;
    }, {});

    console.log(completedTasksByUser);
  }
});
