import React from 'react'
import './Programm.css'
import p8 from '../../assets/p8.png'
import p7 from '../../assets/p7.png'
import p6 from '../../assets/p6.png'
import p5 from '../../assets/p5.png'
import p4 from '../../assets/p4.png'
import p3 from '../../assets/p3.png'
import p2 from '../../assets/p2.png'
import p1 from '../../assets/p1.png'



const Programm = () => {
  return (
    <>
<div className='title'>
    <h1>Why use Robotic Process Automation</h1>
        <p>RPA helps organizations boost operational efficiency, reduce errors, and unlock the data and value associated with their historical technology investments. <br/>
        Leading to more satisfied customers, happier employees, and better revenue.</p>

    <div className='programm'>
        <div className='programms'>
            <img src={p8} alt="" />
            <h4>Rapid Deployment and ROI</h4>
        </div>
        <div className='programms'>
            <img src={p7} alt="" />
            <h4>Maximize Operational Efficiency</h4>
        </div>
        <div className='programms'>
            <img src={p6} alt="" />
            <h4>Minimize Error Incidents and Bottlenecks</h4>
        </div>
        <div className='programms'>
            <img src={p5} alt="" />
            <h4>Enhanced Productivity</h4>
        </div>
        <div className='programms'>
            <img src={p4} alt="" />
            <h4>Maximize Accuracy and Speed</h4>
        </div>
        <div className='programms'>
            <img src={p3} alt="" />
            <h4>Better Customer Experience</h4>
        </div>
        <div className='programms'>
            <img src={p2} alt="" />
            <h4>Improved Employee Satisfaction</h4>
        </div>
        <div className='programms'>
            <img src={p1} alt="" />
            <h4>Ensure Audit Trails and Compliance</h4>
        </div>
    </div>
    </div>
    </>
  )
}

export default Programm