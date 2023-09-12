import Display from "../Display/Display"
import Button from '../Button/Button'
import useLocalStorage from '../../hooks/useLocalStorage'

const COUNTER_KEY = "counter"

const App = () => {

    const [ counter, setCounter ] = useLocalStorage( COUNTER_KEY,0 )

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