import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return ( 
            <header>
                <button>
                    Home
                </button>
                <button>
                    Back
                </button>
                <input label='search' type='text' placeholder= "Search"/>
                <button>
                    Sign In
                </button>          
            </header>
         );
    }
}
 
export default NavBar;