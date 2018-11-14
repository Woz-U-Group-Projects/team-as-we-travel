import React, { Component } from 'react';

import './blog.css';

class Blog extends Component {
    constructor() {
        super();
        this.state = {
            blog: []
        }
    }
    componentDidMount(){
        fetch('/api/blog')
        .then(res => res.json())
        .then(blog => this.setState({blog}, () => console.log('blog fetched..', blog)));
    }
  render() {
    return (
      <div className="App">
        <h2>blog:</h2>
        <ul>
            {this.state.blog.map(blog => 
                <li key={blog.id}>{blog.title} </li>
                )}
        </ul>
      </div>
    );
  }
}

export default Blog;
