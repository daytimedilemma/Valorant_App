import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"


export default function Home() {
    function getDisplayPicture() {
        axios.get("https://valorant-api.com/v1/agents/add6443a-41bd-e414-f6ad-e58d267f4e95")
            .then(res => setDisplayPicture(res.data.data.fullPortrait))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getDisplayPicture()
    }, [])

    const [displayPicture, setDisplayPicture] = useState("")

    const navigate = useNavigate()
    return (

        <div style={{
            display: "grid",
            gridTemplateColumns: "60% 1fr",
            margin: "0px"
        }}>
            {/* <img src={`${displayPicture}`} style={{
                height: "1000px",
                width: "75%"
            }} /> */}
            <div style={{
                marginTop: "20px",
                marginLeft: "10%",
                border: "4px solid #042e27",
                padding: "10px",
                backgroundColor: "#364966",
                borderRadius: "5px"
            }}>
                <h1>Welcome to Valorant</h1>
                <p>
                    Valorant is a team based first person tactical shooter game. It is a game that is easy to learn and free to play on PC. The game has an offense and
                    defense with 5 players on each team. The objective of the offensive team is to invade the defensive sites. They must plant the spike in the allotted
                    areas in a certain amount of time. If the offensive team manages to plant the spike, the defensive team has a short amount of time to try to take back
                    the site and defuse the spike to win the round. If they fail to defuse, then the spike will explode and eliminate anyone in the area of effect and the
                    offensive team wins that round. If either offense or defense manage to kill the entire team with their weapons or abilities before the spike is planted,
                    that team will win. However, if the spike is planted and the defensive team eliminates the offensive team, they must still defuse the spike in the given
                    time otherwise the attackers will win that round.
                </p>

                <p>
                    Valorant currently has 19 individual characters that are called "agents". They have their own unique abilities that provide strategies to help a team win. The
                    game provides 17 different guns that have a variety of accuracy, damage, and firing distance. Heavy and light armor are protective options provided to the
                    players. Armor requires opponents to deal more damage to achieve kills. Credits are given at the beginning of each round which allow players to purchase agent abilities,
                    weapons, and armor. Credits are the in game currency that is provided every round to the players whether the team wins or
                    loses the round. If individuals or teams can accomplish objectives such as winning the round, getting individual kills, or planting the spike on the attacking team
                    they will earn more credits for themselves or for the team. If a player isn't killed during a round, guns and any leftover armor they still have will carry over to the next round
                    and will not have to be purchased again. Every agent ability that isn't used during a round will carry over to the next round even if that player is killed.
                    This credit system offers unique strategies that will be used with each team. There can be up to 25 rounds, after 12 rounds opponents switch sides.
                    Whichever team scores 13 total points first wins the game.
                </p>

                <p>
                    There is strength in numbers and Valorant is no exception. When the entire team has enough individual credits, it is often best practice to buy better
                    guns, armor, and agent abilities. With this in mind, teams have the option to purchase very little or nothing at all to save up for future rounds. If a teammate has
                    credits to spare, they can purchase guns for their team if they request it. This obviously is a great option when teammates are doing well, but also adds another
                    aspect of strategy. Sometimes this means a player needs to lose the round by avoiding opponents and letting time run out so they can save credits.
                    The max amount of credits a player can have is 9000 credits. If players are close maxing out or are maxed out, it is best to buy weapons for teammates that don't have as many
                    credits to improve the economy for the team.
                </p>
                <p>
                    With so many aspects to discover, we advise that you click the "Learn More" button to help you be more prepared for the game. If you feel ready to jump in or are eager
                    to play, take our Valorant Personality Test now to see which guns and agents that would best suit you.
                </p>
                <button onClick={() => navigate("/About")}>Learn More</button>
                <button onClick={() => navigate("/PersonalityQuiz")}>Valorant Test</button>
            </div>
            <img src={`${displayPicture}`} style={{
                height: "1000px",
                width: "110%"
            }} />
        </div>
    )
}