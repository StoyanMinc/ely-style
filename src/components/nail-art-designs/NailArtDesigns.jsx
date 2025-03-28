import { Link } from "react-router-dom";

export default function NailArtDesigns() {
    return( 
        <div className="pedicures-container">
            <section className="first-section">
                <h1>Nail Art & Designs</h1>
                <span>For exact pricing, please ask the front desk or your nail tech, before the start of your service</span>
            </section>
            <section className="pedicures-prices">
                <p>Art & designs on 2 nails | +$10 % up</p>
                <p>(Based on # of nails, # of colors used etc.)</p>
                <p>Art & designs on all 10 nails | +$25 & up</p>
                <p>(Based type of design, # of colors used etc.)</p>
                <p>Ombre design (2 colors) | +$30</p>
                <p>Velvet nails (1 color)| +$25</p>
                <p>Chrome (1 color) | +$25</p>
            </section>
            <Link className="booknow header-nav-a" to={'/'}>book a visit</Link>

        </div>
    )
}