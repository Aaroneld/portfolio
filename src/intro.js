import React from 'react'
import "./App"
import myPhoto from "./images/myphoto.jpg"


function Intro () {


    return (
        <div className="intro-div">
            <img src={myPhoto}></img>
            <div className="intro-text">
                <h2>Aaron Namaste Merrifield-Lucier</h2>
                <p>merrifield48@gmail.com - 
                    (518) 703-3243 - <a href="github.com/Aaroneld">
                        github
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Intro;