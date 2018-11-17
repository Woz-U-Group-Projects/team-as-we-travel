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
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify({
              userName: self.refs.userName.value,
              blog: self.refs.blog.value,
              title: self.refs.title.value
            })
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
                    <br/    >
                        <textarea rows="15" cols="50" type="text" placeholder="Blog text goes here" ref="blog"/>
                </div>
                <div>
                <input type="submit" value="Submit"/>
                </div>
            </form>
        );
    }
}

export default PostBlog;