import React, { Component } from 'react';

import './App.css';

import PostBlog from './components/PostBlog';
import NavBar from "./components/Navbar";
import Blog from "./components/blog/blog";
import Comments from './components/comments/comments';
import logo from "./as-we-travel logo.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        img src={logo} alt="team logo"/> 
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
