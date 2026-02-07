import React from 'react'
import './Showcase.css'

function Showcase() {
    return (
        <div id='showcase' className='featured'>
            <div className="certificate">
                <img className='boi-certificate' src="./photos/boi-certificate.png" alt="Born On Instagram Certificate" />
            </div>
            <div className="description">
                <h2><span id="born-on-instagram">#BornOnInstagram</span> Recognized Creator</h2>
                <p>"This comprehensive course covered a range of topics, from content creation strategies and engagement tactics to leveraging Instagram's latest features. The knowledge gained has not only enhanced my proficiency in social media but has also empowered me to create impactful and engaging content. The Creator Course not only polished my content creation skills but also played a pivotal role in helping me monetize my efforts."</p>
                <p>"Also check out and follow my <a href="https://www.instagram.com/ft.ameer">Instagram</a> handle for daily updates and life stories."</p>
            </div>
        </div>
    )
}

export default Showcase
