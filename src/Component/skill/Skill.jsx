import React from 'react'
import './Skill.css'
import web_developer from '../../assets/website-design.png'
import ui from '../../assets/ui-design.png'
import app from '../../assets/app-design.png'


export default function Skill() {
  return (
    <>
      <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDescription">
          I am a dedicated B-tech student and passionate in Java Problem solving
          and web development, with a experience for creating user-friendly 
          portfolio websites using React.js. Proficient in HTML, CSS, JavaScript, 
          and React.js, I also have hands-on experience with Canva. I’m a quick 
          learner, adaptable, and a firm believer in collaboration. In my free time, 
          I enjoy mentoring, coding, and reading books.
        </span>
        <div className="skillBars">
          <div className="skillBar">
            <img src={web_developer} alt="" className="skillBarImage" />
            <div className="skillBarText">
            <h2>Web Development</h2>
            <p>Upcoming Full Stack Developer</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={app} alt="" className="skillBarImage" />
            <div className="skillBarText">
            <h2>DSA in Java</h2>
            <p>Enhance problem solving skills</p>
            </div>
          </div>
          <div className="skillBar">
            <img src={ui} alt="" className="skillBarImage" />
            <div className="skillBarText">
            <h2>Reading Books</h2>
            <p>Inspirational and motivational literature</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

