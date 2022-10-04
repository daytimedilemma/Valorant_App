import React from "react";
import { useNavigate } from "react-router-dom"
export default function AboutAgents() {
    const navigate = useNavigate()
    return (
        <div style={{
            // border: "1px solid black",
            width: "90%",
            textAlign: "center",
            marginLeft: "30px"

        }}>
            <h3 style={{
                margin: "0px 35%",
                fontSize: "25px"
            }}>Agents</h3>

            <p>
                There are four different classes of agents in Valorant: <b>Duelists</b>,  <b>Initiator</b>, <b>Sentinel</b>, and <b>Controllers</b>. It's usually advised to
                have at least one agent from every class on a team. Doing this will help a team set themselves up for success on both offense and defense. Even if agents
                have abilities similar to other classes, having diversity in abilities will be the best option.
            </p>

            <p>
                <b>Duelists</b> are known for adding aggression to a team which can help in getting onto a site. They typically have abilities that deal damage, give mobility, blind, or heal themselves.
                They are classified as “self-sufficient fraggers” by the creators of the game. Since there is only a walk and run speed for players in
                valorant, mobility abilities can be very useful to get in and out of various situations. Healing abilities are the only way a player can regain health after
                taking damage.
            </p>

            <p>
                <b>Initiators</b> have abilites that give information, blind, or stun. These abilites assist teammates to make their opponents more vulnerable
                allowing for easier kills. Blind ablilties restrict sight to anyone in the area of effect, whether that's a peaking opponent or a teammate. To avoid
                blinding teammates, it is best to communicate to them when and where these abilities are being used. If timed correctly, blinds can be less effective when a
                player turns their view away from the ability. Stunning abilities that hit a player causes lower movement speed, deafened senses, and slower firing rate for
                a short duration.
            </p>

            <p>
                <b>Sentinels</b> are agents that are best used for watching flanks and protecting sites for both offene and defense. They have abilities that detect movement, slow or block
                players movement, or take back control of a site. If Sentinels communicate where their traps detect movement, it will help teammates know where to look for threats.
                Slowing and blocking abilites can help stall opponents until a teammate arrives to help or until the time runs out.
            </p>
            <p>
                <b>Controllers</b> are best known of for their abilities of blocking intel and vision of opponents. These abilities are often called smokes.
                Smokes are often used against opponents that have guns with longer range. This helps stall an enemies until the smoke goes away or players must take a risk
                of going through the smoke with little knowledge.
            </p>

            <p>
                Learning agents not only requires players to know what their abilities do, but what maps they can be optimized for. When they're used improperly, abilities can be
                restricted due to the size or angles of a map. If players want to learn abilities on specific maps in private, they can make a custom game for themselves.
                This allows players to become more familiar on how their agents work and can be best utilized in any map or situation. Every agent has an ultimate ability
                that is not availble to purchase. These abilities are unlocked by reaching a certain amount of ultimate points. The total points varies with each agent. Individual
                players can gain these points by getting kills, dying, collecting ultimate orbs on the map, or planting and defusing the spike.
            </p>
            <button onClick={() => navigate("/Agents")}>List of Agents</button>
        </div>
    )
}