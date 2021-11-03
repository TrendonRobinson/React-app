// Placeholder

// Styling
import './WordCard.css';

// React Import
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Variables


// Component

export default function WordCard(props) {


    // Defining as a single variables
    let word = props.data[0]

    // Functions
    function handleSound() {
        let current = word
        let phonetics = current.phonetics[0].audio
        let sound = 'https:'+phonetics
        let audio = new Audio(sound)
    
        audio.play()
    }

    // Listing out meanings
    let meanings = word.meanings.map((element) => {
        return (
            <li className="card-meaning">
                 {`(${element.partOfSpeech}) ${element.definitions[0].definition}`}
            </li>
        )
    })

    function handleClick() {

        props.remove(props.data[0])
    }

    return (
        <div className="WordCard">
            <h2>{word.word}</h2>
            <span className="sound"><h3>&#47;{word.phonetic}&#47;</h3> <input onClick={handleSound} className="SoundButton" type="image" src="https://static.thenounproject.com/png/4227067-200.png" alt="sound"/> </span>
            <hr/>
            <ul>{meanings}</ul>
            <button onClick={handleClick} className="Remove">Remove</button>
        </div>
    )

}