import DisplayStatisicCmp from "./DisplayStatisticCmp"

const Display = ({clicks}) => {

      const all = clicks.bad + clicks.good + clicks.neutral
      if(!all ) return <p>Pas de vote</p>
      const positivefeedback = (clicks.good / all)*100
return   (  
<div>
      <DisplayStatisicCmp text='Good' number={clicks.good}/>
      <DisplayStatisicCmp text='Neutral' number={clicks.neutral}/>
      <DisplayStatisicCmp text='Bad' number={clicks.bad}/>
      <DisplayStatisicCmp text='ALL' number={all}/>
      <DisplayStatisicCmp text='Positive' number={positivefeedback}/>
</div>)
}
  


export default Display