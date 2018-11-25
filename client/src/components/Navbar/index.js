import React, { Component } from "react";
import "./style.css";

class NavBar extends Component {
  render() {
    return (
      <section className="sticky">
        <div id="main">
          <nav>
            <img
              id="img"
              src="images/awtLogo.png"
              alt="Logo"
              width="200"
              height="80"
            />

            <input type="text" placeholder="Search.." />

            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/postblogs">Post a Blog</a>
              </li>
              <li>
                <a href="/blogs">Blogs</a>
              </li>
              <li>
                <a href="/">Back</a>
              </li>
              <li>
                <a href="/aboutus">About Us</a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    );
  }
}

export default NavBar;
