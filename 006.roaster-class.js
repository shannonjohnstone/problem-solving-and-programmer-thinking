/**
 * Roster
 * 
 * Create a simple class for students that meets the following requirements
 * 
 * - add/remove grades
 * - view student grades, as a score and letter
 * - view average score of class
 */
class Grades {
  studentsGrades = {};
  currentId = 1;

  constructor(initialStudentGrades = []) {
    initialStudentGrades.forEach(grade => this.recordGrade(grade));
  }

  recordGrade(grade = {}) {
    if (!grade) return "No student grade supplied";

    this.studentsGrades[this.currentId] = grade;
    this.currentId++;
  }

  letterGrade(id) {
    if (!id) return "No id supplied";
    const grade = this.grade(id);

    if (grade > 90) return "A";
    if (grade > 50) return "B";
    return "C";
  }

  grade(id) {
    if (!id) return "No id supplied";
    return this.studentsGrades[id];
  }

  removeGrade(id) {
    if (!id) return "No id supplied";

    const student = this.studentsGrades[id];

    if (!student) return "No id does not exist";

    if (student) {
      delete this.studentsGrades[id];
    }
  }

  students() {
    return this.studentsGrades;
  }

  averageGrade() {
    const students = this.studentsGrades;
    let totalGrades = 0;
    const totalStudents = Object.keys(students).length;

    Object.keys(students).forEach(index => {
      totalGrades += students[index].grade;
    });

    return totalGrades / totalStudents;
  }
}

// Test implementation
const grades = new Grades([{ grade: 100, name: "Jack" }, { grade: 0, name: "Kim" }]);
console.log(grades.recordGrade({ grade: 100, name: "Bob" }));
console.log(grades.recordGrade({ grade: 100, name: "Jamie" }));
console.log(grades.recordGrade({ grade: 70, name: "Chris" }));
console.log(grades.averageGrade());
console.log(grades.students());
console.log(grades.removeGrade(2));
console.log(grades.grade(1));
console.log(grades.letterGrade(1));
console.log(grades.students());
console.log(grades.averageGrade());