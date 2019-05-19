import React from 'react';
import './themes/custom.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignIn from './containers/auth/SignIn';
import SignUp from './containers/auth/SignUp';
import Home from './containers/dashboard/Home';
import RedflagList from './containers/incidents/RedflagList';
import Incident from './containers/incidents/Incident';
import EditIncident from './containers/incidents/EditIncident';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route path='/home' component={Home} />
          <Route exact path='/redflags' component={RedflagList} />
          <Route exact path='/redflags/:id' component={Incident} />
          <Route path='/redflags/:id/edit' component={EditIncident} />
        </Switch>
      </div>    
    </BrowserRouter>
  );
}

export default App;
