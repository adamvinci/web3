import { ProviderWrapper as OpinionContext } from "../../contexts/OpinionContext";
import { ProviderWrapper as ThemeContext } from "../../contexts/ThemeContext";
import App from "./App";

const AppLoader = () => {
    return (
        <OpinionContext >
            <ThemeContext>
                <App />
            </ThemeContext>
        </OpinionContext >
    )
}
export default AppLoader;