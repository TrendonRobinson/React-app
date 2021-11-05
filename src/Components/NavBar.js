// Placeholder

// Styling
import './NavBar.css';

// React Import
import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

// Variables

// Component
export default function NavBar() {

    return (
        <div className='navbar'>
            <Link to='/React-App'>Home</Link>
            <Link to='/my-words'>My Words</Link>
            <Link to='/word-game'>Word Game</Link>
        </div>
    )

}