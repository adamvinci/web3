import ButtonFeedback from "../ButtonFeedback/ButtonFeedback"
import DisplayStatistic from "../DisplayStatisic/DisplayStatisic"
import { useState } from "react"


const App = () => {

    const [ clicks, setClicks ] = useState({good :0,bad:0,neutral:0})

    const handlerGoodClicks = ()=> setClicks({...clicks,good:clicks.good+1})
    const handlerBadClicks = ()=> setClicks({...clicks,bad:clicks.bad+1})
    const handlerNeutralClicks = ()=> setClicks({...clicks,neutral:clicks.neutral+1})

  
    return (
      <div id="cmp">
  
        <h1>Give feedback</h1>
        <ButtonFeedback handler={handlerGoodClicks} text = 'good'/>
        <ButtonFeedback  handler={handlerNeutralClicks} text = 'neutral'/>
        <ButtonFeedback  handler={handlerBadClicks} text = 'bad'/>
        <DisplayStatistic clicks={clicks}/>
      </div>
    )
  }
export default App