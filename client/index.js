import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FreeAgents from './FreeAgents';
import Takes from './Takes';
//this script is being plugged into the index.html file that we server and running javascirpt to build the elements using data grabbed from our backend api ... Full stack app :)
const root = document.querySelector('#app');

// //I'll create the first component which will render the tabs
class Section extends Component {
  constructor() {
    super();
    this.state = {
      tabs: [],
      selected: <FreeAgents />,
    };
    //If I setup with presets [react,env,stage-2] I can make mehtods using the fat arrows
    //Look up all benefits I get with this setup
  }
  componentDidMount() {
    axios
      .get('/api/sections')
      .then(responses => {
        return responses.data;
      })
      .then(responses => {
        console.log(responses);
        this.setState({ tabs: responses });
      })
      .catch(e => {
        console.log(e);
      });
  }
  onSelect = id => {
    //Based on the tab selected we will render the proper Component
    if (id === 1) {
      this.setState({ selected: <FreeAgents /> });
    }
    if (id === 2) {
      this.setState({ selected: <Takes /> });
    }
    if (id === 3) {
      this.setState({ selected: <Analytics /> });
    }
  };
  render() {
    return (
      <div className="container">
        <h1>NBA Hype</h1>
        <ul className="nav nav-tabs">
          {this.state.tabs.map(section => {
            return (
              <li className="nav-item" key={section.id}>
                <button
                  className="nav-link"
                  onClick={() => {
                    this.onSelect(section.id);
                  }}
                >
                  {section.name}
                </button>
              </li>
            );
          })}
        </ul>
        {/* Here I will do the logic to see which component should be displayed*/}
        {this.state.selected}
      </div>
    );
  }
}

ReactDOM.render(<Section />, root);
