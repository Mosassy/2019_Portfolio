import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavigationContainer extends Component {
    constructor() {
       super();

    }
    render() {
        return (
            <div>
                <NavLink exact to="/">Home</NavLink>

                <NavLink  to="/about-me" activeClassName="nav-link-active" >About Me</NavLink>
                <NavLink  to="/blog" activeClassName="nav-link-active" >Blog</NavLink>
                <NavLink  to="/contact" activeClassName="nav-link-active" >Contact</NavLink>

                {false ? <button>AddBlog</button> : null}
            
            </div>
        )
    }
}
       