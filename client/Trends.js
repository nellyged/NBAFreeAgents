import React, { Component } from 'react';
import axios from 'axios';

class Trends extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
    };
  }
  componentDidMount() {
    axios
      .get('/api/trends')
      .then(responses => {
        return responses.data;
      })
      .then(responses => {
        this.setState({ stories: responses });
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    return (
      <div>
        <hr />
        <h3>Hot StoryLines</h3>
        <table>
          <tbody>
            <tr>
              <th id="title">Title</th>
              <th id="details">Details</th>
              <th id="player">Player</th>
            </tr>
            {this.state.stories.map(story => {
              return (
                <tr key={story.id}>
                  <td headers="title">{story.title}</td>
                  <td headers="details">{story.description}</td>
                  <td headers="player">
                    {story.player.firstName + ' ' + story.player.lastName}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Trends;
