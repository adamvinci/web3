import { ProviderWrapper as CountProviderWrapper } from "../../contexts/countersContext";
import App from "./App.jsx";

const AppLoader = () => {
    return (
        <CountProviderWrapper >
            <App />

        </CountProviderWrapper >
    )
}
export default AppLoader
