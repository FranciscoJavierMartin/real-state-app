import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import { StateProvider } from './store/StateProvider';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
