import React, { Component } from 'react';
import ChampionsTable from './ChampionsTable/ChampionsTable.jsx';
import SeasonTable from './SeasonTable/SeasonTable.jsx';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path="/" render={(props)=> <ChampionsTable {...props} />}/>
            <Route exact path="/season" render={()=><SeasonTable />}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {

};

export default App;
