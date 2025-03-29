import { useEffect } from "react"

export default function Contacts() {
    useEffect(() => {
            window.scrollTo(0, 0)
          }, [])
    return (
        <div className="contacts-container">
            <div className="contacts-content">
                <h1>Contact Us</h1>
                <div className="contacts-info">
                    <p>feel free to EMAIL OR message us on social media for any questions about nail art or services, But please call during business hours for an immediate response.</p>
                    <p>**Please Note: appointments cannot be made via Email. Please click here to book an appointment.</p>
                </div>
                <div className="contacts-hours">
                    <h3>Hours</h3>
                    <p>Monday–Saturday | 10am–7:30pm</p>
                    <p>Sunday | day off</p>
                    <h3>Contact info</h3>
                    <p>ads@abv.bg</p>
                    <p>(+359) 999 - 999</p>
                </div>
            </div>
            <div className="google-maps">
                <h4>Visit Ely Style</h4>
                <p>3 str. Silivrya Plovdiv</p>
                <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=4%20ul.%20%22Silivria%22,%204004%20Plovdiv+(Ely%20Style)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/collections/drones/">best drones</a></iframe>
            </div>
        </div>
    )
}