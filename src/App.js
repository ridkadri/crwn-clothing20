import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';

import './App.css';

//Pages
import Homepage from './pages/Homepage/homepage';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header.jsx';
import SignInAndSignUpPage from './pages/sign-in-sign-up/sign-in-sign-up.jsx';

//others
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            });
        })
      } 
        setCurrentUser(userAuth);
    });
    return () => {
    unsubscribeFromAuth();
    }
  },[currentUser]);
  

  return (
    <Router>
      <Header/>
      <Switch>
      <Route
        path='/signin' 
        render={() =>
          currentUser ? (
        <Redirect to ='/'/>
      ) : (
        <SignInAndSignUpPage/>
      )
      }>
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

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
