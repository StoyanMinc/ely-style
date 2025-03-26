import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header-container">
            <div className="logo-holder">
                <Link to={'/'}>
                    <h2>NAIL SPA</h2>
                    <p>Eli Style</p>
                </Link>
            </div>
            <div className="header-nav-holder">
                <ul>
                    <li><Link className="header-nav-a" to={'/services'}>Services</Link></li>
                    <li><Link className="header-nav-a" to={'/'}>Contacts</Link></li>
                    <li><Link className="header-nav-a" to={'/'}>facebook</Link></li>
                    <li><Link className="header-nav-a" to={'/'}>instagram</Link></li>
                    <li><Link className="header-nav-a" to={'/'}>email</Link></li>
                    <li className="booknow"><Link className="header-nav-a" to={'/'}>book now</Link></li>
                </ul>
            </div>
        </div>

    )
}