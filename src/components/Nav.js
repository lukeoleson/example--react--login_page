import React, { Component } from 'react';

/*
*   Nav is responsible for rendering the navbar on any pages
*   we display.
*/
class Nav extends Component {

    render() {
        return (
            <nav>
                <div className="row">
                    <div className="brand">
                        <a href="#"><ion-icon name="barcode"></ion-icon></a>
                    </div>
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