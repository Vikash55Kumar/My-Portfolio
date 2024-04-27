import React, { useState } from 'react'
import "./Navbar.css";
import logo from '../../assets/logo.png';
import {Link} from "react-scroll";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import menu from '../../assets/menu.png'

export default function Navbar() {
  const [showMenu, setShowMenu]=useState(false);
  return (
    <>
      <div className="navbar">
        <Link activeClass='active1' to='intro' spy={true} smooth={true} offset={-100} duration={500}>
          <img id='logo' src={logo} alt=''/>
        </Link>
        <div className="navMenu">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="navMenuItem">Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="navMenuItem">Skills</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-50} duration={500} className="navMenuItem">About</Link>
          <Link activeClass='active' to='Company-sec' spy={true} smooth={true} offset={-50} duration={500} className="navMenuItem">Dream</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="navMenuItem">Contact</Link>
        </div>
        <FormControlLabel control={<Switch defaultChecked />} />
  

        <img className='mobMenu' src={menu} alt='Menu' onClick={()=>setShowMenu(!showMenu)}/>
        <div className="NavMenu" style={{display: showMenu ? 'flex':'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
          <Link activeClass='active' to='Company-sec' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Dream</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
        </div>

    </div>
    </>
  )
}
