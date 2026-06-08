import { addCourse } from "./courses.js";
import { getCourses } from "./courses.js";

export function renderCourses() {
    if (localStorage.getItem("savedCourses")) {
        const courses = JSON.parse(
            localStorage.getItem("savedCourses")) || [];
        //console.log(courses); //db
        for (const item of courses) {
            createCourseCard(item.name);
        }
    }
}

export function initializeCourseForm() {
    const courseForm = document.getElementById("add-course-form");
    const courseInput = document.getElementById("course-input");
    
    courseForm.addEventListener("submit", (e) => {
        e.preventDefault();

        addCourse(courseInput.value);
        createCourseCard(courseInput.value);

        courseInput.value = "";

        console.log(getCourses()); //db
    }); 
}

function createCourseCard(courseName) {
    const coursesGrid = document.querySelector(".courses-grid");
    const newCourseDiv = document.createElement("div");
    newCourseDiv.classList.add("course-card");
    
    const cardHeader = document.createElement("a");
    cardHeader.textContent = courseName;

    cardHeader.href = `course.html?course=${encodeURIComponent(courseName)}`;

    newCourseDiv.appendChild(cardHeader);
    coursesGrid.appendChild(newCourseDiv);
}