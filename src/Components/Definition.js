// Placeholder

// Styling
import './Definition.css';

// React Import
import React, {useState} from "react";

// Variables


// Component
export default function Definition(props) {

    let meanings

    if (props.data !== "" && !props.data.title) {

        meanings = props.data[0].meanings.map((element) => {
            return (
                <div className="meaning">
                     {`(${element.partOfSpeech}) ${element.definitions[0].definition}`}
                </div>
            )
        })
    }


    return (
        <div className='Definition'>
            {props.data[0] ? <div>
            <h1>
                {props.data[0].word}
            </h1>
            <h2> 
                {`/${props.data[0].phonetic}/`}
            </h2>

            <div className="meanings">
            {meanings ? meanings:`(${props.data[0].meanings[0].partOfSpeech}) ${props.data[0].meanings[0].definitions[0].definition}`}
            </div>
            </div>: <div> 

            <h1>
                {props.data.title}
            </h1>
                
            </div>}
        </div>
    )

}