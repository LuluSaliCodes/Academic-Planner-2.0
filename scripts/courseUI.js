import { addCourse } from "./courses.js";
import { getCourses } from "./courses.js";

export function initializeCourseForm() {
    const courseForm = document.getElementById("add-course-form");
    const courseInput = document.getElementById("course-input");
    
    courseForm.addEventListener("submit", (e) => {
        e.preventDefault();

        addCourse(courseInput.value);
    });

    console.log(getCourses());
}