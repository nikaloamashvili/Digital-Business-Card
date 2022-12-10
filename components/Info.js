import React from "react"


export default function Info(){
    return(
        <div className ="Info">
        <img className ="Iimg" src="../images/mypic.png" />
        <h1 className ="Ih1">Nika Lomashvili</h1>
        <h2 className ="Ih2">software developer</h2>
        <h3 className ="Ih3">Nika's Portfolio</h3>
        <div  className ="Ibuttons" >
        <button  className ="Iemail" ><img className="Iemailimg"  src="../images/Icon.png"/>   <a  className="link" href="mailto: nikalomashvili@gmail.com" target="_blank"> Email </a> </button>
        <button  className ="ILinkedIn"><img className="ILinkedInimg" src="../images/Vector.png"/> <a  className="link" href="https://www.linkedin.com/in/nika-lomashvili-software-developer/" target="_blank"> LinkedIn </a>  </button>
        </div>
        </div>
    )
}