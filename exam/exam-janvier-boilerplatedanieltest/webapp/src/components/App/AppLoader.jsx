import { ProviderWrapper as MyProviderWrapper } from "contexts/Context";
import { BrowserRouter as Router } from 'react-router-dom';
import App from "components/App/App.jsx";

const AppLoader= () => {
  return (
    <MyProviderWrapper >
        <Router>
            <App/>
        </Router>
      </MyProviderWrapper >
  )
}
export default AppLoader;