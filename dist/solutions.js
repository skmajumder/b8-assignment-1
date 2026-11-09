function multiplyValue(value, multiplier) {
    const appliedMultiplier = multiplier !== undefined ? multiplier : 2;
    return value * appliedMultiplier;
}
function processInput(input) {
    if (typeof input === "string") {
        return input.trim().toLowerCase();
    }
    if (typeof input === "number") {
        return input * 10;
    }
    return input ? "Active" : "Inactive";
}
function formatCoordinate(coordinate) {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}
function concatenateArrays(...arrays) {
    return arrays.reduce((combined, current) => combined.concat(current), []);
}
function getPopularCourses(courses, minStudents) {
    return courses.filter((course) => course.isPublished && course.students >= minStudents);
}
export {};
