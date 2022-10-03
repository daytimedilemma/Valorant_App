import React from "react"

export default function Footer() {
    return (
        <footer style={{
            display: "block",
            backgroundColor: "black",
            color: "#364966",
            width: "100%",
            height: "50px",
            alignContent: "center",
            padding: "20px",
            textAlign: "center",
            marginTop: "10px",
            fontSize: "18px"
        }}>
            <span><b>Miner Dev Inc</b> || Salt Lake City, Utah 84065 || 800-555-5555 || <a href="https://playvalorant.com/" 
            style={{
                textDecoration: "none",
                color:"#364966",
                marginLeft:"5px"
            }}
            > Download Valorant</a></span>
        </footer>
    )
}