import React, { Component } from 'react';

import {Route, Switch, BrowserRouter, Link} from 'react-router-dom';
import {withRouter} from 'react-router';


import Home from './components/Home';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
	      <div className="container-fluid">
	        <div className="row">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route component={NotFound} />
            </Switch>
	        </div>
	      </div>
      </div>
    );
  }
}

export default withRouter(App);
