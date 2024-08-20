import React from "react";
import { Link } from "react-router-dom";

import { FaHome, FaEnvelope, FaUser, FaShoppingCart } from "react-icons/fa";
import Logo from './img/logo.png';

export default function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-xl navbar-light">
                <div className="navbar-brand ml-auto">
                    <Link to="/Startseite">
                        <img src={Logo} alt="Logo"></img>
                    </Link>
                </div>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link to="/Startseite"><FaHome /> Startseite</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Kontakt"><FaEnvelope /> Kontakt</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Impressum"><FaUser /> Impressum</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/Warenkorb"><FaShoppingCart /> Warenkorb</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}