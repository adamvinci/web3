import React from 'react';
import ReactDOM from 'react-dom';

import { ProviderWrapper as Provider } from './contexts/Context'
import './index.css'
import App from './components/App/App';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Provider>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);