import { addCourse } from "./courses.js";

export function initializeCourseForm() {
    const courseForm = document.getElementById("course-form");
    
    courseForm.addEventListener("submit", (e) => {
        addCourse(courseForm.value);
    });
}