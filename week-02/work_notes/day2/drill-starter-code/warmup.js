var courseName = data.course; 

var firstStudent = data.students[0].first_name + " " + data.students[0].last_name
  
var totalStudents = data.students.length

function buildGithubLink(student) {
  var studentFullName = student.first_name + " " + student.last_name;
  var studentGit = student.github_username;
  return "<a href='http://github.com/" + studentGit + "'>" + studentFullName + "</a>";
}

function renderGithubLinks(students){
 students.forEach (function(student){
    var anchor = buildGithubLink(student);
    $('body').append(anchor + "</br>");
  });
}

renderGithubLinks(data.students);

//'<a href="https://github.com/' + url + '">' + full_name + '</a>'