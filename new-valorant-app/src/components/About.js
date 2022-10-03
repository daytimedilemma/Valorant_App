import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import AboutWeapons from "./AboutWeapons"
import AboutAgents from "./AboutAgents"
import Maps from "./Maps"
export default function About() {
    const navigate = useNavigate()

    return (
        <div className="aboutDiv">
            <h1>Valorant </h1>
            <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                // columnGap: "10px"
            }}>
                <AboutAgents />
                <AboutWeapons />
                
            </div>
            <div>
                <h2>Valorant Maps</h2>
                <Maps />

            </div>
        </div>
    )
}