import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import Services from "./components/services/Services"
import Manicures from "./components/manicures/Manicures"
import Pedicures from "./components/pedicures/Pedicures"

function App() {

    return (
        <div className="site-container">
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/services/manicures" element={<Manicures />} />
                    <Route path="/services/pedicures" element={<Pedicures />} />
                </Routes>
            </main>

            <Footer />
        </div>
    )
}

export default App
