import React, { Component } from 'react';
import './App.css';
import NavBar from '../Navbar';
import Main from '../screens/Main';
import Footer from '../footer/footer';

class App extends Component {

  render() {
    return (
      <div>
      <div>
        <NavBar style={{ position: 'fixed', top: 0 }} />
        </div>
        <div>
        <Main/>
        </div>
        <div>
        <Footer />
      </div>
      </div>
    );
  }
}

export default App;