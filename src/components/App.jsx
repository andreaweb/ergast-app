import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {champions: []};
    this.years = [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015];
  }

  componentDidMount(){
    this.getWinnersData();  
  }

  getWinnersData(){
    let championsArr = [];
    this.years.forEach(
      year => fetch('http://ergast.com/api/f1/'+year+'/driverStandings/1.json')
      .then(response => response.json())
      .then( myJson => {
          let standingsList = myJson.MRData.StandingsTable.StandingsLists[0];
          let yearWinner = {
              year: year, 
              name: standingsList.DriverStandings[0].Driver.givenName
                + ' '
                + standingsList.DriverStandings[0].Driver.familyName,
              racesWon: standingsList.DriverStandings[0].wins,
              constructorName: standingsList.DriverStandings[0].Constructors[0].name
          };
          championsArr.push(yearWinner);
          if(championsArr.length === 11){
            championsArr.sort((a,b) => a.year - b.year);
            this.setChampions(championsArr);
          }
        }
      )
      .catch(error => console.error(error))   
    );
  }

  setChampions = (champions) => {
    this.setState({champions});
  }

  render() {
    return (
        <div className="container">
        { this.state.champions[10] && this.state.champions[4].name}
        </div>
    );
  }
}

App.propTypes = {

};

export default App;
