import { useState } from 'react'
import Navbar from './Component/navbar/Navbar';
import DIntro from './Component/intro/Intro';
import Skill from './Component/skill/Skill';
import About from './Component/about/About'
import Contact from './Component/contact/Contact';
import Company from './Component/company/Company';
import ReachMe from './Component/reachMe/ReachMe';

function App() {
  return (
    <div>
        <Navbar/>
        <DIntro/>
        <Skill/>
        <About/>
        <Company/>
        <Contact/>
        <ReachMe/>
    </div>
  )
}

export default App;
