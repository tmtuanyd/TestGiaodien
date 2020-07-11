import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './Components/Store/Store.js'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";

ReactDOM.render(
  <Provider store={store}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <App />
      </MuiPickersUtilsProvider>

  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
