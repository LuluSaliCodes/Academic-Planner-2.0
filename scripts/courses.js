let courses = [];

export function addCourse(name) {
    const course = {
        id: courses.length + 1,
        name: name,
        tasks: []
    };

    courses.push(course);
    saveCourses();
}

export function addCourseObject(courseObject) {
    courses.push(courseObject);
}

export function removeCourse() {

}

export function getCourses() {
    return courses;
}

function saveCourses() {
    localStorage.setItem("savedCourses", JSON.stringify(courses));
}