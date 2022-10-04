import React, { useState } from "react";
import PersonalityQuizQuestions from "./PersonalityQuizQuestions";
import { useNavigate } from "react-router-dom"

//Possibly change agentInput to individual agent type inputs 
//Compare all of the indivdual agent type inputs and that will be the user's agent recommendation 
//Or combine agent inputs to a list and then filter out highest result and that will be the user's agent recommendation
export default function PersonalityQuiz() {
    const navigate = useNavigate()

    const [agentInput, setAgentInput] = useState({
        duelist: 0,
        sentinel: 0,
        initiator: 0,
        controller: 0
    })

    const [weaponInput, setWeaponInput] = useState({
        fpsExperience: 0,
        pressure: 0,
        details: 0,
        pastMistakes: 0,
        computerGameExperience: 0
    })

    function handleWeaponChange(event) {
        const { name, value, type, checked } = event.target
        setWeaponInput(prevWeaponInput => {
            return {
                ...prevWeaponInput,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }


    const weaponResults = Object.values((weaponInput))
    const finalWeaponResults = 0
    const parseIntweaponResults = weaponResults.map(result => parseInt(result))
    const sumOfWeaponResults = parseIntweaponResults.reduce((prevWeaponInput, combinedWeaponInput) => prevWeaponInput + combinedWeaponInput, finalWeaponResults)
   



    function handleAgentChange(event) {
        const { name, value, type, checked } = event.target
        setAgentInput(prevAgentInput => {
            return {
                ...prevAgentInput,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }


    const agentResults = Object.keys(agentInput).reduce((a, b) => agentInput[a] > agentInput[b] ? a : b)
    console.log(agentResults)



    const littleExperience = (
        <div>
            <p>Based on your results, we recommend the following guns:</p>
            <ul>
                <li>For your Low Buy Rounds/Pistol: Classic, Frenzy, or Ghost</li>
                <li>For your Mid Level Buys: Stinger, Spectre, Ares, or a Judge</li>
                <li>For your higher High Buy Rounds: Bulldog, Phantom, Odin</li>
            </ul>
            <p>
                If you want to get more comfortable with your shooting, try  the valorant training room.
                Challenge yourself with the moving targets and try out all the guns. Death Match is a free for all
                gamemode that is great for seeing how your guns work in real map situations. It is a great way to
                warm up your game sense as well. Don't be afraid to try out unranked mode and have fun with learning!
            </p>
            <button onClick={() => navigate("/Weapons")}>List of Weapons</button>
            <p>Click <a href="https://playvalorant.com/">here</a> to download Valorant!</p>
        </div>
    )

    const mediumExperience = (
        <div>
            <p>Based on your results, we recommend going to training room and trying out the guns to see which feel the best.</p>

            <p>
                Challenge yourself with the moving targets and try out all the guns. Death Match is a free for all
                gamemode that is great for seeing how your guns work in real map situations. It is a great way to
                warm up your game sense as well. Go ahead and dive into unranked. When you are wanting a challenge, go for ranked!
            </p>
            <button onClick={() => navigate("/Weapons")}>List of Weapons</button>
            <p>Click <a href="https://playvalorant.com/">here</a> to download Valorant!</p>
        </div>
    )

    const experienced = (
        <div>
            <p>Based on your results, we recommend the following guns:</p>
            <ul>
                <li>For your Low Buy Rounds/Pistol: Shorty, Ghost, Sheriff</li>
                <li>For your Mid Level Buys: Marshall, Stinger, Bucky, or a Spectre</li>
                <li>For your higher High Buy Rounds: Guardian, Vandal, Operator</li>
            </ul>
            <p>
                It sounds like you are an experienced veteran! The guns recommended to you
                will punish your opponents if you don't rush your shot. Death Match and the Training Room
                are always a good warm up. Dive into unranked and ranked so you can get more familiar with the game
                and improve.
            </p>
            <button onClick={() => navigate("/Weapons")}>List of Weapons</button>
            <p>Click <a href="https://playvalorant.com/">here</a> to download Valorant!</p>
        </div>
    )

    const duelistResult = (
        <>
            <h3>Agent Result: Duelist</h3>
            <p>You are the life of the party. Be ready to lead your team to victory with your aggression!</p>
            <button onClick={() => navigate("/Agents")}>List of Agents</button>
        </>
    )

    const sentinelResult = (
        <>
            <h3>Agent Result: Sentinel</h3>
            <p>You are the most loyal of your teammates! Be ready to lead your team to victory with your protection!</p>
            <button onClick={() => navigate("/Agents")}>List of Agents</button>
        </>
    )

    const initiatorResult = (
        <>
            <h3>Agent Result: Initiator</h3>
            <p>You are the strategist of the team! Be ready to lead your team to victory with your communication!</p>
            <button onClick={() => navigate("/Agents")}>List of Agents</button>
        </>
    )

    const controllerResult = (
    <>
        <h3>Agent Result: Controller</h3>
        <p>You are observant and great with helping others! You will be an asset to the team as you recognize sitautions where you can help!</p>
        <button onClick={() => navigate("/Agents")}>List of Agents</button>
    </>
    )



    let showAgentResults
    if (agentResults === "duelist"){
        showAgentResults = duelistResult
    } else if (agentResults === "sentinel"){
        showAgentResults = sentinelResult
    } else if (agentResults === "initiator"){
        showAgentResults = initiatorResult
    } else if (agentResults === "controller"){
        showAgentResults = controllerResult
    }

   const [displayAgentResults, setDisplayAgentResults] = useState("")


    const [showUserWeaponResult, setShowWeaponResult] = useState([])
    function handleSubmit(e) {
        e.preventDefault()
        setShowWeaponResult(prevWeaponResult => {
            if (sumOfWeaponResults >= 0 && sumOfWeaponResults <= 12) {
                prevWeaponResult = littleExperience
            } else if (sumOfWeaponResults >= 13 && sumOfWeaponResults <= 15) {
                prevWeaponResult = mediumExperience
            } else if (sumOfWeaponResults > 15) {
                prevWeaponResult = experienced
            }
            return prevWeaponResult
        })
        setDisplayAgentResults(showAgentResults)
    }
 

    return (
        <>
            <form
                onSubmit={handleSubmit}
                style={{
                    padding: "20px",
                    margin: "10px"
                }}
            >
                <fieldset>
                    <legend>On a Scale of 1 - 5, How high would you say your experience is with first person shooter games? 1 being the lowest experience and 5 being the highest experience?</legend>
                    <input type="radio" id="1" value="1" onChange={handleWeaponChange} name="fpsExperience" />
                    <label htmlFor="1">1</label>

                    <input type="radio" id="2" value="2" onChange={handleWeaponChange} name="fpsExperience" />
                    <label htmlFor="2">2</label>

                    <input type="radio" id="3" value="3" onChange={handleWeaponChange} name="fpsExperience" />
                    <label htmlFor="3">3</label>

                    <input type="radio" id="4" value="4" onChange={handleWeaponChange} name="fpsExperience" />
                    <label htmlFor="4">4</label>

                    <input type="radio" id="5" value="5" onChange={handleWeaponChange} name="fpsExperience" />
                    <label htmlFor="5">5</label>
                </fieldset>

                <fieldset>
                    <legend>On a Scale of 1 - 5, How well do you perform under pressure? 1 being the lowest performance and 5 being the highest performance?</legend>
                    <input type="radio" id="1" value="1" onChange={handleWeaponChange} name="pressure" />
                    <label htmlFor="1">1</label>

                    <input type="radio" id="2" value="2" onChange={handleWeaponChange} name="pressure" />
                    <label htmlFor="2">2</label>

                    <input type="radio" id="3" value="3" onChange={handleWeaponChange} name="pressure" />
                    <label htmlFor="3">3</label>

                    <input type="radio" id="4" value="4" onChange={handleWeaponChange} name="pressure" />
                    <label htmlFor="4">4</label>

                    <input type="radio" id="5" value="5" onChange={handleWeaponChange} name="pressure" />
                    <label htmlFor="5">5</label>
                </fieldset>

                <fieldset>
                    <legend>On a Scale of 1 - 5 How well do you pay attention to details? 1 being the lowest 5 being the highest.</legend>
                    <input type="radio" id="1" value="1" onChange={handleWeaponChange} name="details" />
                    <label htmlFor="1">1</label>

                    <input type="radio" id="2" value="2" onChange={handleWeaponChange} name="details" />
                    <label htmlFor="2">2</label>

                    <input type="radio" id="3" value="3" onChange={handleWeaponChange} name="details" />
                    <label htmlFor="3">3</label>

                    <input type="radio" id="4" value="4" onChange={handleWeaponChange} name="details" />
                    <label htmlFor="4">4</label>

                    <input type="radio" id="5" value="5" onChange={handleWeaponChange} name="details" />
                    <label htmlFor="5">5</label>
                </fieldset>

                <fieldset>
                    <legend>On a Scale of 1 - 5 How well are you able to learn from past mistakes? 1 being the lowest and 5 being the highest.</legend>
                    <input type="radio" id="1" value="1" onChange={handleWeaponChange} name="pastMistakes" />
                    <label htmlFor="1">1</label>

                    <input type="radio" id="2" value="2" onChange={handleWeaponChange} name="pastMistakes" />
                    <label htmlFor="2">2</label>

                    <input type="radio" id="3" value="3" onChange={handleWeaponChange} name="pastMistakes" />
                    <label htmlFor="3">3</label>

                    <input type="radio" id="4" value="4" onChange={handleWeaponChange} name="pastMistakes" />
                    <label htmlFor="4">4</label>

                    <input type="radio" id="5" value="5" onChange={handleWeaponChange} name="pastMistakes" />
                    <label htmlFor="5">5</label>
                </fieldset>

                <fieldset>
                    <legend>On a Scale of 1 - 5,How high would you say your experience is with computer? 1 for lowest experience and 5 being highest experience</legend>
                    <input type="radio" id="1" value="1" onChange={handleWeaponChange} name="computerGameExperience" />
                    <label htmlFor="1">1</label>

                    <input type="radio" id="2" value="2" onChange={handleWeaponChange} name="computerGameExperience" />
                    <label htmlFor="2">2</label>

                    <input type="radio" id="3" value="3" onChange={handleWeaponChange} name="computerGameExperience" />
                    <label htmlFor="3">3</label>

                    <input type="radio" id="4" value="4" onChange={handleWeaponChange} name="computerGameExperience" />
                    <label htmlFor="4">4</label>

                    <input type="radio" id="5" value="5" onChange={handleWeaponChange} name="computerGameExperience" />
                    <label htmlFor="5">5</label>
                </fieldset>

                <fieldset>
                    <legend>You are outgoing. Not at all, Rarely, Sometimes, Frequently, Always</legend>
                    <input type="radio" id="1" value="1" onChange={handleAgentChange} name="duelist" />
                    <label htmlFor="1">Not at all</label>

                    <input type="radio" id="2" value="2" onChange={handleAgentChange} name="duelist" />
                    <label htmlFor="2">Rarely</label>

                    <input type="radio" id="3" value="3" onChange={handleAgentChange} name="duelist" />
                    <label htmlFor="3">Sometimes</label>

                    <input type="radio" id="4" value="4" onChange={handleAgentChange} name="duelist" />
                    <label htmlFor="4">Frequently</label>

                    <input type="radio" id="5" value="5" onChange={handleAgentChange} name="duelist" />
                    <label htmlFor="5">Always</label>
                </fieldset>

                <fieldset>
                    <legend>You like working alone. Not at all, Rarely, Sometimes, Frequently, Always</legend>
                    <input type="radio" id="1" value="1" onChange={handleAgentChange} name="sentinel" />
                    <label htmlFor="1">Not at all</label>

                    <input type="radio" id="2" value="2" onChange={handleAgentChange} name="sentinel" />
                    <label htmlFor="2">Rarely</label>

                    <input type="radio" id="3" value="3" onChange={handleAgentChange} name="sentinel" />
                    <label htmlFor="3">Sometimes</label>

                    <input type="radio" id="4" value="4" onChange={handleAgentChange} name="sentinel" />
                    <label htmlFor="4">Frequently</label>

                    <input type="radio" id="5" value="5" onChange={handleAgentChange} name="sentinel" />
                    <label htmlFor="5">Always</label>
                </fieldset>

                <fieldset>
                    <legend>You communicate well with others. Not at all, Rarely, Sometimes, Frequently, Always</legend>
                    <input type="radio" id="1" value="1" onChange={handleAgentChange} name="initiator" />
                    <label htmlFor="1">Not at all</label>

                    <input type="radio" id="2" value="2" onChange={handleAgentChange} name="initiator" />
                    <label htmlFor="2">Rarely</label>

                    <input type="radio" id="3" value="3" onChange={handleAgentChange} name="initiator" />
                    <label htmlFor="3">Sometimes</label>

                    <input type="radio" id="4" value="4" onChange={handleAgentChange} name="initiator" />
                    <label htmlFor="4">Frequently</label>

                    <input type="radio" id="5" value="5" onChange={handleAgentChange} name="initiator" />
                    <label htmlFor="5">Always</label>
                </fieldset>

                <fieldset>
                    <legend>You are a good listener. Not at all, Rarely, Sometimes, Frequently, Always</legend>
                    <input type="radio" id="1" value="1" onChange={handleAgentChange} name="controller" />
                    <label htmlFor="1">Not at all</label>

                    <input type="radio" id="2" value="2" onChange={handleAgentChange} name="controller" />
                    <label htmlFor="2">Rarely</label>

                    <input type="radio" id="3" value="3" onChange={handleAgentChange} name="controller" />
                    <label htmlFor="3">Sometimes</label>

                    <input type="radio" id="4" value="4" onChange={handleAgentChange} name="controller" />
                    <label htmlFor="4">Frequently</label>

                    <input type="radio" id="5" value="5" onChange={handleAgentChange} name="controller" />
                    <label htmlFor="5">Always</label>
                </fieldset>
                <button>Submit</button>
            </form>
            {displayAgentResults}
            {showUserWeaponResult}
        </>
    )

}