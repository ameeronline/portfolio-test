import React from 'react'
import './About.css'

function About() {
    return (
        <div>
            <div id='about' className="about">
                <div className="about-description">
                    <h4 className="description">
                        "Hello,<br /> I'm a tech enthusiast and a BCA graduate with expertise in JavaScript, Node.js, Express.js, and Java. Proficient in Software Development Life Cycle (SDLC), I specialize in delivering high-quality software solutions. Beyond coding, I'm also an avid Photographer & Instagrammer, sharing creative travel content. My journey as a software developer reflects not only my academic achievements but also a passion for exploring new technologies and trends."<br />
                        <img className='signature' src='./name.png' alt="Signature" />
                    </h4>
                </div>
                <div className="about-photo">
                    <img className='photo' src='./photos/apple-emoji-one.png' alt="Animoji" />
                </div>
            </div>
        </div>
    )
}

export default About
