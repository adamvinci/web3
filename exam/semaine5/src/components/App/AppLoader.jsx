import { ProviderWrapper as LanguageProviderWrapper } from "../../Context/CounterContext";
import App from "./App";

const AppLoader = () => {
    return (
        <LanguageProviderWrapper >
            <App />

        </LanguageProviderWrapper >
    )
}

export default AppLoader;