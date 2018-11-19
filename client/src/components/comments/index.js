import React, { Component } from 'react';

import './styles.css';

class Comments extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        }
    }
    componentDidMount(){
        fetch('/comments')

        
        .then(res => res.json())
       .then(comments => this.setState({comments}, () => console.log('comments fetched..', comments)));
    }
    
  render() {
    return (
      <div className="App">
        <h2>Comments:</h2>
        <ul>
            {this.state.comments.map(comments => 
                <li key={comments.id}>  {comments.comment} by {comments.userName} </li>
                )}
                
        </ul>
      </div>
    );
  }
}

export default Comments;
