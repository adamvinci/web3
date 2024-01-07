import logo from '../assets/LOGO HE VINCI.png'
const Header = ({ name }) => {

    return (
        <div>
            <img src={logo} alt="" />
            <h1>{name}</h1>;
        </div>

    )
}
export default Header