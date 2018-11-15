import React, { Component } from 'react';

import './App.css';

import PostBlog from './components/PostBlog';
import NavBar from "./components/Navbar";
import Blog from "./components/blog/blog";
import Comments from './components/comments/comments';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <NavBar/>
          <PostBlog/>
        </header>

        <Blog/>
        <Comments/>
      </div>
    );
  }
}

export default App;
