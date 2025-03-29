import { useState } from "react"

export default function Beauty() {

    const [lashOptionToShow, setLashOptionToShow] = useState('');

    const showLashOptionHandler = (lashOption) => {
        setLashOptionToShow(state => state !== lashOption ? state = lashOption : state = '');
    }

    return (
        <div className="beauty-container">
            <section className="beauty-title-section">
                <div className="beauty-title-holder">
                    <h2>Every woman is perfect as she is and we exist to enhance your confidence.</h2>
                </div>
            </section>
            <section className="beauty-services-section">

                <div className="service-option">
                    <div className="image-holder">
                        <img src="/images/microblading.avif" alt="image" />
                    </div>
                    <div className="service-options-info">
                        <h3>Microblading</h3>
                        <p>Touch-ups | $100</p>
                        <p>After care products | $30</p>
                        <p>Tips | 15% of the total price</p>
                    </div>
                </div>

                <div className="service-option">
                    <div className="image-holder">
                        <img src="/images/LashExtensions.jpeg" alt="image" />
                    </div>
                    <div className="service-options-info">
                        <h3 className="lash-extension-title">Lash Extensions</h3>
                        <div className="lash-holder">
                            <div className="lash-option-holder">
                                <p>Classing set | $130</p>
                                <button className="choose-lash-option-btn" onClick={() => showLashOptionHandler('classic set')}>+</button>
                            </div>
                            <div className={lashOptionToShow === 'classic set' ? 'active-lash-option' : 'lash-options'}>
                                <p>Mini fill | 60$</p>
                                <p>2 week fill | $80</p>
                                <p>3 week fill | $100</p>
                            </div>
                        </div>
                        <div className="lash-holder">
                            <div className="lash-option-holder">
                                <p>Hybrid set | $160</p>
                                <button className="choose-lash-option-btn" onClick={() => showLashOptionHandler('mini set')}>+</button>
                            </div>
                            <div className={lashOptionToShow === 'mini set' ? 'active-lash-option' : 'lash-options'}>
                                <p>Mini fill | 60$</p>
                                <p>2 week fill | $80</p>
                                <p>3 week fill | $100</p>
                            </div>
                        </div>
                        <div className="lash-holder">
                            <div className="lash-option-holder">
                                <p>Volume set | $200</p>
                                <button className="choose-lash-option-btn" onClick={() => showLashOptionHandler('volume set')}>+</button>
                            </div>
                            <div className={lashOptionToShow === 'volume set' ? 'active-lash-option' : 'lash-options'}>
                                <p>Mini fill | 60$</p>
                                <p>2 week fill | $80</p>
                                <p>3 week fill | $100</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="service-option">
                    <div className="image-holder">
                        <img src="/images/LaserHairRemoval.jpg" alt="image" />
                    </div>
                    <div className="service-options-info">
                        <h3>Laser Hair Removal</h3>
                        <p>Full body | $300</p>
                        <p>Bikini line | $50</p>
                        <p>Face | $40</p>
                        <p>Underarms | $40</p>
                        <p>Legs | 150$</p>
                        <p>Upper lip | $20</p>
                    </div>
                </div>

            </section>
        </div>
    )
}