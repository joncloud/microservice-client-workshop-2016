import React, { PropTypes } from 'react';

const Navbar = (setActiveLink, activeLink) =>
{
    var links = ['Home', 'Quotes', 'Add'].map((item, index) => {
        return (<li key={index} className={activeLink === item ? 'active' : ''}>
            <a href="#" onClick={() => setActiveLink(item)}>{item}</a>
        </li>);
    });
    
    return (<nav className="navbar navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">React Demo</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    {links}
                </ul>
            </div>
        </div>
    </nav>);
}

Navbar.propTypes = {
    setActiveLink: PropTypes.func.isRequired,
    activeLink: PropTypes.string.isRequired
};

export default Navbar;
