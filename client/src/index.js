import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SnackbarProvider } from 'notistack';


ReactDOM.render(
  <SnackbarProvider>
    {/* <React.StrictMode> */}

    <App />

    {/* </React.StrictMode> */}
  </SnackbarProvider>,
  document.getElementById('root')
);

