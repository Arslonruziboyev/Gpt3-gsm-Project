import React from "react";
import { RiMenu3Line, RiCloseLin } from "react-icons/ri";
import "./navbar.css";
import logo from '../../assets/logo.svg'

const Navbar = () => {
  return (
    <div className="gpt3_navbar">
      <div className="gpt3_navbar-links">
        <div className="gpt3_navbar_links-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3_navbar_links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">What Is GPT 3</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
