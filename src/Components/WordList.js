// Placeholder

// Styling
import './WordList.css';

// React Import
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Variables
import Card from './WordCard'

// Component
export default function WordList(props) {

    let cards = props.data.map((element) => {

        return (
            <Card data={element} remove={props.remove}/>
        )
    }) 

    return (
        <div className='WordList'>
            {cards}
        </div>
    )

}