import React, { Component } from 'react';

import './style.css';

class NavBar extends Component {
    
        
    
  render() {
    return (
      

<div id="main">
       <nav>
         <img id ="img" src="images/awtLogo.png" width="200" height = "80"/>
         
                    
         <input type="text" placeholder="Search.."/>
         
        
         <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">Back</a></li>
           <li><a href="#">Sign-in</a></li>
         </ul>
       </nav>
   
</div>


    );
  }
};

export default NavBar;
