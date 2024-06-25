import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className='navbar'>
        <ul>
            <li><a href="#" className='job-review'>Job review</a></li>
            <li><a href="#">Applicants</a></li>
            <li><a href="#">Match</a></li>
            <li><a href="#">Messages</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
