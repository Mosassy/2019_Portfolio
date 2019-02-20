import React, { Component } from "react";

export default class NavigationContainer extends Component {
    constructor() {
       super();

    }
    render() {
        return (
            <div>
                <button>Home</button>
                <button>About</button>
                <button>Content</button>
                <button>Blog</button>
                {false ? <button>AddBlog</button> : null}
            
            </div>
        )
    }
}
       