import React from 'react';
import './Navbar.scss'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-container" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#"><img></img></a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                            <a href="/" className="nav-links">inicio</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-links">nosotros</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-links">servicios</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-links">casos de exito</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-links">unete al equipo</a>
                        </li>
                        <li className="nav-item">
                            <a href="/" className="nav-links">contacto</a>
                        </li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;
