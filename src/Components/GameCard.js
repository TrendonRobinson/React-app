// Placeholder

// Styling
import './GameCard.css';

// React Import
import React, {useState} from "react";
import { Shake, ShakeLittle, ShakeSlow, ShakeHorizontal } from 'reshake'

// Variables
let delayInMilliseconds = 1000; //1 second

//function 
function Seconds(amount) {
    return delayInMilliseconds * amount
}

// Component

export default function GameCard(props) {

    const [check, setCheck] = useState(false)
    const [shake, setShake] = useState(false)

    // Variables
    let word = props.data[0]

    // Functions
    function handleSubmit(event){
        let inputField = event.target.parentNode.children[0]
        let inputFieldText = inputField.value.replace(/ /g, "");
        let answer = inputFieldText.toLowerCase()

        if (answer === word.toLowerCase()) {
            setCheck(true)

            
        } else {
            setShake(true)
            setTimeout(function() {
                setShake(false)
              }, Seconds(.5));
        }

    }

    return (
        <div className="GameCard">
            {check ? <h1 className="answer">{props.data[0]}</h1> : <input className="word-box"/>}
            <h3>{props.data[1]}</h3>
            <hr/>
            {check ? <div/> : shake ? 
            <ShakeLittle h={20} v={0} r={3}>
                <button onClick={handleSubmit} className="Wrong">
                    Wrong
                </button>
            </ShakeLittle>: 
            <button onClick={handleSubmit} className="Submit">
                    Submit
            </button>}
        </div>
    )
}