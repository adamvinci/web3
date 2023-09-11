import logoHe from './LOGO HE VINCI.png'

const Header = (props)=>{
    return (
      <div>
      <a href="https://e-vinci.github.io/web3/modules/1"><img src = {logoHe}></img></a>
      <h1>{props.name}</h1>
      </div>
 
    )
    }

export default Header