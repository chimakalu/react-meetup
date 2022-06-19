import React from "react";
import { Link } from "react-router-dom";
import './Navigation.css';

const Navlinks = () => {
    return (
        <header className="page-mainnav">
            <div className="pagename">React Meetups</div>
            <nav className="pages">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/new-meetup'>Add New Meetup</Link></li>
                    <li><Link to='/favorites'>My Favorites</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navlinks;