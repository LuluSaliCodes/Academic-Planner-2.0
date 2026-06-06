import { addCourse } from "./courses.js";

export function initializeCourseForm() {
    const courseForm = document.getElementById("add-course-form");
    
    courseForm.addEventListener("submit", (e) => {
        e.preventDefault();

        addCourse(courseForm.value);
    });
}