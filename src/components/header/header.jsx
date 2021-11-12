import React from "react";
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <nav className="header__navbar nav-menu">
                        <a href="/" className="nav-menu__link">Home</a>
                        <a href="/" className="nav-menu__link">Users</a>
                        <a href="/" className="nav-menu__link">Settings</a>
                        <a href="/" className="nav-menu__link">Reports</a>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;