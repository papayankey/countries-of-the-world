import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppBar } from './components';
import { Countries, Country } from './pages';

function App() {
  return (
    <Router>
      <AppBar />
      <Switch>
        <Route path="/country" component={Country} />
        <Route path="/countries" component={Countries} />
        <Route path="/" component={Countries} />
      </Switch>
    </Router>
  );
}

export default App;
