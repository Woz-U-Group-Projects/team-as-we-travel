import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PostBlog from './components/PostBlog';
import NavBar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <NavBar/>
          <PostBlog/>
        </header>
      </div>
    );
  }
}

export default App;
