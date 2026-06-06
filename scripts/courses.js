let courses = [];

export function addCourse(name) {
    const course = {
        id: courses.length + 1,
        name,
        tasks: []
    };

    courses.push(course);
}

export function getCourses() {
    return courses;
}