import React, { Component } from 'react';
import NavBar from '../Navbar';
import Footer from '../footer/footer';


class SignIn extends Component {
      render() {
        return (    
          <div className="App">
           <NavBar style ={{ position: 'fixed',top: 0}}/>  
            <header className="App-header" style ={ { backgroundImage: "url('https://images.pexels.com/photos/1089168/pexels-photo-1089168.jpeg')", backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', } }>             
            </header>
            <input type='text' placeholder="Username"></input>
            <input type='text' placeholder='password'></input>
            <Footer/>        
          </div>
        )
    
      }
    }


export default SignIn;
