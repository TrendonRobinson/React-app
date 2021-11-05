// Placeholder

// Styling
import './WordGame.css';

// React Import
import React from "react";

// Variables

// Components
import GameCard from './GameCard'

// Functions

// Component
export default function WordGame(props) {

    // Create New Array    
    let newArray = []
    
    // Fill New Array
    props.words.forEach((element, index) => {
        newArray.push([element, props.definitions[index]])
    })

    // Functions
    
    // Create Component Cards
    let cards = newArray.map((element) => {
        return (
            <GameCard data={element}/>
        )
    })

    return (
        <div className='WordGame'>
            {cards}
        </div>
    )

}
