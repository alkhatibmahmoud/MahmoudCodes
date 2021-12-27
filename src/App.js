import Topbar from "./components/Topbar/topbar"
import Intro from "./components/Intro/intro"
import Work from "./components/Work/work"
import Protfolio from "./components/protfolio/protfolio";
import Contact from "./components/contact/contact";
import Menu from "./components/Menu/menu";
import "./app.scss"
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
      <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen} />
      <div className = "sections"> 
        <Intro/>
        <Work/>
        <Protfolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
