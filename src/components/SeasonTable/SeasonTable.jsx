import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from '../../svg/Loading';
import './SeasonTable.scss';

class SeasonTable extends Component {
  constructor(props){
    super(props);
    this.state= {};
  }

  componentDidMount(){
    this.getSeasonData(this.props.match.params.year);  
  }

  getSeasonData(year){
      let results = [];
      this.setState({loading: true});
      fetch('http://ergast.com/api/f1/'+year+'/results.json?limit=400&offset=0')
      .then(response => response.json())
      .then(
        function(myJson){
          let race =  myJson.MRData.RaceTable.Races;
          for(let i = 0; i < race.length; i++){
            let raceWinner = {
              name: race[i].Results[0].Driver.givenName 
                  + ' '
                  + race[i].Results[0].Driver.familyName,
              raceName: race[i].raceName,
              round: race[i].round
            };
            results.push(raceWinner);
          } 
            return results;
        }
      )
      .then(
        (results) => {
          results.sort((a,b) => a.round - b.round);
          this.setState({races: results, loading: false});
        }
      )
      .catch(error => this.setState({loading: false, error: error}));
   
  }

  setSeason = (season) => {
    this.setState({season});
  }

  render() {
    return (
      <main>
        <Link to="/" className="link">Back to homepage</Link>
        <table className="table">
          <thead>
            <tr>
              <td className="adjust">Round</td>
              <td>Champion&apos;s Name</td>
              <td>Race Name</td>
            </tr>
          </thead>
          <tbody>   
           { this.state.races && this.state.races.map(
                (rc, key) => 
                  <tr 
                    key={key} 
                    className={
                      this.props.match.params.driver === rc.name ? 'champion-row' : null
                    }
                  >
                    <td className="adjust">{rc.round}</td>
                    <td>
                      {rc.name}
                    </td>
                    <td>{rc.raceName}</td>
                  </tr>
              )
            }
          </tbody>
        </table>
        {
          this.state.error && 
            <p className="error">Error: {this.state.error.message}</p>
        } 
        {
          this.state.loading && <Loading />
        }
      </main>
    );
  }
}

SeasonTable.propTypes = {
  match: Proptypes.object
};

export default SeasonTable;
