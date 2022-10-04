import React, { useState, useEffect } from "react";
import axios from "axios";


export default function Weapons() {

    function getWeaponsFromAPI() {
        axios.get("https://valorant-api.com/v1/weapons")
            .then(res => setWeapons(res.data.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getWeaponsFromAPI()
    }, [])

    const [weapons, setWeapons] = useState([])
    const displayWeapons = weapons.map((weapon => {
        const fireRate = weapon.weaponStats?.fireRate
        const aimDownSites = weapon.weaponStats?.altFireType === "EWeaponAltFireDisplayType::ADS" ? "True" : "False"
        let primaryOrSecondaryWeapon = ""
        if (weapon.category === "EEquippableCategory::Melee") {
            primaryOrSecondaryWeapon = "Melee"
        } else if (weapon.category === "EEquippableCategory::Sidearm") {
            primaryOrSecondaryWeapon = "Secondary"
        } else {
            primaryOrSecondaryWeapon = "Primary"
        }
        const damageRanges = weapon.weaponStats?.damageRanges

        const distance = damageRanges?.map((range, index) => {
            return (
                <ul key={index} className="weapon--distance">
                    <h4>Damage Between {range.rangeStartMeters} and {range.rangeEndMeters} Meters</h4>
                    <li>Headshot Damage - {range.headDamage} </li>
                    <li>Bodyshot Damage - {range.bodyDamage}</li>
                    <li>Legshot Damage - {range.legDamage}</li>
                </ul>
            )
        })

        console.log(weapon)

        return (
            <div
                key={weapon.uuid}
                className="weapon--imageDiv"
                style={{
                    border: "3px solid #042e27",
                    margin: "10px",
                    padding: "10px",
                    backgroundColor: "#7e7c7d",
                    alignItems: "center"
                }}
            >
                <h2>{weapon.displayName}</h2>
                <h4>Weapon Slot - {primaryOrSecondaryWeapon}</h4>
                <img src={`${weapon.displayIcon}`} className={primaryOrSecondaryWeapon === "Secondary" || primaryOrSecondaryWeapon === "Melee" ? "smallWeapon--image" : "largeWeapon--image"} />
                <div className="image--overlay">
                
                    <div className="weapon--description">
                        {fireRate ?
                            <>
                                <h4>Magazine Size - {weapon.weaponStats?.magazineSize}</h4>
                                <h4>Fire Rate - {fireRate} Bullets/Second</h4>
                                <h4>Has Aim Down Sites - {aimDownSites}</h4>
                                <h4>Cost ${weapon.shopData?.cost}</h4>
                            </>
                            : 
                            <>
                                <h4>Knifing from Front Damage:</h4>
                                <ul>
                                    <li>Left-click does 50 damage.</li>
                                    <li>Right-click does 75 damage.</li>
                                </ul>
                                <h4>Knifing from Back or Side Damage:</h4>
                                <ul>
                                    <li>Left-click does 100 damage</li>
                                    <li>Right-click does 150 damage</li>
                                </ul>
                            </>
                            }
                            
                    </div> 
                    {distance}
                </div>
            </div>
        )
    }))
    return (
        <div
            style={{
                marginLeft: "5%",
                display: "grid",
                gridTemplateColumns: "1fr 1fr"
            }}
        >
            {displayWeapons}
        </div>
    )
}