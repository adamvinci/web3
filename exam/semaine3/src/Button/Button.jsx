const Button = ({ handleClick, text }) => <button data-type={text} style={{ width: '70px', height: '40px' }} onClick={handleClick}>{text}</button>



export default Button;