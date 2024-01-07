import { useContext } from "react"
import Button from "../Button/Button"
import { Context as CounterContext } from "../../Context/CounterContext"
const App = () => {
  const { counter, setCounter } = useContext(CounterContext)
  return (
    <div>
      <p> Good : {counter.good} <Button changeCounter={() => setCounter({ ...counter, good: counter.good + 1 })} text="increase good" /></p>
      <p>Ok : {counter.ok} <Button changeCounter={() => setCounter({ ...counter, ok: counter.ok + 1 })} text="increase Ok" /> </p>
      <p>Bad : {counter.bad} <Button changeCounter={() => setCounter({ ...counter, bad: counter.bad + 1 })} text="increase Bad" /> </p>
      <Button changeCounter={() => setCounter({ bad: 0, good: 0, ok: 0 })} text="reset score" />
    </div>
  )
}

export default App