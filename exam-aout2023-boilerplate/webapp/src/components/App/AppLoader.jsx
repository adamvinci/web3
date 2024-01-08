import { ProviderWrapper as DataProvider } from 'contexts/dataContext';
import App from 'components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';


const AppLoader = () => {
    return (
        <DataProvider>
            <Router>
                <App />
            </Router>
        </DataProvider>
    );
};

export default AppLoader;
