import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './blog.css';

class Blog extends Component {
    constructor() {
        super();
        this.state = {
            blog: []
        }
    }
    componentDidMount(){
        fetch('/blog')

        
        .then(res => res.json())
       .then(blog => this.setState({blog}, () => console.log('blog fetched..', blog)));
    }
    
  render() {
    return (
      <div className="App">

       <h2>Blog Articles: </h2>
       {this.state.blog.map(blog => 
              
 <div className="blog-card" key={blog.id}>
    <div className="meta">
      <div className="photo" ></div>
      <ul className="details">
        <li className="author"><a>{blog.username}</a></li>
        <li className="date">Aug. 24, 2015</li>
        <li className="tags">
          
        </li>
      </ul>
    </div>
    <div className="description">
      <h1>{blog.title}</h1>
      <h2>{blog.id}</h2>
      
      <p className="overflow ellipsis"> {blog.blog}</p>
      <p className="read-more">
        <a >Read More</a>
      </p>
    </div>
  </div>
  
  )}


       
      </div>
    );
  }
}

export default Blog;
