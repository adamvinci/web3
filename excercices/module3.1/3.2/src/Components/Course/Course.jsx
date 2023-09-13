const Course = (props) => {
    //si on recoit course = {course} alors on destructure props const {course} = props mais ici on a recu {...course}
    const { course } = props

    /*  const {parts} = course
     
      let total = 0;
      parts.forEach(element => {
          total += element.exercises
      });*/


    return (
        <div>
            {course.map((c) => {
                const total = c.parts.reduce((cmpt, elem) => cmpt + elem.exercises, 0);
                console.log(c.parts)
                return (
                    <div key={c.id}>
                        <h1>{c.name}</h1>
                        {c.parts.map(part => (
                            <li key={part.id}>
                                {part.name}
                            </li>

                        ))}
                        <h3>{total}</h3>
                    </div>
                )
            })}


        </div>

    )
}
export default Course