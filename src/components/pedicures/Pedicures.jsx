import useScrollToTop from "../../hooks/useScroll";

export default function Pedicures() {
    useScrollToTop();
    return (
        <div className="pedicures-container">
            <section className="first-section">
                <h1>Pedicures</h1>
                <span>a warm sea salt soak, trimming, shaping, filing, buffing, cuticle maintenance, removeal of rough dead skin, steamed hot towel cleanse, exfoliating scrub & hydrating lotion.</span>
            </section>
            <section className="pedicures-prices">
                <h2>The Basics</h2>
                <p className="pedicures-prices-subtitle">A classic manicure with regular polish</p>
                <p>- - - - - - - - - - - - - -</p>
                <p>Classic pedicure | $30</p>
                <p> Classic French pedicure | $35</p>
                <p>Pedicure polish change | $15</p>
                <p>Color gel pedicure | $55</p>
                <p>Color gel french pedicure | $65</p>
                <p>Color gel pedi removal | +$5</p>
                <p>Special pedicure | $45</p>
                <p>Hot stone pedicure | $47</p>
                <p>Signature spa pedicure | $53</p>
            </section>
            <div className="booknow">
                <a href="tel:+359895779790" className="header-nav-a">Запази час</a>
            </div>
        </div>
    )
}