const students = [
    { name: "Alice", score: 95, subject: "Math" },
    { name: "Bob", score: 67, subject: "Science" },
    { name: "Charlie", score: 82, subject: "English" },
    { name: "David", score: 74, subject: "History" },
    { name: "Eve", score: 58, subject: "Art" },
    { name: "Frank", score: 89, subject: "Physics" },
    { name: "Grace", score: 91, subject: "Biology" },
];
const studentsAbove70 = students.filter(students => students.score > 70);
console.log("Students Who Scored Above 70:",studentsAbove70);

const studentsWithGrades = students.map(student => {
    let grade;
    if (student.score >= 90) 
        {grade = 'A';}
    else if (student.score >= 80) 
        {grade = 'B';}
    else if (student.score >= 70) 
        {grade = 'C';}
    else if (student.score >= 60) 
        {grade = 'D';}
    else 
    {grade = 'F';}
    return {student,grade};
});
console.log("Students with Grades:", studentsWithGrades);

const averageScore=totalScore/students.length;
console.log("Average Score of Students:", averageScore);

const aboveAverage=students.filter(student => student.score>averageScore);
console.log("Students Who Scored Above the Average Score:",aboveAverage);
