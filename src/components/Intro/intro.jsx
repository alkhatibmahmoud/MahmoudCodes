import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["3rd year Student", "Software Developer", "Computer Science Educator"],
    });
  }, []);

    return (
        <div className = "intro" id ="intro">
            <div className = "left">   
                <div className = "imageContainer">
                    <img src="assets/image.png" alt="" />
                </div>
            </div>

            <div className = "right">
                <div className = "wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1> <span className ="letters">M</span>ahmoud
                    <span className="letters"> A</span>l 
                    <span className = "letters"> K</span>hatib</h1>
                    <h3>I'm an enthusiastic <span ref ={textRef}></span></h3>
                </div>
                
                <a href="#work">
                    <img src="assets/down.png" alt="" />
                </a>
               
                
            </div>
        </div>
    )
}
