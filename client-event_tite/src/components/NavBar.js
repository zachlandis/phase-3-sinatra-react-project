import React from "react";
import { Link } from "react-router-dom"
import '../index.css';

function NavBar() {

    return (
        <nav className="NavBar">
            {/* <Link to="/">Home</Link> */}
            <Link to="/events">Events</Link>
            <Link to="/new">New Event</Link>
        </nav>
    )
}


export default NavBar