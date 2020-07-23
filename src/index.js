import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeComponent } from './components';

ReactDOM.render(
  <React.StrictMode>
    <ThemeComponent>
      <App />
    </ThemeComponent>
  </React.StrictMode>,
  document.getElementById('root')
);
