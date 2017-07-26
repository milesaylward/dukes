import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';
import App from './App';


import registerServiceWorker from './registerServiceWorker';
const target = document.getElementById('root');
injectTapEventPlugin();

ReactDOM.render(
  <BrowserRouter>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </BrowserRouter>
  ,target
);
registerServiceWorker();
