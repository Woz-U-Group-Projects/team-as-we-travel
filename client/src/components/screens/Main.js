import React from 'react';
import SignIn from './SignIn';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Blogs from './Blogs';
import PostBlogs from './PostBlogs';
import { Switch } from "react-router-dom";

const Main = props =>
    <Router>
      <div>
        <Route path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/postblogs" component={PostBlogs} />
      </div>
    </Router>

export default Main;
