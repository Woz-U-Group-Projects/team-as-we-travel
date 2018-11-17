import React, { Component } from 'react';

import './App.css';

import PostBlog from './components/PostBlog';

import Blog from "./components/blog/blog";
import Background from './components/PostBlog/background.jpg';

var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: "url(" + { Background } + ")"
  };


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" style ={ { backgroundImage: "url('https://images.pexels.com/photos/1089168/pexels-photo-1089168.jpeg')", backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', } }>
        
        
          <PostBlog/>
        </header>

        <Blog/>
        
      </div>
    )

  }
}

export default App;
