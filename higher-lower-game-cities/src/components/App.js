import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Game from './Game';
import GameModal from './GameModal'
import history from '../history';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/game" exact component={Game}/>
              <Route path="/gamemodal" exact component={GameModal}/>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
};

export default App;
