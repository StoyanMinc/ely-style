import { Link } from "react-router-dom"

export default function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-info-holder">
                    <span className="footer-info-holder-title">hours</span>
                    <span>monday - saturday 9am-19pm and sunday - dayoff</span>
                </div>
                <div className="footer-info-holder">
                    <span className="footer-info-holder-title">phone</span>
                    <span>(+359) 899 - 99</span>
                </div>
                <div className="footer-info-holder">
                    <span className="footer-info-holder-title">email</span>
                    <span>abv@.abv</span>
                </div>
                <div className="footer-social">
                    <ul>
                        <li><a className="header-nav-a instagram" href="https://www.instagram.com/elena.mincheva86/" target="_blanc"></a></li>
                        <li><a className="header-nav-a facebook" href="https://www.facebook.com/elena.mincheva.77" target="_blank"></a></li>
                        <li><Link className="header-nav-a email"></Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-nav">
                <ul>
                    <li><Link className="footer-nav-a" to={'/services'}>Services</Link></li>
                    <li><Link className="footer-nav-a" to={'/contacts'}>Contacts</Link></li>
                    <li><Link className="footer-nav-a" to={'/'}>Policies</Link></li>
                    {/* <li className="booknow"><Link className="footer-nav-a" to={'/'}>book now</Link></li> */}
                </ul>
            </div>
        </div>
    )
}