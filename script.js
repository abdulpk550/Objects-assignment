// Given an array of student objects, display each student’s name and marks in a table
// using DOM.
let students = [
    { name: "Ali", marks: 85 },
    { name: "Sara", marks: 92 },
    { name: "Bilal", marks: 76 },
    { name: "Ayesha", marks: 89 },
    { name: "Usman", marks: 95 }
];

let tbody = document.querySelector("#studentTable tbody");

for (let i = 0; i < students.length; i++) {
    tbody.innerHTML += ` <tr>
        <td>${students[i].name}</td>
        <td>${students[i].marks}</td>
      </tr>`
}
// From a list of student objects with names and scores, find and display the top scorer.
 let topStudent = students[0];
 for (let i = 1; i < students.length; i++) {
      if (students[i].marks > topStudent.marks) {
        topStudent = students[i];
      }
    }
    let container = document.getElementById("topScorer");
    container.innerHTML = `
      <h2>Top Scorer</h2>
      <p><strong>Name:</strong> ${topStudent.name}</p>
      <p><strong>Score:</strong> ${topStudent.marks}</p>
    `;

   