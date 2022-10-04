import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"


export default function Maps(){
    const navigate = useNavigate()

    function getMapsFromAPI() {
        axios.get("https://valorant-api.com/v1/maps")
            .then(res => setMaps(res.data.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getMapsFromAPI()
    }, [])

    const [maps, setMaps] = useState([])
    const displayMaps = maps.map(individualMap => {
        return (
            <div className="mapDiv" style={{
                display: "inline-block",
                padding: "0px 10px",
                textAlign: "center"
                
            }}>
                <h4>{individualMap.displayName}</h4> 
                <img src={`${individualMap.splash}`}
                style={{
                    height: "150px",
                    width: "auto",
                    borderRadius: "10px"
                }}
                />
                
            </div>
        )
    })
    return (
        <div className="mapContainer">
            {displayMaps}
            <button onClick={() => navigate("/PersonalityQuiz")}>Valorant Test</button>
        </div>
    )
}