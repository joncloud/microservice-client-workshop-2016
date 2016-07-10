import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    var links = [
        {path: '/', text: 'Home'},
        {path: '/list', text: 'Quotes'}
    ].map((link, index) => {
        return (<li key={index} className={location.pathname === link.path ? 'active' : ''}>
            <Link to={link.path}>{link.text}</Link>
        </li>);
    });

    return (<nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <Link className="navbar-brand" to="/">React Router Demo</Link>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    {links}
                </ul>
            </div>
        </div>
    </nav>);
};

export default Navbar;