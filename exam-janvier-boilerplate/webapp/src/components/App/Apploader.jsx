// @ts-nocheck

import ProviderWrapper from 'contexts/Context'
import App from 'components/App/App';
const AppLoader = () => {
    return (
        <ProviderWrapper>
            <App />
        </ProviderWrapper>
    );
};

export default AppLoader;
