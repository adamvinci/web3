import { useContext } from "react"
import { Context as theme } from "../../contexts/ThemeContext"
const Footer = () => {
    const { changeTheme } = useContext(theme)
    return (
        <div>
            <h2>Choose Theme:</h2>
            <select value={theme} onChange={(e) => changeTheme(e.target.value)}>
                <option value="">--Please choose an option--</option>
                <option value="white">White</option>
                <option value="black">Black</option>
            </select>
        </div>
    );
}

export default Footer