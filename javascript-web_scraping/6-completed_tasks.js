#!/usr/bin/node
//computes the number of tasks completed by user id



const request = require('request');

const url = process.argv[2];

request(url, (error, response, body) => {
  if (error) {
    console.error(`${error}`);
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
