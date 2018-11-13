import React, { Component } from 'react';

import './members.css';

class Members extends Component {
    constructor() {
        super();
        this.state = {
            members: []
        }
    }
    componentDidMount(){
        fetch('/api/members')
        .then(res => res.json())
        .then(members => this.setState({members}, () => console.log('Members fetched..', members)));
    }
  render() {
    return (
      <div className="App">
        <h2>Members:</h2>
        <ul>
            {this.state.members.map(members => 
                <li key={members.id}>{members.firstName} </li>
                )}
        </ul>
      </div>
    );
  }
}

export default Members;
