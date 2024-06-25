import React from 'react';
import './Header.css';
import { TiShoppingBag } from "react-icons/ti";
import { RiHandCoinLine } from "react-icons/ri";
import { FiMessageSquare } from "react-icons/fi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";

const Header = () => {
    return (
        <header className="header">
            <div className='main'>
                <div className="left">
                    <h3>Logo</h3>
                </div>
                <div className="middle">
                    <div className="content jobs">
                        <TiShoppingBag />
                        <span>Jobs</span>
                    </div>
                    <div className="content message">
                        <span className='message'><FiMessageSquare /></span>
                        <span >Messages</span>
                    </div>
                    <div className="content">
                        <RiHandCoinLine />
                        <span>Payments</span>
                    </div>
                </div>
                <div className="right">
                    <span>
                        <FiBell />
                    </span>
                    <span></span>
                    <span>
                        <RiArrowDropDownLine />
                    </span>
                </div>
            </div>   
        </header>
    );
}

export default Header;
