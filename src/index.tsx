import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App';
import { Provider } from './store/Context';
import * as serviceWorker from './serviceWorker';
import { mainReducer } from './store/reducer';

ReactDOM.render(
  <React.StrictMode>
    <Provider initialState={{}} reducer={mainReducer}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
