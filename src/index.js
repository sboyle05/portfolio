import React from 'react';
import ReactDOM from 'react-dom'; // Modified this line
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Changed the way App is rendered
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
