import "./menu.scss";

import React from 'react'

export default function menu({menuOpen, setMenuOpen}) {

    return (
        <div className = {"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick ={()=> setMenuOpen(false)}>
                    <a href="#intro">Intro</a>
                </li>
                <li onClick ={()=> setMenuOpen(false)}>
                    <a href="#work"> Experience</a>
                </li>
                <li onClick ={()=> setMenuOpen(false)}>
                <a href="#protfolio">Protfolio</a>
                </li>  
                <li onClick ={()=> setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
                   
                    
                    
                
            </ul>
            
        </div>
    )
}
