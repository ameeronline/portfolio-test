import React from 'react'
import './Projects.css'

function Projects() {
    return (
        <div id='projects' className='projects-section'>
            <h2>Recent Projects</h2>
            <div className="projects">
                <div className="project">
                    <h2 className='project-headline'>BookMyShow Clone</h2>
                    <p className='project-content'>This open-source project aims to provide a feature-rich and user-friendly platform for discovering, booking, and enjoying a wide range of events, from movies and concerts to sports and live performances. Built using Node.js, Express.js, MongoDB, and other cutting-edge technologies, this project offers both users and developers an opportunity to engage with the world of event ticketing in a new and exciting way.</p>
                    <a href="https://github.com/ameeronline/bookmyshow" className="github-button"><i class="fa-brands fa-github fa-fade fa-2xl"></i></a>
                    <h5 id='view-on-github'>View on GitHub</h5>
                </div>
                <div className="project">
                    <h2 className='project-headline'>Netflix</h2>
                    <p className='project-content'>Dive into the world of cinema with my Netflix Home Page Clone, meticulously crafted using ReactJS. This project is more than just a clone; it's an immersive experience that brings the original Netflix UI/UX to life.</p>
                    <a href="https://github.com/ameeronline/netflix-home" class="github-button"><i class="fa-brands fa-github fa-fade fa-2xl"></i></a>
                    <h5 id='view-on-github'>View on GitHub</h5>
                </div>
                <div className="project">
                    <h2 className='project-headline'>Todo App</h2>
                    <p className='project-content'>Kickstart your productivity with this simple and intuitive Todo App built with React! Seamlessly manage your tasks, add new todos, and check them off as you complete them. The app features a clean and responsive design, making task organization a breeze.</p>
                    <a href="https://github.com/ameeronline/Todo-App" class="github-button"><i class="fa-brands fa-github fa-fade fa-2xl"></i></a>
                    <h5 id='view-on-github'>View on GitHub</h5>
                </div>
                <div className="project">
                    <h2 className='project-headline'>E-Commerce</h2>
                    <p className='project-content'>Excited to introduce my latest project - a dynamic Shopping Cart web application! This project is designed to provide a seamless and user-friendly experience for managing your online purchases.</p>
                    <a href="https://github.com/ameeronline/E-Commerce-Website" class="github-button"><i class="fa-brands fa-github fa-fade fa-2xl"></i></a>
                    <h5 id='view-on-github'>View on GitHub</h5>
                </div>
            </div>
        </div>
    )
}

export default Projects
