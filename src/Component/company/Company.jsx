import React from 'react'
import adobe from '../../assets/adobe.png'
import microsoft from '../../assets/microsoft.png'
import walmart from '../../assets/walmart.png'
import facebook from '../../assets/facebook.png'
import './Company.css'

export default function Company() {
  return (
    <section id="Company-sec">
        <div className="company">
                <span className="title">Dream Company</span>
                <span className="description">
                  I have been giving my best to secure an opportunity to work with a professional and innovative company.
                  Some of the notable companies that I aspire to be a part of it include
                </span>
                <div className="compImage">
                    <img src={adobe} alt="" className="ImageCompany" />
                    <img src={microsoft} alt="" className="ImageCompany" />
                    <img src={facebook} alt="" className="ImageCompany" />
                    <img src={walmart} alt="" className="ImageCompany" />
                </div>
            </div>
    </section>
  )
}
