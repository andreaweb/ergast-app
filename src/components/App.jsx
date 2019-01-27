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
            <Route exact path="/" render={()=> <ChampionsTable />}/>
            <Route exact path="/season/:year/:driver" render={(props)=><SeasonTable {...props}/>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

App.propTypes = {

};

export default App;
