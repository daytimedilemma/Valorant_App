import React from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/Home"
import Agents from "./components/Agents"
import About from "./components/About"
import Weapons from "./components/Weapons"
import PersonalityQuiz from "./components/PersonalityQuiz"
import Footer from "./components/Footer"

export default function App() {


    return (
        <>
            <Router>
                <header style={{
                    backgroundColor: "#dc3d4b",
                    height: "100px",
                    display: "flex"
                }}>
                    <img src="https://freight.cargo.site/w/3840/q/75/i/a17dfc0b27e50cb1c75dcd8fcd13a2d11783729f60265d9a00d184bc5a8d9296/VALORANT_1.png"
                        style={{
                            width: "max",
                            height: "100px",
                        }} />
                    <nav style={{
                        display: "flex",
                        // justifyItems: "center",
                        fontSize: "30px",
                        marginRight: "70%"
                    }}>
                        <Link to={-1} style={{ padding: 15, color: "black", textDecoration: "none" }}>
                            Back
                        </Link>
                        <Link to="/" style={{ padding: 15, color: "black", textDecoration: "none" }}>
                            Home
                        </Link>
                        <Link to="/About" style={{ padding: 15, color: "black", textDecoration: "none" }}>
                            Content
                        </Link>
                        <Link to="/PersonalityQuiz" style={{ padding: 15, color: "black", textDecoration: "none" }}>
                            Test
                        </Link>
                    </nav>
                    {/* <img src="https://freight.cargo.site/w/3840/q/75/i/a17dfc0b27e50cb1c75dcd8fcd13a2d11783729f60265d9a00d184bc5a8d9296/VALORANT_1.png" 
                style={{
                    width: "max",
                    height: "100px",
                    marginLeft: "50%"
                }}/> */}
                </header>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Agents" element={<Agents />} />
                    <Route path="/Weapons" element={<Weapons />} />
                    <Route path="/PersonalityQuiz" element={<PersonalityQuiz />} />
                </Routes>
            </Router>
            <Footer />
        </>
    )
}