const Button = ({ delta, text, handleClick }) => {
    const handle = (e) => {
        console.log(e)
        /*const deltaAttribute = e.target.dataset.delta;
        const delta = parseInt(deltaAttribute);*/

        handleClick(e)
    }
    return (
        <div>
            <button data-delta={delta} style={{ width: '400px', height: '50px', marginBottom: '50px' }} onClick={() => handle(delta)}>{text}</button>
        </div>
    )
}

export default Button;