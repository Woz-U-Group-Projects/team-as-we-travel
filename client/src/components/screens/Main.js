import React from 'react';
import SignIn from './SignIn';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Blogs from './Blogs';
import PostBlogs from './PostBlogs';
import AboutUs from '../AboutUs';

const Main = props =>
    <Router>
      <div>
        <Route path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/postblogs" component={PostBlogs} />
        <Route path="/aboutus" component={AboutUs} />
        
      </div>
    </Router>

export default Main;
