import React from 'react';
import './themes/custom.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './containers/auth/SignIn';
import SignUp from './containers/auth/SignUp';
import Home from './containers/dashboard/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/home' component={Home} />
        </Switch>
      </div>    
    </BrowserRouter>
  );
}

export default App;
