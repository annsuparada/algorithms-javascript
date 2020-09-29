// HackerLand University has the following grading policy:

// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.
// For example,  will be rounded to  but  will not be rounded because the rounding would result in a number that is less than .

// Given the initial value of  for each of Sam's  students, write code to automate the rounding process.

// Complete the function gradingStudents in the editor below. It should return an integer array consisting of rounded grades.


function gradingStudents(grades) {
    
    for (let i = 0; i < grades.length; i++){
        
        if (grades[i] >= 38){
            if ((grades[i] + 2) % 5 === 0) {
                grades[i] = grades[i] + 2
            }
            if ((grades[i] + 1) % 5 === 0 ){
                grades[i] = grades[i] + 1
            }
        }
        
    }
   
    return grades
}

console.log(gradingStudents([73, 67, 38, 33])) // [75, 67, 40/ 33]