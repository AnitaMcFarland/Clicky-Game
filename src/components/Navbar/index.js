import React from "react";
import './navbar.css';


function Navbar(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <ul>
                <li> Clicky Game!</li>
                <li>Click on a picture only once to score</li>
              
                { <li>Score: {props.score} | Top Score: {props.topScore}</li> }
            </ul>
        </nav>
    )
}

export default Navbar;

                    
                  