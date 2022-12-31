import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Contact from "./pages/contact/Contact"
import About from "./pages/about/About"
import Gallery from "./pages/gallery/Gallery"
import Home from "./pages/home/Home"
import Plans from "./pages/plans/Plans"
import Trainer from "./pages/trainer/Trainer"
import NotFound from "./pages/notFound/NotFound"
import Footer from "./components/Footer"


const App = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="plans" element={<Plans />} />
                <Route path="trainers" element={<Trainer />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App