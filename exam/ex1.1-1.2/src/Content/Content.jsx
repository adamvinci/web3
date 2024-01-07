import Part from "../Part/Part"
const Content = ({ part1, exercises1, part2, exercises2, part3, exercises3 }) => {
    return (
        <div>
            <Part part={part1} name={exercises1}></Part>
            <Part part={part2} name={exercises2}></Part>
            <Part part={part3} name={exercises3}></Part>
        </div>
    )
}
export default Content