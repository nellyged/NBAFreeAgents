import React, { Component } from 'react';
import axios from 'axios';

class Takes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: [],
    };
  }
  componentDidMount() {
    axios
      .get('/api/takes')
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
        <h3>Latest Hot Takes</h3>
        <table>
          <tbody>
            <tr>
              <th id="title">Title</th>
              <th id="details">Details</th>
              <th id="user">User</th>
            </tr>
            {this.state.stories.map(story => {
              return (
                <tr key={story.id}>
                  <td headers="title">{story.title}</td>
                  <td headers="details">{story.description}</td>
                  <td headers="user">{story.user.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Takes;
