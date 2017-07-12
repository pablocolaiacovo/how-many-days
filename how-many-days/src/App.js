import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import history from './history';

import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Callback from './Components/Auth/Callback';

import Auth from './Utils/AuthService';
const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <div className='ui inverted vertical masthead center aligned segment'>
          <Nav auth={auth} />

          <Switch>
            <Route path='/' exact render={(props) => <Home auth={auth} {...props} />} />
            <Route path="/callback" render={(props) => {
              handleAuthentication(props);
              return <Callback {...props} />
            }} />
            <Route render={function () {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
