import React, { Component } from 'react';
import logo from '../img/alfred-logo.jpg';

/*
*   Nav is responsible for rendering the navbar on any pages
*   we display.
*/
class Nav extends Component {

    render() {
        return (
            <nav>
                <div className="row">
                    <h1 className="brand-text">Alfred</h1>
                    <a href="#"><img width="90px" className="brand-img" src={logo} alt="" /></a>
                    <ul className="main-nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Plans</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;