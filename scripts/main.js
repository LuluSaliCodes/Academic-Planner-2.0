const openBtn = document.getElementById("add-course-btn");
const closeBtn = document.getElementById("close-modal");
const overlay = document.getElementById("modal-overlay");

const addCourseForm = document.getElementById("add-course-form");
const courseInput = document.getElementById("course-input");

const courses = [];

openBtn.addEventListener("click", () => {
    overlay.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
    overlay.classList.add("hidden");

    const course = {
        name: courseInput.textContent.trim()
    };

    courses.push(course);
});

console.log(courses);