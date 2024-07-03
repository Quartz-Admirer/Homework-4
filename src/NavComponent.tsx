import React from 'react';
import { Link } from 'react-router-dom';

const NavComponent: React.FC = () => {
    return (
        <nav>
            <Link to="/">Main</Link>
            <a href="#about">About me</a>
            <a href="#portfolio">My works</a>
            <a href="#contact">Contacts</a>
            <Link to="/comic">Comics</Link>
        </nav>
    );
};

export default NavComponent;
