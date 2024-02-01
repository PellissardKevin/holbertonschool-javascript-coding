const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = data.split('\n').filter(Boolean).slice(1).map((line) => {
        const [firstname, lastname, age, field] = line.split(',');
        return {
          firstname, lastname, age, field,
        };
      });

      const studentsByField = {
        CS: [],
        SWE: [],
      };

      students.forEach((student) => {
        if (studentsByField[student.field]) {
          studentsByField[student.field].push(student.firstname);
        }
      });

      console.log(`Number of students: ${students.length}`);

      console.log(`Number of students in CS: ${studentsByField.CS.length || 0}. List: ${studentsByField.CS.join(', ')}`);
      console.log(`Number of students in SWE: ${studentsByField.SWE.length || 0}. List: ${studentsByField.SWE.join(', ')}`);

      const result = {
        totalNumber: `Number of students: ${students.length}`,
        CS: `Number of students in CS: ${studentsByField.CS.length || 0}. List: ${studentsByField.CS.join(', ')}`,
        SWE: `Number of students in SWE: ${studentsByField.SWE.length || 0}. List: ${studentsByField.SWE.join(', ')}`,
      };

      resolve(result);
    });
  });
}

module.exports = countStudents;
