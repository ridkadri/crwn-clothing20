import React from 'react';
import './App.css';

//Pages
import Homepage from './pages/Homepage/homepage';
import ShopPage from './pages/shop/shop';

//others
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
      <Route path='/shop'>
          <ShopPage/>
        </Route>
        <Route path='/'>
          <Homepage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
