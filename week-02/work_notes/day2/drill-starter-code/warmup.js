var courseName = data.course; 

var firstStudent = data.students[0].first_name + " " + data.students[0].last_name
  
var totalStudents = data.students.length

data.students.forEach( function (element){
console.log(element.github_username);
})
