import React, { Component } from 'react';
import './home.css';



class Home extends Component {
    render() {
     
      return (
        <div className="home">
            <header className="masthead text-center text-white d-flex">
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h1 className="text-uppercase">
              <strong>Welcome to As We Travel!</strong>
            </h1>
            <hr/>
         </div>
          <div className="col-lg-8 mx-auto">
            <p className="text-faded mb-5" >This is our super awesome blog app! This has been built with loads of awesome</p>
            <p className="text-faded mb-10">technology. Below is some of the technology we have used in our coding!</p>
          </div>
        </div>
      </div>
    </header>
               
      </div>
    );
  }
};

 export default Home;
