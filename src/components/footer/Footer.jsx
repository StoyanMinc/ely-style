import { Link } from "react-router-dom"

export default function Footer() {
    return( 
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
                    <span>instagram</span>
                    <span>facebook</span>
                    <span>email</span>
                </div>
            </div>
            <div className="footer-nav">
            <ul>
                    <li><Link className="footer-nav-a" to={'/'}>Services</Link></li>
                    <li><Link className="footer-nav-a" to={'/'}>Contacts</Link></li>
                    <li><Link className="footer-nav-a" to={'/'}>facebook</Link></li>
                    <li><Link className="footer-nav-a" to={'/'}>instagram</Link></li>
                    <li><Link className="footer-nav-a" to={'/'}>mail</Link></li>
                    <li className="booknow"><Link className="footer-nav-a" to={'/'}>book now</Link></li>
                </ul>
            </div>
        </div>
    )
}