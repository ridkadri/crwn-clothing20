import React from 'react';
import './App.css';

//Pages
import Homepage from './pages/Homepage/homepage';

//others
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const HatsPage = () => (
  <div>
  <h1>Hats Page</h1>
  </div>
);

function App() {
  return (
    <Router>
      <Switch>
      <Route path='/hats'>
          <HatsPage/>
        </Route>
        <Route path='/'>
          <Homepage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
