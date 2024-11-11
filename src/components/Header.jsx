import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container">
        <h2>Ozan Akgön</h2>
        <nav className="navbar">
          <ul>
            <li>
              <Link className="link" to="/">
                Anasayfa
              </Link>
            </li>
            <li>
              <Link className="link" to="/projects">
                Projeler
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                Hakkımda
              </Link>
            </li>
            <li>
              <Link className="link" to="/contact">
                İletişim
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
