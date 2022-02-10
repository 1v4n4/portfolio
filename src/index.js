import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
import './CSS/index.css';
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root'),
);
