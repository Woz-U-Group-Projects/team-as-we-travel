import React, { Component } from 'react';
import NavBar from '../Navbar';
import Footer from '../footer/footer';
import PostBlog from '../PostBlog';
import Blog from '../blog/blog';


class Home extends Component {
      render() {
        return (    
          <div className="App">
           <NavBar style ={{ position: 'fixed',top: 0}}/>  
            <header className="App-header" style ={ { backgroundImage: "url('https://images.pexels.com/photos/1089168/pexels-photo-1089168.jpeg')", backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat', } }>             
              <PostBlog/>
            </header>
            <Blog/>
            <Footer/>        
          </div>
        )
    
      }
    }


export default Home;
