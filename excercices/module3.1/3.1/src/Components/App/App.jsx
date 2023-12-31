import ButtonFeedback from "../ButtonFeedback/ButtonFeedback"
import DisplayStatistic from "../DisplayStatisic/DisplayStatisic"
import { useState } from "react"
import Loading from "../Loading/Loading"


const App = () => {

    const [ clicks, setClicks ] = useState({good :0,bad:0,neutral:0})
    const [ loading, setLoading ] = useState(true)

    const handlerGoodClicks = ()=> setClicks({...clicks,good:clicks.good+1})
    const handlerBadClicks = ()=> setClicks({...clicks,bad:clicks.bad+1})
    const handlerNeutralClicks = ()=> setClicks({...clicks,neutral:clicks.neutral+1})
    setTimeout(() => setLoading(false), 3000);

  
    return (
      <div id="cmp">    
        {loading ? (<Loading />):(
         <>
        <h1>Give feedback</h1>
        <ButtonFeedback handler={handlerGoodClicks} text = 'good'/>
        <ButtonFeedback  handler={handlerNeutralClicks} text = 'neutral'/>
        <ButtonFeedback  handler={handlerBadClicks} text = 'bad'/>
        <DisplayStatistic clicks={clicks}/>
        </>
      
    )}
      </div>    
    );
    

  }
export default App