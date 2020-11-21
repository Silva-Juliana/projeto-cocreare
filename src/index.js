import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Results from './components/Results';

ReactDOM.render(
  <React.StrictMode>
     <App />
     <Results/>
  </React.StrictMode>,
  document.getElementById('root')
);
