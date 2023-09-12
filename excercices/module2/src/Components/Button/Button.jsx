const Button = ({changeCount,text,delta})=>{
  
    return <button onClick={()=>changeCount(delta)} >
    {text}
  </button>
}



export default Button