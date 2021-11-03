// Placeholder

// Styling
import './NavBar.css';

// React Import
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Variables
let url = "https://test.api.amadeus.com/v2"

// Component
export default function NavBar() {

    return (
        <div className='navbar'>
            <Link to=''>Home</Link>
            <Link to='/mywords'>My Words</Link>
        </div>
    )

}