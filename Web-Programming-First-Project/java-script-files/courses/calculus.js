const root = document.getElementById("root");


const ai_course = document.createElement('img');
ai_course.className = "calculus_course";
ai_course.src = "../../photos/calculus.png";

const name_of_the_course = document.createElement("div");
name_of_the_course.textContent = "Introduction To Calculus";
name_of_the_course.style.fontSize = "40px";
name_of_the_course.style.lineHeight = "14px";
name_of_the_course.style.textAlign = "center";
name_of_the_course.style.fontFamily = "Arial";
name_of_the_course.style.position = "absolute";
name_of_the_course.style.left = "480px";
name_of_the_course.style.top = "220px";
name_of_the_course.style.fontWeight = "bold";

let text_of_course_information = "This course provides an introduction to the fundamental concepts of calculus, focusing on differential \n" +
    "and integral calculus and their applications. It is designed for students in mathematics, engineering,\n" +
    " physics, and related fields who require a solid foundation in calculus to solve real-world problems."

const course_information = document.createElement("div");
course_information.textContent = text_of_course_information;
course_information.style.fontSize = "30px";
course_information.style.lineHeight = "30px";
course_information.style.textAlign = "left";
course_information.style.fontFamily = "Arial";
course_information.style.position = "absolute";
course_information.style.left = "480px";
course_information.style.top = "320px";

const professor = document.createElement('img');
professor.className = "professor";
professor.src = "../../photos/professor.jpeg";

const name_of_professor = document.createElement("div");
name_of_professor.textContent = "Instructor DR. ADA TURING";
name_of_professor.style.fontSize = "40px";
name_of_professor.style.lineHeight = "14px";
name_of_professor.style.textAlign = "right";
name_of_professor.style.fontFamily = "Arial";
name_of_professor.style.position = "absolute";
name_of_professor.style.right = "500px";
name_of_professor.style.bottom = "510px";
name_of_professor.style.fontWeight = "bold";

let text_of_professor = 'Dr. Ada Turing is a virtual AI mentor designed to guide students through complex subjects with ease \n' +
    'and clarity. She holds a "PhD in Educational Technology" from the fictional Institute of Advanced \n' +
    'Computational Studies.Dr. Turing has over a decade of virtual experience in teaching \n' +
    'various subjects, specializing in Mathematics, Computer Science, and Data Science.'
const information_about_instructor = document.createElement("div");
information_about_instructor.textContent = text_of_professor;
information_about_instructor.style.fontSize = "30px";
information_about_instructor.style.lineHeight = "30px";
information_about_instructor.style.textAlign = "right";
information_about_instructor.style.fontFamily = "Arial";
information_about_instructor.style.position = "absolute";
information_about_instructor.style.right = "509px";
information_about_instructor.style.bottom = "330px";


const button_for_start_learning = document.createElement("button");
button_for_start_learning.className = "button_for_start_learning";

const start_learning = document.createElement("div");
start_learning.textContent = "Start Learning";
start_learning.style.fontSize = "40px";
start_learning.style.lineHeight = "14px";
start_learning.style.textAlign = "right";
start_learning.style.fontFamily = "Arial";
start_learning.style.position = "absolute";
start_learning.style.left = "250px";
start_learning.style.top = "40px";
// start_learning.style.fontWeight = "bold";
start_learning.style.color = "black";




button_for_start_learning.appendChild(start_learning);
root.appendChild(button_for_start_learning);
root.appendChild(name_of_professor);
root.appendChild(information_about_instructor);
root.appendChild(course_information);
root.appendChild(name_of_the_course);
root.appendChild(professor);
root.appendChild(ai_course);


