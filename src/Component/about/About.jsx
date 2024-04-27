import React from 'react'
import port1 from '../../assets/passport1.png'
import port2 from '../../assets/certificate.jpg'
import port3 from '../../assets/Hacktober.jpg'
import './About.css'


export default function Work() {
  return (
    <section id="about">
        <div className="aboutImg">
            <img src={port1} alt="" className="workImg1" />
        </div>
        <div className="port">
            <h2 className="title">About Me</h2>
            <span className="desc">I am currently pursuing my Bachelor of Technology (B-Tech)
                          in Computer Science at Jodhpur Institute of Engineering and
                          Technology. Upcoming Full Stack Web Developer. Additionally,
                          I am enhancing my problem-solving skills by solving Data Structures and Algorithms problem in Java. 
            </span>
            <div className="workImgs">
                <img src={port2} alt="" className="workImg" />
                <img src={port3} alt="" className="workImg" />
            </div>
        </div>
    </section>
  )
}
