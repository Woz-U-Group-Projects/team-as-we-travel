import React, { Component } from 'react';

class PostBlog extends Component {

    render() {
        return (
            <form>
                <div>
                    <label>
                        Username:
                </label>
                    <input></input>
                </div>
                <div>
                    <label>
                        Blog:
                </label>
                    <textarea rows="15" cols="50"></textarea>
                </div>
                <div>
                    <button>Post</button>
                </div>
            </form>
        );
    }
}

export default PostBlog;