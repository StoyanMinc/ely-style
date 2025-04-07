export default function Manicures() {
    return (
        <div className="manicures-container">

            <section className="first-section">
                <h1>Manicures</h1>
                <p>All manicures services include triming, regular shaping, filing buffing and cuticle maintenance</p>
                <span>nail art is an additional fee</span>
                <div className="booknow">
                    <a href="tel:+359895779790" className="header-nav-a">Запази час</a>
                </div>
            </section>

            <section className="manicures-prices">
                <h2>Basics</h2>
                <p className="manicure-prices-subtitle">A classic manicure with regular polish</p>
                <p>- - - - - - - - - - - - - -</p>
                <p>Classic manicure | $15</p>
                <p>French manicure | $23</p>
                <p>Buff manicure | $20</p>
                <p>Paraffin manicure | 20$</p>
                <p>Keratin manicure | $23</p>
                <p>SPA manicure | $30</p>
                <p>Mani polish change | $10</p>
            </section>

            <section className="manicures-prices">
                <h2>Color Gel</h2>
                <p className="manicure-prices-subtitle">Our classic manicure, but build to last! Pained with color gel polish and cured in lef light at our salon, lasts longer than classic manicure with no drying time!</p>
                <p>- - - - - - - - - - - - - -</p>
                <p>Color gel manicure | $40</p>
                <p>French color gel manicure | $55</p>
            </section>

            <section className="manicures-prices">
                <h2>Hard Gel</h2>
                <p className="manicure-prices-subtitle">Recieve a full set of uv gel/hard gel (with or without extensions/tips) and then your set is toppet with regular polish or color gel. Recieve a fill-in in every 2-3 weeks after the full set appoinment, appoinments past this be considered a new set.</p>
                <p>- - - - - - - - - - - - - -</p>
                <p>Hard gel (uv) set | $90+ (includes regular or color gel)</p>
                <p>Special shaping | +$10</p>
                <p>Hard gel (uv) fill | $60+ (includes regular or color gel)</p>
                <p>Keep special shaping | +$5</p>
                <p>Hard gel french set | $100+</p>
                <p>Double fill | $70+</p>
                <p>Long length nail (artificial/overlay) | +$10</p>
            </section>

            <section className="manicures-prices">
                <h2>Combinations</h2>
                <p>Classic manicure & Classic pedicure| $40</p>
                <p>Color gel manicure & classic pedicure | $67</p>
                <p>Spa manicure & signiture spa pedicure | $80</p>
                <p>Deep powder (sns) with regular pedicure | $75</p>
                <p> | $55</p>
            </section>
        </div>
    )
}