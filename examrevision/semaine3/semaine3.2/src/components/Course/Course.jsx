import CourseContent from "components/Course/CourseContent";


const Course = ({ courses }) => {
    return (
        <div>
            {courses.map((course) =>
                <CourseContent key={course.id} {...{ course }} />
            )}
        </div>
    )
}

export default Course;