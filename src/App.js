import React from 'react';
import './themes/custom.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './containers/auth/SignIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/signin' component={SignIn} />
        </Switch>
      </div>    
    </BrowserRouter>
  );
}

export default App;
