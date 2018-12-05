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
            <p className="text-faded mb-5" >Join us and other travelers from around the world!</p>
            <p className="text-faded mb-10">Below are the following technologies used to build this web app.</p>
          </div>
        </div>
      </div>



<div className="row">
  <div className="column">
    <img src="images\react.png" alt="img"/>
  </div>
  <div className="column">
    <img src="images\js.png" alt="img" />
  </div>
  <div className="column">
    <img src="images\html5.png" alt="img" />
  </div>
</div>


     

    </header>
   
</div>
               
    );
  }
};

 export default Home;
