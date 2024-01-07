import Total from "components/Total/Total"
import CourseLine from "components/Course/CourseLine"

const CourseContent = ({ course }) => {
    const total = course.parts.reduce((acc, course) => acc += course.exercises, 0)
    return (
        <div>
            <h1>{course.name}</h1>
            {course.parts.map((course) =>

                <CourseLine key={course.id} course={course} />

            )}
            <Total total={total} />
        </div>
    )
}

export default CourseContent;