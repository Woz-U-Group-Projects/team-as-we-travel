import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./styles.css";

class OneBlog extends Component {
  constructor() {
    super();
    this.state = {
      blog: []
    };
  }
  componentDidMount() {
    fetch("/blog/:id")
      .then(res =>  res.json())
      .then(blog =>
        this.setState({ blog }, () => console.log("blog fetched..", blog))
      
        )
      .catch(err => {
        console.log('The error is:', err);
      });
  }

  render() {
    return (
      
      <div className="App">
        <h2>Blog Articles: </h2>
        {this.state.blog.map(blog=> (
          <div>
            <h1 href="/blog">{blog.userName}</h1>
            <h1 className="date">{blog.Date}</h1>
            <h1>{blog.Title}</h1>
            <h1>{blog.Id}</h1>
            <h1> {blog.Blog}</h1>
          </div>
        ))}
      </div>
      
    );
  }
}

export default OneBlog;
