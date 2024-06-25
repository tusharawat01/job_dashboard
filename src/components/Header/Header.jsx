import React from 'react';
import './Header.css';
import { TiShoppingBag } from "react-icons/ti";
import { RiHandCoinLine } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import Navbar from '../Navbar/Navbar';
import Logo from"./logo.png"

const Header = () => {
    return (
        <>
         <header className="header">
            <div className='main'>
                <div className="left">
                    <h3>Logo</h3>
                </div>
                <div className="middle">
                <div className="content" id="jobs">
                       <span><TiShoppingBag /></span>
                        <span>Jobs</span>
                    </div>
                    <div className='border'>
                    <div className="content message">
                        <span className='message'><FiMessageSquare /></span>
                        <span >Messages</span>
                    </div>
                    <div className="content">
                        <RiHandCoinLine />
                        <span>Payments</span>
                    </div>
                    <div className="content">
                        <FiUsers/>
                        <span>Applications</span>
                    </div>
                    </div>
                    
                </div>
                <div className="right">
                    <span>
                        <FiBell />
                    </span>
                    <span>
                    <img src={Logo} alt="Logo"  />
                    </span>
                    
                    <span>
                        <RiArrowDropDownLine />
                    </span>
                </div>
            </div>   
        </header>
        <Navbar />
        </>
       
    );
}

export default Header;
