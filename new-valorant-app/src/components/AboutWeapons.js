import React from "react";
import { useNavigate } from "react-router-dom"

export default function AboutWeapons() {
    const navigate = useNavigate()
    return (
        <div style={{
            // border: "1px solid black",
            width: "80%",
            height: "",
            marginLeft: "12.5%",
            textAlign: "center"
        }}>
            <h3 style={{
                margin: "0px 35%",
                fontSize: "25px"
            }}>Weapons</h3>

            <p>
                Weapons in Valorant are one of the great equalizers in this game. There are recoil patterns to each gun that
                shoot in different ways as it continues to fire. This makes players need to adjust their aim or cursor accordingly. This requires them to learn
                the interactions of each gun. The cost of weapons range from 0 - 4700 credits. Each player is provided with a <b>primary</b>, <b>secondary</b>, and <b>melee</b> weapon
                slots.
            </p>

            <p>
                <b>Primary</b> weapons have five categories: Small Machine Guns (SMG for short), Shotguns, Rifles, Snipers, and Machine Guns. There is a total of 11 Primary
                weapons. Their uses are all situational. Shotguns and SMGs are cheaper but they have shorter range. They can have great use for maps that have a lot of corners
                and hiding places to suprise the opponent. Rifles, Snipers, and Machine Guns have longer range. Rifles, specifically the Phantom and the Vandal, are the
                most commonly purchased guns when players has sufficient credits. Snipers are great for players that need to distance themselves from an opponent but are not very
                effective short range. Machine Guns can be very effective if the enemy team likes to group close together. The price range of primary weapons
                are 850 - 4700 credits.
            </p>

            <p>
                <b>Secondary</b> weapons are the pistols or sidearms of the game and do less damage overall. There are a total of 5 pistols in the game. When players have no
                weapons to carry over from the previous round they are equipped with a pistol called the Classic. This allows players to never go without a gun each round.
                At the beginning of first and twelfth round of each game, players are given a low amount of credits. This limits purchases to pistols, light armor, and abilities. The price
                range of secondary weapons are 0 - 800 credits.
            </p>

            <p>
                The <b>melee</b> weapon is the knife of the game. It is rarely used for combat but can do damage. One benefit of equpping the melee weapon is to gain speed while running
                or walking. It is provided to every player similarly to the Classic pistol.
            </p>

            <p>
                Weapons are one of the main options to add style to indivdual players in Valorant. If a player desires to add styles to their weapons, cosmetics and skins
                are available to purchase through the game store. There are two sections in this store. The main section is a limited time cosmetic package with a price reduction
                if all of the styles are purchased. The second section is four randomly selected weapon skins. For weapon skins not available for purchase, players can take
                advantage of those four random skin. These skins provide a later opportunty to purchase gun styles for missed bundles that were previously offered.
            </p>
            <button onClick={() => navigate("/Weapons")}>List of Weapons</button>
        </div>
    )
}