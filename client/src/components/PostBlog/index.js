import React, { Component } from 'react';

class PostBlog extends Component {
    constructor() {
        super();
        this.state = { user: {} };
        this.onSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(e) {
        e.preventDefault();
        var self = this;
        // On submit of the form, send a POST request with the data to the server.
        fetch('/blogPost', { 
            method: 'POST',
            data: {
              userName: self.refs.userName,
              blog: self.refs.blog,
              title: self.refs.title
            }
          })
          .then(function(response) {
            return response.json()
          }).then(function(body) {
            console.log(body);
          });
      }
    render() {
        return (

            
        
        
            <form onSubmit={this.onSubmit}>
                <div>
                    <label>Username: </label>
                            <input type="text" placeholder="Username" ref="userName"/>
                             
                                <br/>

                    <label>Title: </label>
                            <input type="text" placeholder="Blog Title" ref="title"/>         

                </div>

                <div>
                    <label>Blog: </label>
                        <textarea rows="15" cols="50" type="text" placeholder="Blog text goes here" ref="blog"/>
                </div>
                <div>
                    <button>Post</button>
                </div>
            </form>
        );
    }
}

export default PostBlog;