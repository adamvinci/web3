import App from './App'
import {
    ApolloClient,
    ApolloProvider,
    InMemoryCache,
} from '@apollo/client'
import { ProviderWrapper as DataProvider } from '../contexts/dataContext';
import { BrowserRouter as Router } from 'react-router-dom';



const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache(),

})

const AppLoader = () => {
    return (
        <ApolloProvider client={client}>
            <DataProvider>
                <Router> <App /> </Router>
            </DataProvider>
        </ApolloProvider>
    );
};

export default AppLoader;
