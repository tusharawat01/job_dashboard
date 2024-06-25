import React from 'react';
import Logo from "./logo.png";
import "./Footer.css"

function Footer() {
  return (
    <footer>
      <div className='top'>
        <img src={Logo} alt="Logo" style={{ width: '40px', height: '40px' }} />
        <span>Atlassian</span> 
      </div>
      <div className='footer-content'>
        <div className='first'>
            <div>
                <h4>Company size</h4>
                <span>1k - 2k Employees</span>
            </div>
            <div className='gap'>
                <h4>Type</h4>
                <span>Private</span>
            </div>
        </div>
        <div className='second'>
            <div>
                <h4>Sector</h4>
                <span>Information Technology, Infrastructure</span>
            </div>
            <div className='gap'>
                <h4>Funding</h4>
                <span>Bootstrapped</span>
            </div>
        </div>
        <div className='third'>
            <div>
                <h4>Founded In</h4>
                <span>2019</span>
            </div>
            <div className='gap'>
                <h4>Founded By</h4>
                <span>Scott Farquhar, Mike Cannon-Brookes</span>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;