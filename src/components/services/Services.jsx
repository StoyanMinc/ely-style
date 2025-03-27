import { Link } from "react-router-dom"

export default function Services() {
    return (
        <div className="services-container">
            <section className="services-nav">
                <div className="services-nav-holder service-manicure"><Link className="service-title">Manicures</Link></div>
                <div className="services-nav-holder service-pedicure"><Link className="service-title">Pedicures</Link></div>
                <div className="services-nav-holder service-manicure-art"><Link className="service-title">Nails Art <span className="ampersand"></span> Desings</Link></div>
                <div className="services-nav-holder service-beauty"><Link className="service-title">Beauty</Link></div>
            </section>
            <section className="services-comment">
                <div className="services-image-holder"></div>
                <div className="services-comment-holder">
                    <p>"Ely Style is hands down the best salon around, I definitily recommendet"</p>
                    <span>- Stoyan M., Nail spa client</span>    
                </div>
            </section>
        </div>
    )
}