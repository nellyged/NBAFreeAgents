import React, { Component } from 'react';
import axios from 'axios';

class HotTopics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topics: {
        freeAgents: [],
        teamNeeds: [],
        gmStories: [],
        tradeRumors: [],
      },
    };
  }
  componentDidMount() {
    axios
      .get('/api/hottopics')
      .then(responses => {
        return responses.data;
      })
      .then(responses => {
        this.setState({ topics: responses });
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    return (
      <div>
        <hr />
        <h3>Summer 2019 Free Agents</h3>
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
            {this.state.topics.freeAgents.map(player => {
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

export default HotTopics;
