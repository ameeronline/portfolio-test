import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-space">
        <h4><i class="fa-regular fa-copyright"></i>&nbsp;ameeronline 2024-25</h4>
        <h4 className='email'>helloameeronline@gmail.com</h4> 
        <div className="social-media">
          <a href="https://www.linkedin.com/in/ameeronline"><i class="fa-brands fa-linkedin-in fa-xl"></i></a>
          <a href="https://github.com/ameeronline"><i class="fa-brands fa-github fa-xl"></i></a>
          <a href="https://www.instagram.com/ft.ameer"><i class="fa-brands fa-instagram fa-xl"></i></a>
          <a href="https://twitter.com/ameeronline_"><i class="fa-brands fa-x-twitter fa-xl"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
