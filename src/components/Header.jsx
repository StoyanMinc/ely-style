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
                    <li><Link to={'/'}>Services</Link></li>
                    <li><Link to={'/'}>Contacts</Link></li>
                    <li><Link to={'/'}>facebook</Link></li>
                    <li><Link to={'/'}>instagram</Link></li>
                    <li><Link to={'/'}>main</Link></li>
                    <li className="booknow"><Link to={'/'}>book now</Link></li>
                </ul>
            </div>
        </div>

    )
}