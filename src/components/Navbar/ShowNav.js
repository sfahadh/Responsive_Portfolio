import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";


class ShowNav extends Component {
    
    render() {
        let navClass = !this.props.reveal ? "side-drawer" : "side-drawer slide-action"
        return (
            <div>
                <nav className={navClass}>
                    <img id="logo-image" alt="my new logo" src={require("../../Images/logo.png")}/>
                    <ul className='nav-links'>
                        <h4><Link to="/"><FontAwesomeIcon icon={faHome}/></Link></h4>
                        <h6 id="home">Home</h6>
                        <h4><Link to="about-me"><FontAwesomeIcon icon={faUser}/></Link></h4>
                        <h6 id="about">About Me</h6>
                        <h4><Link to="projects"><FontAwesomeIcon icon={faEye}/></Link></h4>
                        <h6 id="projects">Projects</h6>
                        <h4><Link to="contact"><FontAwesomeIcon icon={faAddressBook}/></Link></h4>
                        <h6 id="contact">Contact</h6>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default ShowNav