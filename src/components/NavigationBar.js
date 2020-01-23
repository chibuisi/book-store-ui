import React, {Component} from 'react';

import {Navbar, Nav} from "react-bootstrap";
import {Link} from 'react-router-dom'

class NavigationBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to={""} className="navbar-brand">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Book_icon_1.png" height={25} alt={"logo"}/> Book Store
                </Link>
                <Link to={"add"} className="nav-link">
                    Add Book
                </Link>
                <Link to={"list"} className="nav-link">
                    List Book
                </Link>
                <Link to={"contacts"} className="nav-link">
                    Contact Us
                </Link>
                <Link to={"services"} className="nav-link">
                    Our Services
                </Link>
            </Navbar>
        );
    }
}

export default NavigationBar;