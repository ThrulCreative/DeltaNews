 import React from 'react'
 import { Link } from 'react-router-dom'
 import Logo3 from '../NewsApp Props/Logo3.png'
 import playstore from '../NewsApp Props/playstore.png'
 
 function Header() {
     return (
         
            <nav>
                
               <div className="nav-items">
                    <div className="logo">
                       <Link to='./'><img style={{width: "200px", marginLeft:'100px'}} src={Logo3} alt=""/></Link>
                    </div>
                   <Link to='./' className="nav-buttons">Home</Link>
                   <Link to='./politics' className="nav-buttons">Politics</Link>
                   <Link to='./business' className="nav-buttons">Business</Link>
                   <Link to='./science' className="nav-buttons">Science & Tech</Link>
                   <Link to='./sports' className="nav-buttons">Sports</Link>
                   <Link to='./entertainment' className="nav-buttons">Entertainment</Link>
                   <img src={playstore}  className="play" alt=""/>
                
               </div> 
            </nav> 
         
     )
 }
 
 export default Header
 