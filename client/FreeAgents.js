import React, { Component } from 'react';
import axios from 'axios';

class FreeAgents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      freeAgents: [],
    };
  }
  componentDidMount() {
    axios
      .get('/api/freeagents')
      .then(responses => {
        return responses.data;
      })
      .then(responses => {
        this.setState({ freeAgents: responses });
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    return (
      <div>
        <hr />
        <h3>Players To Watch</h3>
        <table>
          <tbody>
            <tr>
              <th id="firstName">First Name</th>
              <th id="lastName">Last Name</th>
              <th id="position">Position</th>
              <th id="height">Height</th>
              <th id="weight">Weight</th>
              <th id="age">Age</th>
              <th id="college">College</th>
              <th id="jerseyNumber">Jersey Number</th>
            </tr>
            {this.state.freeAgents.map(player => {
              return (
                <tr key={player.id}>
                  <td headers="firstName">{player.firstName}</td>
                  <td headers="lastName">{player.lastName}</td>
                  <td headers="position">{player.position}</td>
                  <td headers="height">{player.height}</td>
                  <td headers="weight">{player.weight}</td>
                  <td headers="age">{player.age}</td>
                  <td headers="college">{player.college}</td>
                  <td headers="jerseyNumber">{player.jerseyNumber}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default FreeAgents;
