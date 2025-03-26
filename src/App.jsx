import { Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"
import Services from "./components/services/Services"

function App() {

    return (
        <div className="site-container">
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                </Routes>
            </main>

            <Footer />
        </div>
    )
}

export default App
