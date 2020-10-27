import React, {useState, useEffect} from 'react';
import './App.css';

//Pages
import Homepage from './pages/Homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header.jsx';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.jsx';

//others
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {auth} from './firebase/firebase.utils';


const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  //unsubscribeFromAuth = null;

  /*
  componentDidMount() {
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});

      console.log(user);
    });
  }
  
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  */
  
  /*
  useEffect(() => {
    auth.onAuthStateChanged(user)
    return () => {
      setCurrentUser(user);
    }
  }, [setCurrentUser]);
  */

  return (
    <Router>
      <Header currentUser/>
      <Switch>
      <Route path='/signin'>
          <SignInAndSignUpPage/>
        </Route>
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
