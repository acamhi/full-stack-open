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
      <h1>{course}</h1>
      <Header titulo = {course}/>
      <Content parte = {part1} ejercicios = {exercises1}/>
      <Content parte = {part2} ejercicios = {exercises2}/>
      <Content parte = {part3} ejercicios = {exercises3}/>
      <Total p1 = {exercises1} p2 = {exercises2} p3 = {exercises3}/>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

const Header = (prop) => <h1>{prop.titulo}</h1>

const Content = (prop) => <p>{prop.parte} {prop.ejercicios}</p>

const Total = (prop) => <p>Number of exercises: {prop.p1 + prop.p2 + prop.p3}</p>

export default App