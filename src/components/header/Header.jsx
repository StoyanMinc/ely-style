import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header-container">
            <div className="logo-holder">
                <Link to={'/'}>
                    <h2>Ely Style</h2>
                    <span>Nail spa & more</span>
                </Link>
            </div>
            <div className="header-nav-holder">
                <ul>
                    <li><Link className="header-nav-a" to={'/services'}>Services</Link></li>
                    <li><Link className="header-nav-a" to={'/contacts'}>Contacts</Link></li>
                    <li><a className="header-nav-a instagram" href="https://www.instagram.com/elena.mincheva86/" target="_blanc"></a></li>
                    <li><a className="header-nav-a facebook" href="https://www.facebook.com/elena.mincheva.77" target="_blank"></a></li>
                    <li><Link className="header-nav-a email" to={'/'}></Link></li>
                    <li className="booknow"><Link className="header-nav-a" to={'/'}>book now</Link></li>
                </ul>
            </div>
        </div>
    )
}