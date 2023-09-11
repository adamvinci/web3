const Header = (props)=>{
return (
  <h1>{props.name}</h1>
)
}
const Part = (props)=>{
  console.log(props)
  return(

  <p>{props.props.part} {props.props.exercice}</p>
  )
}
const Content = (props)=> {
return(
  <Part props={props}/>
)
}
const Total = (props)=> {
  return(
    <p>Number of exercises {props.cmpt}</p>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name = {course} />
      <Content part={part1} exercice = {exercises1} />
      <Content part={part2} exercice = {exercises2} />
      <Content part={part3} exercice = {exercises3} />
      <Total cmpt={exercises1 + exercises2 + exercises3}/>

    </div>
  )
}

export default App