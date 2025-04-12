import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {

    const [showNav, setShowNav] = useState(false);

    const toggleNav = () => {
        setShowNav(state => !state);
    }

    return (
        <div className="header-container">
            <div className="logo-holder">
                <Link to={'/'}>
                    <h2>Ely Style</h2>
                    <span>Nail spa & more</span>
                </Link>
            </div>
            <div className={showNav ? 'header-nav-holder show-nav' : 'header-nav-holder'}>
                <ul>
                    <div className="nav-links-container">
                        <li className="services-link"><Link className="header-nav-a" to={'/gift-card'} onClick={toggleNav}>Gift cards</Link></li>
                        <li className="services-link"><Link className="header-nav-a" to={'/services'} onClick={toggleNav}>Services</Link></li>
                        <li className="contacts-link"><Link className="header-nav-a" to={'/contacts'} onClick={toggleNav}>Contacts</Link></li>
                    </div>
                    <div className="nav-icons-container">
                        <div className="nav-icons-holder">
                            <li><a className="header-nav-a instagram" href="https://www.instagram.com/elena.mincheva86/" target="_blanc" onClick={toggleNav}></a></li>
                            <li><a className="header-nav-a facebook" href="https://www.facebook.com/elena.mincheva.77" target="_blank" onClick={toggleNav}></a></li>
                            <li><Link className="header-nav-a email" to={'/'} onClick={toggleNav}></Link></li>
                        </div>
                        <li className="booknow">
                            <a href="tel:+359895779790" className="header-nav-a">Запази час</a>
                        </li>
                    </div>
                </ul>
            </div>
            <div className={showNav ? 'burger-menu open' : 'burger-menu'} id="burger-menu" onClick={toggleNav}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    )
}