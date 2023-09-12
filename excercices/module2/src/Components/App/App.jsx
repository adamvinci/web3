import { useState } from 'react'
import Display from "../Display/Display"
import Button from '../Button/Button'

const App = () => {
    const [ counter, setCounter ] = useState(0)
  
    const setToZero = () => setCounter(0)
  
    return (
      <div id="cmp">
  
        <Display counter={counter}/>
        <Button handleClick = {()=>setCounter(counter + 1)} text = 'plus'/>
        <Button handleClick = {setToZero} text = 'zero'/>
        <Button handleClick = {()=>setCounter(counter - 1)} text = 'moins'/>
        
      </div>
    )
  }
export default App