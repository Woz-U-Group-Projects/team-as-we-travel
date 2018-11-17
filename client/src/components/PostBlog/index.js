import React, { Component } from 'react';
import './style.css';

  

class PostBlog extends Component {
    constructor() {
        super();
        this.state = { user: {} };
        this.onSubmit = this.handleSubmit.bind(this);
      }
      handleSubmit(e) {
        e.preventDefault();
        var self = this;
        var date;
date = new Date();
date = date.getUTCFullYear() + '-' +
    ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
    ('00' + date.getUTCDate()).slice(-2) + ' ' + 
    ('00' + date.getUTCHours()).slice(-2) + ':' + 
    ('00' + date.getUTCMinutes()).slice(-2) + ':' + 
    ('00' + date.getUTCSeconds()).slice(-2);
console.log(date);
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
              title: self.refs.title.value,
              date: date.value
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

            
        
        <div className = "box">
             <h2>Submit blog:</h2>
             <form onSubmit={this.onSubmit}>
                                       <div className = "inputBox">
                         
                                 <input type="text" name="" required ="" ref="userName"/>
                                 <label>Username</label>

                        
                                 <input type="text" name="" required ="" ref="title"/>         
                                 <label>Title:</label>
                    </div>

                    <div className = "inputBox">
                         
                                
                                 <textarea rows="15" cols="37" type="text" required ="" placeholder="Blog text goes here" ref="blog"/>
                    </div>

                    <div className = "inputBox">
                                 <input type="submit" value="Submit"/>
                    </div>
             </form>

        </div>
        );
    }
}

export default PostBlog;