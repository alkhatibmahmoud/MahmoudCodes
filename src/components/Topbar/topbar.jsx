
import "./topbar.scss"
import Work from '@material-ui/icons/Work';




export default function topbar({menuOpen,setMenuOpen}) {
   
    return (
        <div className ={"topbar " +(menuOpen && "active")}>
           <div className="wrapper">
              <div className="left">
                   <a href="#intro" className ="logo"> MAK.</a>
                   <div className ="itemContainer">
                        <Work className ="icons"/>
                        <a href="#Mahmoud_Al_Khatib_SDE.pdf">Resume</a>
                    
                   </div>
               </div>
               <div className="right">
                   <div className = "hamburger" onClick = {()=> setMenuOpen(!menuOpen) }>
                       <span className = "line1"></span>
                       <span className = "line2"></span>
                       <span className = "line3"></span>
                   </div>

               </div>
              
           </div>
            
        </div>
    )
}
