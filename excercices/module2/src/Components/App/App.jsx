import { useState } from 'react'
import Display from "../Display/Display"
import Button from '../Button/Button'

const App = () => {
    const [ counter, setCounter ] = useState(0)
    const changeCount = (delta) => {
        setCounter(counter + delta)
      }  

  
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