const Button = ({changeCount,text,delta})=>{
  
    return <button onClick={()=>changeCount(delta)} data-delta={delta}>
    {text}
  </button>
}



export default Button