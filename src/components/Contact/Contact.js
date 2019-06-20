import React from 'react';
import './Contact.css'

function Contact() {
    return (
        <div className="contact-page">
            <h1>Lets Connect</h1>
            <h2>If you have any questions or concerns or feedbacks or just some random comment you want to express, feel free to reach me out directly. I'm more than glad to answer any type of questions </h2>
            <a href="mailTo:sfahadh14@gmail.com">
                <button>
                    Talk to me
                </button>
            </a>
            <ul>
                <li><a href="https://www.facebook.com/fahad.hussain23" target="_blank" rel="noopener noreferrer">FACEBOOK<span>|</span></a></li>
                <li><a href="https://www.linkedin.com/in/fahad-hussain23/" target="_blank" rel="noopener noreferrer">LINKEDIN<span>|</span></a></li>
                <li><a href="https://github.com/sfahadh" target="_blank" rel="noopener noreferrer">GITHUB<span>|</span></a></li>
                <li><a href="https://www.instagram.com/fahad_owns_u/?hl=en" target="_blank" rel="noopener noreferrer">INSTAGRAM</a></li>
            </ul>
        </div>
    )
}

export default Contact