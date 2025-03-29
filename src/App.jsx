import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import Services from "./components/services/Services"
import Manicures from "./components/manicures/Manicures"
import Pedicures from "./components/pedicures/Pedicures"
import NailArtDesigns from "./components/nail-art-designs/NailArtDesigns"
import Beauty from "./components/beauty/Beauty"
import Contacts from "./components/contacts/Contacts"

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
                    <Route path="/services/nail-art-designs" element={<NailArtDesigns />} />
                    <Route path="/services/beauty" element={<Beauty />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </main>

            <Footer />
        </div>
    )
}

export default App
