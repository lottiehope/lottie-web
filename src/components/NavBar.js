import React, { Component } from 'react';
import '../styles/NavBar.css';

class NavBar extends Component {
    render () {
        return (
            <div className="Navbar">
                <div className="Navbar__button"><a className="Navbar__link" href="/">Home</a></div>
                <div className="Navbar__button"><a className="Navbar__link" href="/about">About</a></div>
                <div className="Navbar__button"><a className="Navbar__link" href="/animals">Animals</a></div>
                <div className="Navbar__button"><a className="Navbar__link" href="/contact">Contact</a></div>
            </div>
        );
    }

}

export default NavBar;