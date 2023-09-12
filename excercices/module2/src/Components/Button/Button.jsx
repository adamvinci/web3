const Button = ({changeCount,text,delta})=>{
    const handleClick =(e)=>{
        const deltaButton = e.target.dataset.delta
        const deltaInt = parseInt(deltaButton)
        changeCount(deltaInt)
    }
    return <button onClick={handleClick} data-delta={delta}>
    {text}
  </button>
}



export default Button