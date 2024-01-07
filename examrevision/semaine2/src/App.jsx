import { useState } from 'react'
import Display from './Display/Display'
import Button from './Button/Button'

const App = () => {

  const [counter, setCounter] = useState(JSON.parse(localStorage.getItem("counter")));

  const handleClick = (delta) => {
    setCounter(prevCounter => {
      const newCounter = prevCounter + delta;
      localStorage.setItem("counter", JSON.stringify(newCounter));
      return newCounter; // This value will be the new state
    });

  }
  return (

    <div>
      <Button delta={1} handleClick={handleClick} text="plus" />
      <Button delta={-1} handleClick={handleClick} text="moins" />
      <Button delta={-counter} handleClick={handleClick} text="zero" />
      <Display {...{ counter }} />
    </div>
  )
}

export default App;