import React, {useState, useEffect} from "react"
import axios from "axios"


export default function Agents(){
    const [agents, setAgents] = useState([])
    

    const filterAgents = agents.filter(agent => agent.isPlayableCharacter === true ? agent : false)
    
    const displayAgents = filterAgents.map((agent => {
        const individualAbiility = agent.abilities.map(abilitiy =>{
            return (
                    <p>{`${abilitiy.displayName}: ${abilitiy.description}`}</p>
            )
        })
        return (
            <div key={agent.uuid}
            style={{
                border: "3px solid 	#672e37",
                padding: "10px",
                margin: "2.5px"
            }}
            >
                <img src={`${agent.displayIcon}`} className="displayIcon"/>
                <h3>{agent.displayName} - {agent.role.displayName}</h3>
                <p>{agent.description}</p>
                {agent.isBaseContent ? <p>Agent is avaiable with base content</p> : <p>*** Agent must be unlocked through contracts ***</p>}
                <div>
                    <h4>{agent.displayName}'s Abilities</h4>
                    {individualAbiility}
                </div>
                <br/>
            </div>
        )
    }))

    function getAgentsFromAPI() {
        axios.get("https://valorant-api.com/v1/agents/")
            .then(res => setAgents(res.data.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAgentsFromAPI()
    }, [])

    return (
        <>
            <h1>Agents Page</h1>
            <div
            style={{
                
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                
            }}
            >{displayAgents}</div>
        </>
    )
}