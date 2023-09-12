import { useState } from 'react'
import Display from "../Display/Display"
import Button from '../Button/Button'

const App = () => {
    const counterLocal = JSON.parse(localStorage.getItem("counter"))

    const [ counter, setCounter ] = useState(counterLocal ? counterLocal : 0)
    localStorage.setItem("counter", JSON.stringify(counter))
    const changeCount = (delta) => setCounter(counter + delta) 

  
    return (
      <div id="cmp">
  
        <Display counter={counter}/>
        <Button delta={+1} changeCount={changeCount} text = 'plus'/>
        <Button delta={-counter} changeCount={changeCount} text = 'zero'/>
        <Button delta={-1} changeCount={changeCount} text = 'moins'/>
        
      </div>
    )
  }
export default App