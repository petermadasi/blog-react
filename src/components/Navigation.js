import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navigation extends Component{
    render(){
        return(
            <div className="container">
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                    {/* LINK is imported from react-router-dom
                    Each link is the link in hte top navgation bar*/}
                    <Link to="/" className="navbar-brand">Blog</Link>
                    <div className="collpase navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            
                            <li className="navbar-item">
                                <Link to="/users" className="nav-link">User(Add Users)</Link>
                            </li>

                            <li className="navbar-item">
                                <Link to="/blogs" className="nav-link">All Blogs</Link>
                            </li>

                            <li className="navbar-item">
                                <Link to="/createblog" className="nav-link">Create Blog</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Navigation