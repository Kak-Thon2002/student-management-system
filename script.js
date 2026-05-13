// Get HTML Elements
const studentForm = document.getElementById("studentForm");
const studentTable = document.getElementById("studentTable");
const searchInput = document.getElementById("search");

// Store Students
let students = [];

// Add Student
studentForm.addEventListener("submit", function (e) {

    // Prevent Page Reload
    e.preventDefault();

    // Get Input Values
    const name = document.getElementById("name").value;
    const regno = document.getElementById("regno").value;
    const course = document.getElementById("course").value;
    const year = document.getElementById("year").value;

    // Create Student Object
    const student = {
        id: Date.now(),
        name: name,
        regno: regno,
        course: course,
        year: year
    };

    // Add Student To Array
    students.push(student);

    // Display Students
    displayStudents(students);

    // Reset Form
    studentForm.reset();
});

// Display Students Function
function displayStudents(data) {

    // Clear Table
    studentTable.innerHTML = "";

    // Loop Through Students
    data.forEach(student => {

        studentTable.innerHTML += `
            <tr>
                <td>${student.name}</td>
                <td>${student.regno}</td>
                <td>${student.course}</td>
                <td>${student.year}</td>

                <td>
                    <button
                        class="btn btn-danger btn-sm"
                        onclick="deleteStudent(${student.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

// Delete Student
function deleteStudent(id) {

    students = students.filter(student => student.id !== id);

    displayStudents(students);
}

// Search Student
searchInput.addEventListener("keyup", function () {

    const value = searchInput.value.toLowerCase();

    const filteredStudents = students.filter(student =>

        student.name.toLowerCase().includes(value) ||

        student.regno.toLowerCase().includes(value)
    );

    displayStudents(filteredStudents);
});