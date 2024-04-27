import React from 'react'
import bg from '../../assets/photo6.png';
import Button from '@mui/material/Button';
import './Intro.css' 

export default function Intro() {
  return (
    <>
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText"> I'm 
                    <span className="introName"> Vikash  </span>
                </span>
                <span className="developer"> Web Developer   </span>
                <p>I will become a full stack web developer</p>
                <Button className='btn' variant="outlined" 
                    href="https://drive.google.com/file/d/1hnqorxYuW_pRfsoJivyV1ivsD07moMRc/view?usp=drive_link">
                    Download CV
                  </Button>
            </div>
            <div className="ig" >
              <img className='image' src={bg} alt="profile" />
            </div>
        </section>
    </>
  )
}

