import React from 'react';
import SignIn from './SignIn';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import Blogs from './Blogs';
import PostBlogs from './PostBlog';
import { Switch } from "react-router-dom";

const Main = props =>
    <Switch>
      <div>
        <Route path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/blogs" component={Blogs} />
        <Route path="/postblog" component={PostBlogs} />
      </div>
    </Switch>

export default Main;
