import React, { Component } from "react";
import "./styles.css";

//import axios from 'react';

class PostBlog extends Component {
  constructor() {
    super();
    this.state = { blogs: {} };
    this.onSubmit = this.handleSubmit.bind(this);
  }

  state = { selectedFile: null };

  fileChangedHandler = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  uploadHandler = () => {
    // const formData = new FormData()
    // formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
    // axios.post('/file-upload', formData)
    console.log(this.state.selectedFile);
  };

  handleSubmit(e) {
    e.preventDefault();
    var self = this;

    // On submit of the form, send a POST request with the data to the server.
    fetch("/blogPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        userName: self.refs.userName.value,
        blog: self.refs.blog.value,
        title: self.refs.title.value
      })
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(body) {
        console.log(body);
      });
  }

  // deleteHandler(i, e) {
  //   e.preventDefault();
  //   this.props.onDelete(this.props.blogPosts[i].id);

  //   onDelete(id);
  //   {
  //     deleteBlogPost(id)
  //       .then(data => {
  //         let blogPosts = this.state.blogPosts.filter(post => {
  //           return id !== post.id;
  //         });

  //         this.setState(state => {
  //           state.blogPosts = blogPosts;
  //           return state;
  //         });
  //       })
  //       .catch(err => {
  //         console.error("err", err);
  //       });
  //   }
  // }

  render() {
     return (
       <div className="box">
         <h2>Submit Blog</h2>
         <form onSubmit={this.onSubmit}>
           <div className="inputBox">
             <label>Username: </label>
             <input type="text" name="" required="" ref="userName" />

             <label>Title:</label>
             <input type="text" name="" required="" ref="title" />
           </div>

           <div className="inputBox">
             <textarea
               rows="15"
               cols="37"
               type="text"
               required=""
               placeholder="Blog text goes here"
               ref="blog"
             />
           </div>

           <div className="inputBox">
             <input type="file" onChange={this.fileChangedHandler} />

             <input type="submit" value="Submit" onClick={this.uploadHandler} />
           </div>
         </form>

         </div>
     );
   }
}

export default PostBlog;
