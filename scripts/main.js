const courses = [];

const courseForm = document.getElementById("course-form");
const courseInput = document.getElementById("course-input");

if (courseForm) {
    courseForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const course = courseInput.value.trim();
        
        if (course === "") {
            return;
        }

        courses.push(course);
        localStorage.setItem("storedCourses", JSON.stringify(courses));

        courseInput.value = "";
    })
}