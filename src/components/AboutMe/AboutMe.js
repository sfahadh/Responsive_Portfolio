import React from 'react';
import './AboutMe.css'
import '../../index.css'
import Summary from './Summary'

function AboutMe() {
    return (
        <div className="about-me-page">
            <div className="image-about">
                <div className="whole-image">
                    <div id="about-image"></div>
                </div>
                
                <div className="about-me-info">
                    <h1>About Me</h1>
                    <hr/>
                    <p>Hi! My name is Fahad Hussain and I am a Full Stack Developer. I got into this field because technology is continuously advancing and I wanted to be involved in this growing industry. I was hooked into this field when I built my first game app and realized that I wanted to do so much more. With my background as a Personal Trainer involved in the Health Science field and a Bachelor's Degree in Exercise Science at Lehman College, I want to combine the two entities together where Health Science meets Technology. With that I can reach a broad audience fighting against all sorts of health disparities in unique ways.</p>
                </div>
            </div>
            <Summary />
        </div>
    )
}

export default AboutMe
