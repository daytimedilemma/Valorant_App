import React, { useState } from "react"

// export default function PersonalityQuizQuestions(props) {
//     const [weaponInput, setWeaponInput] = useState({
//         fpsExperience: 0,
//         pressure: 0,
//         details: 0,
//         pastMistakes: 0,
//         computerGameExperience: 0
//     })

//     const weaponResults = Object.values((weaponInput))
//     const finalWeaponResults = 0
//     const parseIntweaponResults = weaponResults.map(result => parseInt(result))
//     const sumOfWeaponResults = parseIntweaponResults.reduce((prevWeaponInput, combinedWeaponInput) => prevWeaponInput + combinedWeaponInput, finalWeaponResults)





//     const indivdualQuestions = props.question.map(question => {
//         const inputWeaponName = Object.keys(weaponInput)
//         const mapInputWeaponName = inputWeaponName.map(name => name)
//         console.log(mapInputWeaponName)
//         return (
//             <fieldset>
//                 <legend>On a Scale of 1 - 5, {question} 1 being the lowest experience and 5 being the highest experience?</legend>
//                 <input type="radio" id="1" value="1" onChange={props.handleWeaponChange} name="fpsExperience" />
//                 <label htmlFor="1">1</label>

//                 <input type="radio" id="2" value="2" onChange={props.handleWeaponChange} name="fpsExperience" />
//                 <label htmlFor="2">2</label>

//                 <input type="radio" id="3" value="3" onChange={props.handleWeaponChange} name="fpsExperience" />
//                 <label htmlFor="3">3</label>

//                 <input type="radio" id="4" value="4" onChange={props.handleWeaponChange} name="fpsExperience" />
//                 <label htmlFor="4">4</label>

//                 <input type="radio" id="5" value="5" onChange={props.handleWeaponChange} name="fpsExperience" />
//                 <label htmlFor="5">5</label>
//             </fieldset>
//         )
//     })

//     return (
//         <>{indivdualQuestions}</>

//     )
// }  