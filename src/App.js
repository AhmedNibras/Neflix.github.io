import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen'
import Login from './Login';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { auth } from './firebase';


function App() {
  const user = null;
  useEffect(() => { 
      const unsubscribe = auth.onAuthStateChanged((userAuth) => {
        if(userAuth) {
          // Logged in
          console.log(userAuth)
        }
        else {
          // Logged out
        }
      });

      return unsubscribe;
  }, []);
  return (
    <div className="app">

      <Router>
      {!user ? ( 
        <Login />
      ): ( 
        <Switch>  
          <Route path="/">
            <HomeScreen />
          </Route>
        </Switch>
      )}
        
    </Router>

    </div>
  );
}

export default App;
