import React from 'react'
import "./Main.css"
import { CiLocationOn } from "react-icons/ci";
import { FaCoins } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { PiFigmaLogoFill } from "react-icons/pi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { PiPencilLight } from "react-icons/pi";
import { FiUserCheck } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";


function Main() {
  return (
    <div className='section'>
      <div className="about">
        <div className="up">
        <h2>Senior Product Designer</h2>
        <p>posted 2 days ago</p>
      <a href="#"><li>Open</li></a>
        </div>
        <div className='down'>
            <div className='down1'>
                <span><CiLocationOn /></span>
                <span>Delaware, USA</span>
            </div>
            <div className='down2'>
                <span><FaCoins /></span>
                <span>$300k-$400k</span>
            </div>
        </div>  
      </div>
      <hr />
      <div className="requirement">
        <div className='one'>
            <h4>Skills Required</h4>
            <div className="button">
            <span><PiFigmaLogoFill />  Figma</span> <br />
            <span><SiAdobeillustrator />   Adobe Illustrator</span> <br />
            <span><SiAdobexd />   Adobe XD</span>
            </div>
        </div>
        <div className='two'>
          <h4>Preferred Language</h4>
          <h2>English</h2>
        </div>
        <div className="three">
          <h4>Type</h4>
          <h2>Full Time</h2>
        </div>
        <div className="four">
          <h4>Year of Experience</h4>
          <h2>3+ Years of Experience</h2>
        </div>
      </div>
      <hr />
      <div className="about2">
        <h4>About the job</h4>
        <div className='content'>
        <ol>
          <li>Handle the UI/UX research design</li>
          <li>Work on reseaerching on latest web application design & trends</li>
          <li>Work on conceptualizing and visualizing</li>
          <li>Work on creating graphics content and other graphic related work</li>
        </ol>
        <span>Benefits:</span>
        <ul>
          <li>Health insurance</li>
          <li>Provident Fund</li>
        </ul>
        <span>Scheduled:</span>
        <ul><li>Day shift</li></ul>
        <span>Supplemental pay types:</span>
        <ul>
          <li>Performance bonus</li>
          <li>Yearly bonus</li>
        </ul>
        <span>Work Location: In person</span>
        </div>
       
      </div>
      <hr />

      <aside>
        <div className='contains'>
        <div className='buttons'>
          <button><RiDeleteBin5Line />   Delete job</button>
          <button><PiPencilLight />   Edit job</button>
        </div>
        <div className='last'>
          <span><FiUsers />   Applicants</span>
          <span>400</span>
        </div>
        <div className='last'>
          <span><FiUserCheck />   Matches</span>
          <span>100</span>
        </div>
        <div className='last'>
          <span><FiMessageSquare/>   Messages</span>
          <span>147</span>
        </div>
        <div className='last'>
          <span><IoEyeOutline />   Views</span>
          <span>400</span>
        </div>
        </div>
        
      </aside>
    </div>
  )
}

export default Main
