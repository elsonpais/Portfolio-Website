import React from 'react'

const Social = () => {
  return (
    <div className="home__social">
        <a href="https://linkedin.com/in/elsonpais" className="home__social-icon" target="_blank" rel="noreferrer">
            <i className="uil uil-linkedin-alt"></i>
        </a>

        <a href="https://github.com/elsonpais" className="home__social-icon" target="_blank" rel="noreferrer">
            <i className="uil uil-github-alt"></i>
        </a>
        
        <a href="https://www.instagram.com/elsonpais/" className="home__social-icon" target="_blank" rel="noreferrer">
            <i className="uil uil-instagram"></i>
        </a>

        <a href="mailto:elsonpais22@gmail.com" className="home__social-icon" target="_blank" rel="noreferrer">
            <i className="uil uil-envelope"></i>
        </a>
    </div>
  )
}

export default Social